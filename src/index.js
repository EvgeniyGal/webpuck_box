import "./style.scss";
console.log("Hello world with watch!");
console.log("Hello world with watch! - 2");

// В app.js
import menuTemplate from "./manu.hbs";

console.log(menuTemplate);

const menuData = {
  title: "Eat it createElement, templates rule!",
  items: ["Handlebars", "LoDash", "Pug", "EJS", "lit-html"]
};

console.log(menuData, typeof menuData, Array.isArray(menuData.items));

const markup = menuTemplate(menuData); // html разметка с подставленным значениями

console.log("----------", markup);

const divMod = document.querySelector(".mod");
console.log(divMod);

divMod.insertAdjacentHTML("afterend", markup);
