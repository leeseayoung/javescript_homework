// 이거 잘 모르겠다! 다시 복습
let container = document.getElementById("container");

container.addEventListener("click", function (event) {
  //박스가 target에 있으면
  if (event.target.classList.contains("box")) {
    //['box', 'clickd']
    //toggle 없으면 추가 있으면 뺌
    event.target.classList.toggle("clicked");
  }
});

function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result);
