// // selecting all alert-box class
// const alertBoxes = document.querySelectorAll(".alert-box");
// const alertTriggers = document.querySelectorAll(".alert-trig");

// // appening cross span in alert box
// alertBoxes.forEach((box) => {
//   const crossSpan = document.createElement("span");
//   crossSpan.classList += "cross-sign";
//   box.appendChild(crossSpan);
//   crossSpan.addEventListener("click", () => {
//     box.classList.add("hidden");
//   });
// });

// alertTriggers.forEach((trigger) => {
//   const name = trigger.getAttribute("name");
//   const alertBox = document.querySelector(`.alert-box[name = "${name}"]`);
//   if (alertBox) {
//     trigger.addEventListener("click", () => {
//       alertBox.classList.remove("hidden");
//     });
//   }
// });

class AlertBox {
  constructor(name) {
    this.name = name;
    this.alertBox = document.querySelector(`.alert-box[name="${name}"]`);
    if (!this.alertBox) {
      throw new Error(`Alert box with name "${name}" not found.`);
    }
    this.init();
  }

  init() {
    const crossSpan = document.createElement("span");
    crossSpan.classList += "cross-sign";
    this.alertBox.appendChild(crossSpan);
    crossSpan.addEventListener("click", () => {
      this.hide();
    });
  }

  show() {
    this.alertBox.classList.add("show");
  }

  hide() {
    this.alertBox.classList.remove("show");
  }
}

class AlertTrigger {
  constructor(name) {
    this.name = name;
    this.trigger = document.querySelector(`.alert-trig[name="${name}"]`);
    if (!this.trigger) {
      throw new Error(`Alert trigger with name "${name}" not found.`);
    }
    this.init();
  }

  init() {
    const alertBox = new AlertBox(this.name);
    this.trigger.addEventListener("click", () => {
      alertBox.show();
    });
  }
}

export default class Alert {
  constructor() {}

  init() {
    const alertTriggers = document.querySelectorAll(".alert-trig");
    alertTriggers.forEach((trigger) => {
      const name = trigger.getAttribute("name");
      new AlertTrigger(name);
    });
  }
}
