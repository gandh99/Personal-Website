var navIsOpen = false;

function openCloseNav(x) {
    transformNavIcon(x);
    if (navIsOpen) {
        closeNav();
        navIsOpen = false;
    } else {
        openNav();
        navIsOpen = true;
    }
}

function transformNavIcon(x) {
    x.classList.toggle("change");
}

function openNav() {
    // Open the nav drawer
    document.getElementById("nav-drawer-container").style.height = "auto";
    document.getElementById("nav-menu-container").style.backgroundColor = "transparent";

    // Style the hamburger icon
   hamburgerClose();
}

function closeNav() {
    document.getElementById("nav-drawer-container").style.height = "0";
    hamburgerOpen();
}

function hamburgerClose() {
    document.getElementById("nav-bar1").style.backgroundColor = "black";
    document.getElementById("nav-bar3").style.backgroundColor = "black";
}

function hamburgerOpen() {
    document.getElementById("nav-menu-container").style.backgroundColor = "#434242";
    document.getElementById("nav-bar1").style.backgroundColor = "white";
    document.getElementById("nav-bar2").style.backgroundColor = "white";
    document.getElementById("nav-bar3").style.backgroundColor = "white";
}