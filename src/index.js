import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const content = document.getElementById("content");

const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const contactButton = document.getElementById("contact-btn");

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
});

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
});

contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadContact();
});

loadHome();
