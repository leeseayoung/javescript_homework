const users = [
  { name: "철수", age: 19, gender: "남" },
  { name: "짱구", age: 20, gender: "남" },
  { name: "유리", age: 21, gender: "여" },
];
// 1번 문제
// console.log(users);

//2번 문제
const htmlContainer = document.querySelector(".html");

users.forEach(function (user) {
  let html_content = `<h1 class="name">이름: ${user.name}</h1>
      <p class="age">나이: ${user.age}</p>
      <p class="gender">성별: ${user.gender}</p>`;
  htmlContainer.insertAdjacentHTML("beforeend", html_content);
});

// 3번 문제
const findGender = users.find(function (user) {
  return user.gender === "여";
});
console.log(findGender);

//4번 문제
// const filterGender = users.filter(fucntion(user) {
//   return user.gender === "남"
// });
//   console.log(filterGender);
//위 코드에 user.gender 오류 떠서 밑에 다시 코드 만듬 질문 해야됨

// const filterGender = users.filter(function (user) {
//   return user.gender === "남";
// });
// console.log(filterGender);

//5번 문제
// const ages = users.age.map(function (user) {
//   return user + 10;
// });
// 위 코드에서 age 뽑는다고 users.age 이렇게 해서 오류 발생 user + 10; 에서 age 안뽑혔는데 더해서 망함!

const ages = users.map(function (user) {
  return {
    이름: user.name,
    나이: user.age + 10,
    성별: user.gender,
  };
});
console.log(ages);

//6번 문제

const ages1 = users.sort(function (user) {
  return user.age;
});
console.log(ages1);

//7번 문제
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const { 이름, 나이, 주소 } = user;

console.log(`이름: ${이름}
나이: ${나이}
주소: ${주소}`);
