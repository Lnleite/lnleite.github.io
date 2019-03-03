let jumboImg = document.querySelector(".jumboImg");

const fakeImage = new Image();
fakeImage.src = "images/jumboImg.jpg";

fakeImage.addEventListener("load", function() {
  jumboImg.classList.remove("loading");
});

// Scroll Reveal
let slideLeft = {
  distance: "150%",
  origin: "left",
  opacity: 0,
  delay: "400",
  duration: "1500",
};
let slideRight = {
  distance: "150%",
  origin: "right",
  opacity: 0,
  delay: "400",
  duration: "1500",
};

ScrollReveal().reveal(".left", slideLeft);
ScrollReveal().reveal(".right", slideRight);

// Fish
let fish = document.querySelector(".singleFish");
let eye = document.querySelector(".eye");

function swim() {
  let main = document.querySelector("#contact .main");
  fish.classList.add("swimAngler");
  if (!main.style.opacity) {
    main.style.opacity = 1;
  }
}

fish.addEventListener("mouseover", function(event) {
  eye.classList.add("openeye");
  TweenLite.to(fish, 8, {
    onStart: swim,
    ease: Circ.ease,
    x: "100%",
    delay: 1,
    onComplete: function() {
      fish.classList.remove("swimAngler");
      fish.style.opacity = 0;
    },
  });
});

// Navigation
const hamburger = document.querySelector(".hamburger");
const fishNav = document.querySelector(".navFish");
const sideNav = document.querySelector(".sideNav");
const sections = document.querySelectorAll("nav a");
console.log(sections);

hamburger.addEventListener("click", function() {
  let tl = new TimelineLite();
  sideNav.style.display = "block";
  tl.to(hamburger, 0.2, {
    scale: 0.7,
  }).fromTo(
    sideNav,
    1.5,
    {
      x: "100%",
    },
    {
      x: "0%",
      onStart: function() {
        fishNav.style.animation = "eat 2s";
      },
      onComplete: function() {
        fishNav.style.animation = "none";
      },
    },
    "-=0.3"
  );
});

fishNav.addEventListener("click", closeNav);
// sections.addEventListener("click", closeNav);
sections.forEach(el => {
  el.addEventListener("click", closeNav);
});

function closeNav() {
  let tl = new TimelineLite();
  tl.to(hamburger, 0.01, { scale: 1 })
    .to(fishNav, 1, { x: -30, rotationY: 180 })
    .to(sideNav, 1.5, { x: "120%" })
    .to(fishNav, 0.01, { rotationY: 0, x: 0 });
}
