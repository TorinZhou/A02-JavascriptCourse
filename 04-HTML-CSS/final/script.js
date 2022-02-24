const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const item1 = document.querySelector(".item--1");
const randomInt = function (int) {
  return Math.floor(Math.random() * int) + 1;
};
toggle.addEventListener("mouseenter", () => {
  const column = randomInt(4);
  item1.style.setProperty("--end", `${column + 1}`);
  item1.style.setProperty("--start", `${column}`);
});

toggle.addEventListener("mouseleave", () => {
  const column = randomInt(4);
  item1.style.setProperty("--end", `${column + 1}`);
  item1.style.setProperty("--start", `${column}`);
});

const setColumn = function () {
  const column = randomInt(3);
  item1.style.setProperty("--end", `${column + 1}`);
  item1.style.setProperty("--start", `${column}`);
};

setInterval(setColumn, 1000);
