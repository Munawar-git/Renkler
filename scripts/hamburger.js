export default class Hamburger {
  constructor() {
    this.hamburgers = document.querySelectorAll(".hamburger");
  }

  toggleClosedClass(burger) {
    burger.srcElement.classList.toggle("closed");
  }

  init() {
    this.hamburgers.forEach((burger) => {
      burger.addEventListener("click", this.toggleClosedClass.bind(this));
    });
  }
}
