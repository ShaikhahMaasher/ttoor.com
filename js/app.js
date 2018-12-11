// Initialize WOW library
anime = new WOW({
    boxClass: 'anime',
    animateClass: 'animated',
    offset: 10,
    mobile: true,
    live: true
});
anime.init();
// new WOW().init();

// // Calculate widow height
// function setHeroHeight() {
//     var hero = document.querySelector('#hero');
//     hero.style.height = getWindowHeight;
// }
// setHeroHeight();


// Change background color based on work section color
window.addEventListener('scroll', function () {
    var $body = document.querySelector('.page-wrapper');
    var $works = document.querySelectorAll('.work');

    //Back to defualt value
    $body.classList.forEach(className => {
        if (className.startsWith('color-')) {
            $body.classList.remove(className);
        }
    });
    var scroll = window.scrollY + (window.innerHeight / 3);
    $works.forEach(work => {
        if (work.offsetTop <= scroll && work.offsetTop + work.clientHeight > scroll) {

            // Remove all class in body with color
            $body.classList.forEach(className => {
                if (className.startsWith('color-')) {
                    $body.classList.remove(className);
                }
            });
            //Add color class to body
            $body.classList.add('color-' + work.getAttribute('data-color'));
        }
    });
});


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("nav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("nav").style.width = "0%";
}
// =======Budget Slider==========
// Initialize budget slider  
var budgetSlider = document.querySelector('.budget-slider');
var bugetInput = document.querySelector('.budget-input');
noUiSlider.create(budgetSlider, {
    start: [1000],
    connect: true,
    direction: 'rtl',
    range: {
        'min': [1000],
        'max': [40000]
    },
    step: 500
});

// Set value of budget Input  
budgetSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    var secondValue = parseInt(unencoded) + parseInt(500);
    var firstValue = parseInt(unencoded);
    bugetInput.value = 'SR  ' + secondValue + ' - ' + firstValue;

});

// =======Time Slider==========
// Initialize time slider
var timeSlider = document.querySelector('.time-slider');
var timeInput = document.querySelector('.time-input');
noUiSlider.create(timeSlider, {
    start: [2],
    connect: true,
    direction: 'rtl',
    range: {
        'min': 2,
        'max': 26
    },
    step: 1,
});
// Set value of time input
timeSlider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];
    value = parseInt(value);
    var suffix = "أسبوع";
    if (handle) {
        timeInput.value = suffix + " "+ "\u200E" + value;
    } else {
        timeInput.value = suffix + " "+ "\u200E" + value;
    }
});
timeInput.addEventListener('change', function () {
    timeSlider.noUiSlider.set([null, this.value]);
});
// ===== ADD SELECTED CLASS TO CONTACT'S OPTIONS=====
// project-opitions
var projectOptions = document.querySelectorAll('#project .option');
clickOnMultiple(projectOptions, 'selected');
// form-opitions
var formOptions = document.querySelectorAll('#form-options .option');
clickOnMultiple(formOptions, 'selected');
//===========ADD ACTIVE CLASS TO CONTACT STEPS NUMBER===========
var formSteps = document.querySelectorAll('.form-steps li a');
clickOnMultiple(formSteps, 'active');


/**
 * This method to listent to click event 
 * @param {*} selectors list of selector
 * @param {*} className css class name
 */
function clickOnMultiple(selectors, className) {
    selectors.forEach(selector => {
        selector.addEventListener("click", function () {
            addClass(className, selectors, selector);
        })
    });
}

/**
 * This method will remove the class from list of specfic type selector and 
 * add this class to the target selector
 * @param {*} className css class
 * @param {*} $selector list of selector
 * @param {*} $this target selector
 */
function addClass(className, $selectors, $this) {
    $selectors.forEach(select => {
        select.classList.remove(className);
    })
    $this.classList.add(className);
}

// onscroll active target form step 
window.addEventListener('scroll', function () {
    var $stepsNumber = document.querySelectorAll('.form-steps li a');
    var $steps = document.querySelectorAll('.step');
    var scroll = window.scrollY + (window.innerHeight / 3);
    $steps.forEach(step => {
        if (step.offsetTop <= scroll && step.offsetTop + step.clientHeight > scroll) {
            // Remove active class from all form steps
            $stepsNumber.forEach(stepNumber => {
                stepNumber.classList.remove('active');
            });
            var stepId = step.getAttribute('id');
            var targetStepNumber = document.querySelector(`[href='#${stepId}']`);
            // Add active class for target form
            targetStepNumber.classList.add('active');
        }
    });
});

//===========SCROLL TO===========
//Scroll to next step in project section
$("#project .option").on('click', function (event) {
    event.preventDefault();
    var nextStep = $(this).data("next-step");
    setTimeout(function(){
        $('html, body').animate({
          scrollTop: $('div#'+nextStep+'').offset().top
        }, 500);
        return false;
    }, 400);
});

//Scroll to target section 
$("#form-options .option").on('click', function (event) {
    event.preventDefault();
    $('#project, #chat').fadeOut();
    var sectionName = $(this).data("form");
    setTimeout(function(){
        $('section#'+sectionName+'').fadeIn(function(){
        $('html, body').animate({
          scrollTop: $('section#'+sectionName+'').offset().top
        }, 500);
        return false;
    });
},400);
});

// Set name of selected option to input's value 
$("#project .option").on('click', function (event) {
    event.preventDefault();
    var value = $(this).data("option");
    $(this).parents('.options').children('.input-form').val(value);
});


// Setup Form Validation
$.validate({
    modules: 'security, sweden',
    onError: function($form) {
        $('html, body').animate({
          scrollTop: $('.form-error').offset().top
        }, 500);
    },
});