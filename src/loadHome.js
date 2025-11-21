import chefHatImg from "./Images/chef-hat.svg"

function Home(container) {
    // so this actually creates stuff. thats why its packaged in here.
    const img = document.createElement("img")
    img.src = chefHatImg
    img.id = "chefHatImg"
    const h1 = document.createElement("h1")
    h1.textContent = "Emiliano's Italian"
    h1.id = "titleHeader"
    const para = document.createElement("p")
    para.textContent = "Emiliano's Italian is truly a memorable experience. Come try our chicken parmesan, topped with fresh basil and cherry tomatoes. Not to mention our signature panzanella salad. Another choice is our margherita pizza, a classic. Flavorful and timeless, the definition of a perfect dish. Don't forget to ask for the desserts menu when you're finished! We're in no shortage of treats."
    para.id = "descriptionPara"
    container.appendChild(img)
    container.appendChild(h1)
    container.appendChild(para)
}

export default Home
