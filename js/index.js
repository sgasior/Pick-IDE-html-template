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


// -- - ANIMATION START-- -


$(document).ready(function () {



    $(".feature-box:nth-child(1)").css("opacity", 0);

    $(".feature-box:nth-child(1)").waypoint(function () {
        $(".feature-box:nth-child(1)").addClass("animated bounceInDown");
        $(".feature-box:nth-child(1)").css("opacity", 1);
    }, {
        offset: '80%'
    });



    $(".feature-box:nth-child(2)").css("opacity", 0);
    $(".feature-box:nth-child(2)").waypoint(function () {
        $(".feature-box:nth-child(2)").addClass("animated bounceInDown");
        $(".feature-box:nth-child(2)").css("opacity", 1);
    }, {
        offset: '80%'
    });



    $(".feature-box:nth-child(3)").css("opacity", 0);
    $(".feature-box:nth-child(3)").waypoint(function () {
        $(".feature-box:nth-child(3)").addClass("animated bounceInDown");
        $(".feature-box:nth-child(3)").css("opacity", 1);
    }, {
        offset: '80%'
    });



    $("#about-app h2").css("opacity", 0);
    $("#about-app h2").waypoint(function () {
        $("#about-app h2").addClass("animated bounceIn");
    }, {
        offset: '80%'
    });


    $(".step:nth-child(1)").css("opacity", 0);
    $(".step:nth-child(1)").waypoint(function () {
        $(".step:nth-child(1)").addClass("animated bounceIn");
    }, {
        offset: '80%'
    });


    $(".step:nth-child(2)").css("opacity", 0);
    $(".step:nth-child(2)").waypoint(function () {
        $(".step:nth-child(2)").addClass("animated bounceIn");
    }, {
        offset: '80%'
    });


    $(".step:nth-child(3)").css("opacity", 0);
    $(".step:nth-child(3)").waypoint(function () {
        $(".step:nth-child(3)").addClass("animated bounceIn");
    }, {
        offset: '80%'
    });

});
