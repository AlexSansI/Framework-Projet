function displayMenu() {
    const menu = document.getElementById("menu")
    const nav = document.getElementById("nav")
    if (menu.style.display === "none") {
        menu.style.display = "block"
        nav.setAttribute("style","height:auto !important");
    }
    else {
        menu.style.display = "none"
        nav.removeAttribute("style","height:60px !important");
    }
}