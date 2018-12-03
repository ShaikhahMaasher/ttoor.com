
// Initialize WOW library
anime = new WOW (
    {
        boxClass:     'anime',     
        animateClass: 'animated', 
        offset:       10,          
        mobile:       true,       
        live:         true
    }
);
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
            console.log( work.getAttribute('data-color'));
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
    start: [5],
    connect: true,
    direction: 'rtl',
    range: {
        'min': [15],
        'max': [85]
    },
    step: 10
  });
// Set value of budget Input  
  budgetSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
    var secondValue = parseInt(unencoded) + parseInt(10);
    var firstValue=parseInt(unencoded);
    console.log(values);
    bugetInput.value = 'SR  '+ secondValue +' k'+ ' - ' + firstValue +' k' ;

  });
// =======Time Slider==========
// Initialize time slider
var timeSlider = document.querySelector('.time-slider');
var timeInput = document.querySelector('.time-input');
noUiSlider.create(timeSlider, {
    start: [4],
    connect: true,
    direction: 'rtl',
    range: {
        'min': 4,
        'max': 50
    },
    step: 1,
    format: wNumb({
    decimals: 0,
    suffix: ' weeks',
  })
  });
// Set value of time input
  timeSlider.noUiSlider.on('update', function( values, handle ) {
    var value = values[handle];

    if ( handle ) {
        timeInput.value = value;
    }else{
        timeInput.value = value;
    }
  });
  timeInput.addEventListener('change', function(){
    timeSlider.noUiSlider.set([null, this.value]);
  });
// ===== ADD SELECTED CLASS TO CONTACT'S OPTIONS=====
// project-opitions
var projectOptions= document.querySelectorAll('#project .option');
clickOnMultiple(projectOptions,'selected');
// form-opitions
var formOptions= document.querySelectorAll('#form-options .option');
clickOnMultiple(formOptions,'selected');
//===========ADD ACTIVE CLASS TO CONTACT STEPS NUMBER===========
var formSteps= document.querySelectorAll('.form-steps li a');
clickOnMultiple(formSteps,'active');


/**
 * This method to listent to click event 
 * @param {*} selectors list of selector
 * @param {*} className css class name
 */
function clickOnMultiple(selectors,className){
    selectors.forEach( selector => {
        selector.addEventListener("click", function(){ addClass(className, selectors ,selector); })
        });
}
/**
 * This method will remove the class from list of specfic type selector and 
 * add this class to the target selector
 * @param {*} className css class
 * @param {*} $selector list of selector
 * @param {*} $this target selector
 */
function addClass(className , $selectors , $this){
    $selectors.forEach(select=>{
        select.classList.remove(className);
    })
    $this.classList.add(className);
}

// onscroll active target form step 
window.addEventListener('scroll', function () {
    var $stepsNumber = document.querySelectorAll('.form-steps li a');
    var $steps = document.querySelectorAll('.step');
    //Back to defualt value
    $stepsNumber.forEach(stepNumber => {
        stepNumber.classList.remove('active');
    });
    var scroll = window.scrollY + (window.innerHeight / 3);
    $steps.forEach(step => {
        if (step.offsetTop <= scroll && step.offsetTop + step.clientHeight > scroll) {
            // Remove active class from all form steps
            $stepsNumber.forEach(stepNumber => {
                stepNumber.classList.remove('active');
            });
            var stepId = step.getAttribute('id');
            console.log(stepId);
            var targetStepNumber=document.querySelector(`[href='#${stepId}']`);
            // Add active class for target form
            console.log(`[href='#${stepId}']`);
            targetStepNumber.classList.add('active');
        }
    });
});