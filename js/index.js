// --- HAMBURGER START---
$(".hamburger").click(function () {
    $(this).toggleClass("is-active");

    $("#navbar-small-screen-links").slideToggle("slow");
});

// --- HAMBURGER END---
