// Loading
let tl = new TimelineMax();
tl.to('.loading .l', 1, { y: -100 })
    .to('.l', 1, { y: 0 })
    .to('.n', 1, { y: -100 })
    .to('.n', 1, { y: 0 })
    .to('.d', 1, { y: -100 })
    .to('.d', 1, { y: 0 });

window.addEventListener('load', function() {
    let loadScreen = document.getElementById('load-screen');
    document.body.removeChild(loadScreen);
});

let jumboImg = document.querySelector('.jumboImg');

const fakeImage = new Image();
fakeImage.src = 'images/jumboImg.jpg';

fakeImage.addEventListener('load', function() {
    jumboImg.classList.remove('loading');
});

// Scroll Reveal
let slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    delay: '400',
};
let slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: 0,
    delay: '400',
};

ScrollReveal().reveal('#about .container', slideLeft);
ScrollReveal().reveal('#projects .container', slideRight);
ScrollReveal().reveal('#experience .container', slideLeft);
ScrollReveal().reveal('#tech .container', slideRight);
