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

ScrollReveal().reveal('.left', slideLeft);
ScrollReveal().reveal('.right', slideRight);

// Fish
let fish = document.querySelector('.singleFish');
let eye = document.querySelector('.eye');

function swim() {
    let main = document.querySelector('#contact .main');
    fish.classList.add('swimAngler');
    if (!main.style.opacity) {
        main.style.opacity = 1;
    }
}

window.onscroll = function() {
    let d = document.documentElement;
    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight;

    if (offset === height) {
        if (offset === height) {
            eye.classList.add('openeye');
            TweenLite.to(fish, 8, {
                onStart: swim,
                ease: Circ.ease,
                x: '100%',
                delay: 1,
                onComplete: function() {
                    fish.classList.remove('swimAngler');
                    fish.style.opacity = 0;
                },
            });
        }
    }
};

fish.addEventListener('mouseover', function(event) {
    eye.classList.add('openeye');
    TweenLite.to(fish, 8, {
        onStart: swim,
        ease: Circ.ease,
        x: '100%',
        delay: 1,
        onComplete: function() {
            fish.classList.remove('swimAngler');
            fish.style.opacity = 0;
        },
    });
});

// Navigation
const hamburger = document.querySelector('.hamburger');
const fishNav = document.querySelector('.navFish');
const sideNav = document.querySelector('.sideNav');
const sections = document.querySelectorAll('nav a');
const home = document.querySelector('.home');
const header = document.querySelector('header');

hamburger.addEventListener('click', function() {
    let tl = new TimelineLite();
    sideNav.style.display = 'block';
    open = true;
    tl.to(hamburger, 0.1, {
        scale: 0.7,
    })
        .fromTo(
            sideNav,
            0.75,
            {
                x: '100%',
            },
            {
                x: '0%',
                onStart: function() {
                    fishNav.style.animation = 'eat 2s';
                },
                onComplete: function() {
                    fishNav.style.animation = 'none';
                },
            }
        )
        .to(hamburger, 0.5, { display: 'none' }, '-=1');
});

home.addEventListener('click', function() {
    if (open) {
        closeNav();
    }
});

header.addEventListener('click', function() {
    if (open) {
        closeNav();
    }
});

fishNav.addEventListener('click', closeNav);
// sections.addEventListener("click", closeNav);
sections.forEach(el => {
    el.addEventListener('click', closeNav);
});

function closeNav() {
    let tl = new TimelineLite();
    tl.to(hamburger, 0.01, { scale: 1 })
        .to(fishNav, 0.5, { x: -30, rotationY: 180 })
        .to(sideNav, 0.75, { x: '120%' })
        .to(hamburger, 0.5, { display: 'flex' }, '-=1')
        .to(fishNav, 0.01, { rotationY: 0, x: 0 });
}
