import Home from "./loadHome.js"
import "./styles.css";

Home()
const nav = document.querySelector("nav")
nav.addEventListener("click", (e) => {
    // console.log(e.target)
    switch (e.target.id) {
        case "menuBtn":
            console.log("Menu")
            break;
        case "homeBtn":
            console.log("Home")
            break;
        case "aboutBtn":
            console.log("About")
            break;
        default:
            break; 
    }
})