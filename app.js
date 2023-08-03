let btn = document.querySelector("button");
let div1 = document.querySelector(".colorbox");
let counter = document.querySelector(".counterbox");
let ct = 0;

btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  div1.innerHTML = `<strong>${randomColor}</strong>`;
  div1.style.backgroundColor = randomColor;
  ct++;
  counter.innerHTML = `<p>You generated a random color ${ct} times`;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
