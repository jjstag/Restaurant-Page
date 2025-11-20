import chefHatImg from "./Images/chef-hat.svg"

function Head() {
    
    const div = document.getElementById("content")

    const img = document.createElement("img")
    img.src = chefHatImg
    const header = document.createElement("h1")
    header.textContent = "Emiliano's Italian"
    const para = document.createElement("p")
    para.textContent = "Emiliano's Italian is truly a spectacular experience. You will savor eating the chicken parmesan special, topped with fresh basil and fresh cherry tomatoes. You will dream of having just one more bite of that mouthwatering panzanella salad. This is a really long paragraph that's secretly nonsense sandwiched between a few sentences about the food. This paragraph is so long because it needs to look good on the page. This paragraph is very pretty. The margarita pizza is a must. Flavorful and topped with everything on a normal margarita, it is the definition of a perfect dish."
    div.appendChild(img)
    div.appendChild(header)
    div.appendChild(para)
}

export default Head
