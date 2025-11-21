function About(container) {
    const contactDiv = document.createElement("div")
    contactDiv.id = "contactDiv"
    container.appendChild(contactDiv)

    const phone = document.createElement("p")
    const email = document.createElement("p")
    const instagram = document.createElement("p")

    phone.textContent = "555-0100"
    email.textContent = "emiliano@emilianositalian.com"
    instagram.textContent = "@EmilianosItalian"

    contactDiv.appendChild(phone)
    contactDiv.appendChild(email)
    contactDiv.appendChild(instagram)
}

export default About
