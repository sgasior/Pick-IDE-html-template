// -- - TOGGLE CHECKBOX START-- -

$("label[for='toggle-checkbox']").before().click(function () {
    $(this).toggleClass("active-toggle");
});


if ($("#toggle-checkbox").attr("checked")) {
    $("label[for='toggle-checkbox']").addClass("active-toggle");

}

// -- - TOGGLE CHECKBOX END-- -



// -- - MULTIPLE STEP FORM START-- -
var currentTab = 0;
displayTab(currentTab);


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
        $(".stepsButtons #addCriteria").css("display", "none");
    } else {
        $("#prevBtn").css("display", "inline-block");
    }

    if (currentTab == 1) {
        $(".stepsButtons #addCriteria").css("display", "inline-block");
        $("#nextBtn").css("margin-left", "0");
    } else {
        $("#nextBtn").css("margin-left", "auto");
    }

    if (currentTab == 2) {
        $(".stepsButtons #addCriteria").css("display", "none");
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
// -- - MULTIPLE STEP FORM END-- -



// -- - DYNAMICALLY ADDING FORMS START-- -


var criteriaCounter = 1;
var alternativeCounter = 1;
var max = 5;

function addCriterias() {
    if (criteriaCounter == max) {
        alert("Sorry but you have reached the limit of adding criterias");
        return;
    }
    $("#tab2").css("display", "none");
    $(".stepsButtons").css("display", "none");
    $("#tab-add-criteria").css("display", "block");
}



function acceptCriterias(divName, criteriaName) {
    if (criteriaName.length === 0) {
        alert("Criteria name cannot be empty");
        return;
    }

    $(".new-inputs-msg").css("display", "block");
    var newdiv = document.createElement("div");
    newdiv.innerHTML = "<div class='checkbox'><input type='checkbox' id='newCriteria_" + criteriaCounter + "'> <label for = 'newCriteria_" + criteriaCounter + "'>" + criteriaName + "</label> </div>";
    criteriaCounter++;
    document.getElementById(divName).appendChild(newdiv);

    $("#tab2").css("display", "block");
    $(".stepsButtons").css("display", "flex");
    $("#tab-add-criteria").css("display", "none");

}


function cancelAddingCriteria() {
    $("#tab2").css("display", "block");
    $(".stepsButtons").css("display", "flex");
    $("#tab-add-criteria").css("display", "none");
}

function addAlternatives() {
    if (alternativeCounter == max) {
        alert("Sorry but you have reached the limit of adding alternatives");
        return;
    }
    $("#tab3").css("display", "none");
    $(".stepsButtons").css("display", "none");
    $("#tab-add-alternatives").css("display", "block");
}

function acceptAlternatives(divName, alternativeName) {

    if (alternativeName.length === 0) {
        alert("Alternative name cannot be empty");
        return;
    }

    $(".new-inputs-msg").css("display", "block");
    var newdiv = document.createElement("div");
    newdiv.innerHTML = "<div class='checkbox'><input type='checkbox' id='newAlternative_" + alternativeCounter + "'> <label for = 'newAlternative_" + alternativeCounter + "'>" + alternativeName + "</label> </div>";
    alternativeCounter++;
    document.getElementById(divName).appendChild(newdiv);

    $("#tab3").css("display", "block");
    $(".stepsButtons").css("display", "flex");
    $("#tab-add-alternatives").css("display", "none");

}


function cancelAddingAlternatives() {
    $("#tab3").css("display", "block");
    $(".stepsButtons").css("display", "flex");
    $("#tab-add-alternatives").css("display", "none");
}
