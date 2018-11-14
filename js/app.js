
function getWindowHeight() {
    return screen.height;
}

function setHeroHeight() {
    var hero = document.querySelector('#hero');
    hero.style.height = getWindowHeight;
}

setHeroHeight();