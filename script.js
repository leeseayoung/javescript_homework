const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

//1번
localStorage.setItem(
  "user",
  JSON.stringify({ 이름: "병수", 나이: 20, 주소: "시골" })
);

//4번 문제는 내일!
