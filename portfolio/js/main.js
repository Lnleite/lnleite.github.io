let jumboImg = document.querySelector(".jumboImg");

const fakeImage = new Image();
fakeImage.onload = function() {
  jumboImg.styles.backgroundImage = `url(${fakeImage.src})`;
};
fakeImage.src = "images/jumboImg.jpg";

fakeImage.addEventListener("load", function() {
  jumboImg.classList.remove("loading");
});
