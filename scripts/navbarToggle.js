class NavList {
  constructor(element) {
    this.element = element;
    this.navItems = this.element.querySelectorAll(".nav-item");
    this.openHeight = this.navItems.length * 45;
    this.closeStyle =
      "\
      height:0px; \
      margin-top:0; \
    ";
    this.openStyle =
      "\
      height:" +
      this.openHeight +
      "px; \
      margin-top:1rem; \
    ";
    this.isOpen = false;
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.element.style.cssText = this.openStyle;
    this.isOpen = true;
    console.log(this.isOpen);
  }

  close() {
    this.element.style.cssText = this.closeStyle;
    this.isOpen = false;
    console.log(this.isOpen);
  }
}

export default class Nav {
  constructor() {
    this.navLists = document.querySelectorAll(".nav-list");
    this.xs = matchMedia("(min-width:0px)");
    this.lg = matchMedia("(min-width:960px)");
    this.toggleBtns = document.querySelectorAll("nav label.toggle-btn");
    this.navLists.forEach((navList) => {
      const name = navList.getAttribute("name");
      this[name] = new NavList(navList);
    });
  }

  toggleNav(navListName) {
    const navList = this[navListName];
    if (this.xs.matches) {
      navList.toggle();
    }
  }

  handleToggleNavClick(event) {
    const labelFor = event.target.getAttribute("for");
    this.toggleNav(labelFor);
  }

  handleResize() {
    this.navLists.forEach((navList) => {
      if (this.lg.matches) {
        navList.style.height = "fit-content";
        navList.style.marginTop = "0";
      } else if (this.xs.matches) {
        navList.style.height = "0px";
      }
    });
  }

  init() {
    this.toggleBtns.forEach((toggleBtn) => {
      toggleBtn.addEventListener("click", this.handleToggleNavClick.bind(this));
    });
    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
  }
}

// const nav = new Nav();
// nav.init();
