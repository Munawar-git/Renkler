import Nav from "./scripts/navbarToggle.js";

const xs = matchMedia("(min-width:0px)");
const sm = matchMedia("(min-width:480px)");
const md = matchMedia("(min-width:720px)");
const lg = matchMedia("(min-width:960px)");
const xl = matchMedia("(min-width:1200px)");

const nav = new Nav();
nav.init();
