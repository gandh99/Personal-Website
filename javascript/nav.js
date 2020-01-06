var navIsOpen = false;

// Main function used to trigger the opening and closing of the nav drawer
function openCloseNav(x) {
    transformNavIcon(x);
    if (navIsOpen) {
        closeNav();
    } else {
        openNav();
    }
}

function transformNavIcon(x) {
    x.classList.toggle("change");
}

function openNav() {
    navIsOpen = true;

    // Open the nav drawer
    document.getElementById("nav-drawer-container").style.height = "370px";
    document.getElementById("nav-menu-container").style.backgroundColor = "transparent";

    hamburgerClose();
}

function closeNav() {
    navIsOpen = false;

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

// When the nav drawer is open and the user clicks outside the drawer, the drawer will close
document.addEventListener('click', function (event) {
    var navDrawerContainer = document.getElementById("nav-drawer-container");
    var navMenuContainer = document.getElementById("nav-menu-container");
    var isClickInNavDrawerContainer = navDrawerContainer.contains(event.target);
    var isClickInNavMenuContainer = navMenuContainer.contains(event.target);

    if (navIsOpen && !isClickInNavDrawerContainer && !isClickInNavMenuContainer) {
        openCloseNav(navMenuContainer);
    }
});