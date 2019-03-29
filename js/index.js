// --- HAMBURGER START---
$(".hamburger").click(function () {
    $(this).toggleClass("is-active");

    $("#navbar-small-screen-links").slideToggle("slow");
});

// --- HAMBURGER END---

// --- STICKY NAV START---

var stickyNav = document.getElementById("sticky-nav");

var navbarBigScreen = document.getElementById("navbar-big-screen-links");

var brand = document.getElementById("brand");

var hamburger = $(".hamburger");

// offset position of the navbar
var stickyOffsetPosstion = stickyNav.offsetTop;

window.onscroll = function () {
    stickNav()
};


function stickNav() {

    if (window.pageYOffset >= stickyOffsetPosstion) {

        stickyNav.classList.add("sticky");
        brand.classList.add("brand-fixed");
        navbarBigScreen.classList.add("navbar-big-screen-links-fixed");

        hamburger.css("display", "none");

    } else {
        stickyNav.classList.remove("sticky");
        navbarBigScreen.classList.remove("navbar-big-screen-links-fixed");
        brand.classList.remove("brand-fixed");

        hamburger.css("display", "inline-block");
    }
}


// --- STICKY NAV END---
