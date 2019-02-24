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
};
let slideRight = {
  distance: "150%",
  origin: "right",
  opacity: 0,
  delay: "400",
};

ScrollReveal().reveal("#about .container", slideLeft);
ScrollReveal().reveal("#projects .container", slideRight);
ScrollReveal().reveal("#experience .container", slideLeft);
ScrollReveal().reveal("#tech .container", slideRight);

// Fish
let fish = document.querySelector(".fish");
let eye = document.querySelector(".eye");

function swim() {
  fish.classList.add("swim");
}

fish.addEventListener("mouseover", function(event) {
  eye.classList.add("openeye");
  TweenLite.to(fish, 20, {
    onStart: swim,
    ease: Circ.ease,
    x: 5000,
    delay: 1,
  });
});
