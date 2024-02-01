const showMenu = () => {
    const navbar = document.querySelector("#navbar")
    navbar.classList.toggle("showMenu")
    
    const fade = document.querySelector("#boxFade")
    fade.classList.toggle("hide")
}

export default showMenu