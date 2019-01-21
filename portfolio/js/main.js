let jumboImg = document.querySelector(".jumboImg");

const fakeImage = new Image();
fakeImage.onload = function() {
  jumboImg.styles.backgroundImage = `url(${fakeImage.src})`;
};
fakeImage.src = "images/jumboImg.jpg";

fakeImage.addEventListener("load", function() {
  jumboImg.classList.remove("loading");
});

// Scroll Reveal
let slideLeft = {
  distance: "150%",
  origin: "left",
  opacity: 0,
  delay: "500",
  reset: true,
};
let slideRight = {
  distance: "150%",
  origin: "right",
  opacity: 0,
  delay: "500",
  reset: true,
};

ScrollReveal().reveal("#about .container", slideLeft);
ScrollReveal().reveal("#projects .container", slideRight);
ScrollReveal().reveal("#experience .container", slideLeft);
ScrollReveal().reveal("#tech .container", slideRight);
