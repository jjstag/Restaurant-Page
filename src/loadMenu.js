function Menu() {
    
    const div = document.getElementById("content")

    const img = document.createElement("img")
    img.src = chefHatImg
    img.id = "chefHatImg"
    const h1 = document.createElement("h1")
    h1.textContent = "Emiliano's Italian"
    h1.id = "titleHeader"
    const para = document.createElement("p")
    para.textContent = "Emiliano's Italian is truly a spectacular experience. You'll savor your time eating the chicken parmesan special, topped with fresh basil and fresh cherry tomatoes. You will dream of having just one more bite of that mouthwatering panzanella salad. This sentence exists because I wanted the paragraph to look bigger on the webpage. Thus, it is here, lying sandwiched between a few sentences about the food. Very pretty. The margarita pizza is a must. Flavorful and topped with everything on a normal margarita, it is the definition of a perfect dish."
    para.id = "descriptionPara"
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(para)
}

export default Menu