const jsConfetti = new JSConfetti();
const confettiButton = document.getElementById("start-button");
const theImg = document.getElementById("the-img");
const stars = document.querySelectorAll("i");
const nextPage = document.getElementById("next-page")

function confettiThisBih() {
  jsConfetti.addConfetti();
  confettiButton.classList.add("start-button");
  confettiButton.innerHTML = "Click Me More! :)";
  theImg.classList.add("img-animation");
  nextPage.classList.remove("hide-button");
  nextPage.classList.add("show-button");
  let i = 0;
  function starLoop() {
    setTimeout(function () {
      stars[i].classList.add("star-animation");
      i++;
      if (i < stars.length) {
        starLoop();
      }
    }, 50);
  }
  starLoop();
}

confettiButton.addEventListener("click", confettiThisBih);
