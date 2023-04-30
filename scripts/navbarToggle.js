class NavList {
  constructor(element) {
    this.element = element;
    this.lg = matchMedia("(min-width:960px)");
    window.addEventListener("resize", this.remove.bind(this));
    this.isOpen = false;
  }

  toggle() {
    if (this.isOpen) {
      this.element.classList.remove("open");
    } else {
      this.element.classList.add("open");
    }
    this.isOpen = !this.isOpen;
  }

  remove() {
    if (this.lg.matches) {
      this.element.classList.remove("open");
      this.isOpen = false;
    }
  }
}

class ToggleBtn {
  constructor(element) {
    this.element = element;
    this.lg = matchMedia("(min-width:960px)");
    window.addEventListener("resize", this.removeClosedClass.bind(this));
  }

  toggleClosedClass() {
    this.element.classList.toggle("closed");
  }

  removeClosedClass() {
    if (this.lg.matches) {
      this.element.classList.remove("closed");
    }
  }
}

export default class Nav {
  constructor() {
    this.navLists = document.querySelectorAll(".nav-list");
    this.toggleBtns = document.querySelectorAll("nav label.toggle-btn");
    this.xs = matchMedia("(min-width:0px)");
    this.navLists.forEach((navList) => {
      const name = navList.getAttribute("name");
      this[name] = new NavList(navList);
    });
    this.toggleBtns.forEach((toggleBtn) => {
      const name = toggleBtn.getAttribute("for") + "For";
      this[name] = new ToggleBtn(toggleBtn);
    });
  }

  toggleNav(navListName) {
    const navList = this[navListName];
    const btn = this[navListName + "For"];
    if (this.xs.matches) {
      navList.toggle();
      btn.toggleClosedClass();
    }
  }

  handleToggleNavClick(event) {
    const labelFor = event.target.getAttribute("for");
    this.toggleNav(labelFor);
  }

  init() {
    this.toggleBtns.forEach((toggleBtn) => {
      toggleBtn.addEventListener("click", this.handleToggleNavClick.bind(this));
    });
  }
}
