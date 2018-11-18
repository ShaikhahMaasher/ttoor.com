
function getWindowHeight() {
    return screen.height;
}

function setHeroHeight() {
    var hero = document.querySelector('#hero');
    hero.style.height = getWindowHeight;
}
setHeroHeight();


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


