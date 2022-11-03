const btns = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
  btns.forEach((btn) => {
    btn.style.backgroundColor = "var(--main-color)";
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.style.backgroundColor = btn.id;
  });
});
