import bruschetta from "./Images/bruschetta.jpg"
import gelatoVanilla from "./Images/gelato-vanilla.jpg"
import ravioli from "./Images/ravioli.jpg"
import margheritaPizza from "./Images/margherita-pizza.jpg"
import risotto from "./Images/risotto.jpg"
import chickenParmesan from "./Images/chicken-parmesan.jpeg"
import panzanellaSalad from "./Images/panzanella-salad.jpg"
import sandwichCookies from "./Images/sandwich-cookies.jpeg"
import gelatMint from "./Images/gelato-mint.jpg"
import pastaCarbonara from "./Images/pasta-carbonara.jpg"
import spaghetti from "./Images/spaghetti.jpeg"
import gelatoStrawberry from "./Images/gelato-strawberry.jpg"
import piadina from "./Images/piadina.jpg"
import tiramisu from "./Images/tiramisu.jpg"

const images = {
  bruschetta,
  gelatoVanilla,
  ravioli,
  margheritaPizza,
  risotto,
  chickenParmesan,
  panzanellaSalad,
  sandwichCookies,
  gelatMint,
  pastaCarbonara,
  spaghetti,
  gelatoStrawberry,
  piadina,
  tiramisu,
}

function Menu(container) {
  for (const image in images) {
    const img = document.createElement("img")
    img.src = images[image]
    img.className = "menuImage"
    img.alt = image
    container.appendChild(img)
  }
}

export default Menu