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
    para.textContent = "Emiliano's Italian is truly a memorable experience. You'll surely enjoy your time trying the chicken parmesan special, topped with fresh basil and fresh cherry tomatoes. We are confident you'll order seconds of our signature panzanella salad. Not to mention, the margherita pizza is a crowd favorite. Flavorful and topped with everything on a normal margarita, it is the definition of a perfect dish. Don't forget to ask for the desserts menu when you're finished. We're in no shortage of cultural delicacies."
    para.id = "descriptionPara"
    container.appendChild(img)
    container.appendChild(h1)
    container.appendChild(para)
}

export default Home
