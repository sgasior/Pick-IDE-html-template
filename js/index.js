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


// -- - ANIMATION START---


$(document).ready(function () {



    $(".feature-box:nth-child(1)").css("opacity", 0);

    $(".feature-box:nth-child(1)").waypoint(function () {
        $(".feature-box:nth-child(1)").addClass("animated bounceIn");
        $(".feature-box:nth-child(1)").css("opacity", 1);
    }, {
        offset: '80%'
    });



    $(".feature-box:nth-child(2)").css("opacity", 0);
    $(".feature-box:nth-child(2)").waypoint(function () {
        $(".feature-box:nth-child(2)").addClass("animated bounceIn");
        $(".feature-box:nth-child(2)").css("opacity", 1);
    }, {
        offset: '80%'
    });



    $(".feature-box:nth-child(3)").css("opacity", 0);
    $(".feature-box:nth-child(3)").waypoint(function () {
        $(".feature-box:nth-child(3)").addClass("animated bounceIn");
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




    $(".slider").css("opacity", 0);
    $(".slider").waypoint(function () {
        $(".slider").addClass("animated fadeIn");
    }, {
        offset: '80%'
    });

});



// -- - SLIDER START-- -

var imageNumber = 1;
var actualImage;
var nextImage;
var numberOfAllImages = 3;
var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";


var sliderInterval = setInterval(function () {
    slide("slide-right");
}, 6000);


function slide(userChosenButton) {
    if (userChosenButton === "slide-right") {
        if (imageNumber < numberOfAllImages) {
            actualImage = $("#image-" + imageNumber);
            nextImage = $("#image-" + (imageNumber + 1));
        } else {
            imageNumber = 0;
            actualImage = $("#image-" + numberOfAllImages);
            nextImage = $("#image-" + 1);
        }

        animateImages(actualImage, nextImage);
        imageNumber = imageNumber + 1;

    } else {
        if (imageNumber > 1) {
            actualImage = $("#image-" + imageNumber);
            nextImage = $("#image-" + (imageNumber + -1));
            imageNumber = imageNumber - 1;
        } else {
            actualImage = $("#image-" + imageNumber);
            imageNumber = 3;
            nextImage = $("#image-" + imageNumber);

        }
        animateImages(actualImage, nextImage);
    }
}


function animateImages(actucalImage, nextImage) {
    actualImage.addClass("animated fadeOutLeft").one(animationEnd, function () {

        actualImage.removeClass("animated fadeOutLeft");

        actualImage.addClass("hidden");
        nextImage.removeClass("hidden");

        nextImage.addClass("animated fadeInRight").one(animationEnd, function () {
            nextImage.removeClass("animated bounceInRight")
        });
    });
}


// -- - SLIDER END-- -


// -- - TOGGLE CHECKBOX START-- -



$("label[for='toggle-checkbox']").before().click(function () {
    $(this).toggleClass("active-toggle");
});


if ($("#toggle-checkbox").attr("checked")) {
    $("label[for='toggle-checkbox']").addClass("active-toggle");

}




// -- - MULTIPLE STEP FORM START-- -


var currentTab = 0; // Current tab is set to be the
displayTab(currentTab); // Display the current tab


function updateStepActive(n) {

    step = $(".step-circle");
    for (var i = 0; i < step.length; i++) {
        step[i].className = step[i].className.replace(" active-step", "");
    }

    step[n].className += " active-step";
}



function displayTab(tabNumber) {
    var tab = $(".tab");
    tab[tabNumber].style.display = "block";

    if (currentTab == 0) {
        $("#prevBtn").css("display", "none");
    } else {
        $("#prevBtn").css("display", "inline-block");
    }

    if (currentTab == 1) {
        $("#addCriteria").css("display", "inline-block");
        $("#nextBtn").css("margin-left", "0");
    } else {
        $("#nextBtn").css("margin-left", "auto");
        $("#addCriteria").css("display", "none");
    }

    if (currentTab == 2) {
        $("#addAlternative").css("display", "inline-block");
        $("#nextBtn").css("margin-left", "0");
    } else {
        $("#addAlternative").css("display", "none");
    }


    if (currentTab == (tab.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    updateStepActive(tabNumber);
}


function nextView(n) {
    var tab = $(".tab");
    console.log(currentTab);
    tab[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= tab.length) {
        document.getElementById("surveyForm").submit();
        return false;
    }
    displayTab(currentTab);
}
