// 이거 잘 모르겠다! 다시 복습
let container = document.getElementById("container");

container.addEventListener("click", function (event) {
  if (event.target.classList.contains("box")) {
    event.target.classList.toggle("clicked");
  }
});

function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result);
