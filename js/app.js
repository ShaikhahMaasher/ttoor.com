
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