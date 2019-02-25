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

let zoomIn = {
  scale: 0,
  opacity: 0,
  duration: "800",
  delay: "400",
};

ScrollReveal().reveal("#about", zoomIn);
ScrollReveal().reveal("#projects", zoomIn);
ScrollReveal().reveal("#experience", zoomIn);
ScrollReveal().reveal("#tech", zoomIn);

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
