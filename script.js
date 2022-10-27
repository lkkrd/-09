const btns = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
  btns.forEach((btn) => {
    btn.style.backgroundColor = "white";
  });
});

/*btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("green")) {
      console.log("green");
    }
    if (btn.classList.contains("yellow")) {
      console.log("yellow");
    }
    if (btn.classList.contains("red")) {
      console.log("red");
    }
    if (btn.classList.contains("blue")) {
      console.log("blue");
    }
    if (btn.classList.contains("purple")) {
      console.log("purple");
    }
  });
}); */

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains(btn.classList[1])) {
      btn.style.backgroundColor = btn.classList[1];
    }
  });
});
