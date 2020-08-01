const container = document.getElementById("container");
const text = document.getElementById("text");

const loopTime = 7500;

const breatheTime = (loopTime / 5) * 2;

const holdTime = 7500 / 5;

breatheAnimation = () => {
  text.innerText = "Breathe In..";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "Hold breathe..";

    setTimeout(() => {
      text.innerText = "Breathe Out..";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
};

breatheAnimation();

setInterval(breatheAnimation, loopTime);
