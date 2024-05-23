
//데이터를 활용하기 위해서 {}
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((post) => {
      console.log(`게시글 id: ${post.id} userID: ${post.userId} 게시글 제목: ${post.title}  게시글내용: ${post.body}`)
    })
  }); 

  //데이터를 받아서 뭘 할지 고민?
  //손으로 쓰는걸로
  //밑에 코드 망한거!
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((Response) => Response.json())
  .then((data) => console.log((data.forEach((data) => {console.log(`게시물 ID: ${data.id}`)}))



  
// 1. user 데이터를 로컬스토리지에 저장하세요. 이때 로컬 스토리지의 `key`는 `user`로 저장합니다. 단, `value`에 `[object Object]` 처럼 저장되면 안됩니다.
localStorage.setItem(
  "user",
  JSON.stringify({ 이름: "병수", 나이: 20, 주소: "시골" })
);

// 2. 로컬 스토리지에 저장된 데이터(`user`)를 조회한 후 콘솔에 출력해보세요. 단, 문자열이 아니라 객체로 출력되어야 합니다.
JSON.parse(localStorage.getItem("user"))

// 3. 조회한 로컬 스토리지 데이터의 나이를 30으로 변경 후 다시 로컬 스토리지에 저장해보세요.
const newAge = JSON.parse(localStorage.getItem("user"))
newAge.나이 = 30

// 4. 조회한 로컬 스토리지의 데이터(`user`)를 삭제하는 코드를 작성하는 코드를 작성해보세요. 그리고 다시 `user` 데이터 조회 후 `null`이 출력되는지 확인하세요.
localStorage.removeItem("user")

JSON.parse(localStorage.getItem("user"))