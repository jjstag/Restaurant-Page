import Home from "./loadHome.js"
import Menu from "./loadMenu.js"
import About from "./loadAbout.js"
import "./styles.css";

const div = document.getElementById("content")
const nav = document.querySelector("nav")
Home(div)
nav.addEventListener("click", (e) => {
    div.textContent = ""
    // console.log(e.target)
    switch (e.target.id) {
        case "menuBtn":
            console.log("Menu")
            Menu(div)
            break;
        case "homeBtn":
            console.log("Home")
            Home(div)
            break;
        case "aboutBtn":
            console.log("About")
            About(div)
            break;
        default:
            break; 
    }
})