// import NavbarToggle from "./navbarToggle.js";
import Nav from "./scripts/navbarToggle.js";
import Alert from "./scripts/alertBox.js";
import "./scripts/alertBox.js";

const xs = matchMedia("(min-width:0px)");
const sm = matchMedia("(min-width:480px)");
const md = matchMedia("(min-width:720px)");
const lg = matchMedia("(min-width:960px)");
const xl = matchMedia("(min-width:1200px)");

const nav = new Nav();
nav.init();

const alert = new Alert();
alert.init();

// const media = () => {
//   if (xl.matches) {
//     console.log("XL SIZE");
//     document.querySelector(".media-query").style.width = "1000px";
//   } else if (lg.matches) {
//     console.log("LG SIZE");
//     document.querySelector(".media-query").style.width = "800px";
//   } else if (md.matches) {
//     console.log("MD SIZE");
//     document.querySelector(".media-query").style.width = "600px";
//   } else if (sm.matches) {
//     console.log("SM SIZE");
//     document.querySelector(".media-query").style.width = "400px";
//   } else if (xs.matches) {
//     console.log("XS SIZE");
//     document.querySelector(".media-query").style.width = "200px";
//   }
// };

// const alertToggler = new AlertToggler();
