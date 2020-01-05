function transformNavIcon(x) {
    x.classList.toggle("change");
}

function openNav() {
    // Open the nav drawer
    document.getElementById("nav-drawer-container").style.height = "auto";
    document.getElementById("nav-menu-container").style.backgroundColor = "transparent";

    // Style the hamburger icon
    document.getElementById("nav-bar1").style.backgroundColor = "black";
    document.getElementById("nav-bar3").style.backgroundColor = "black";
}

function closeNav() {
    document.getElementById("nav-drawer-container").style.width = "0";
}