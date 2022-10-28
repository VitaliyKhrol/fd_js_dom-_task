// Частина 1:
// Динамічно створити картки юзерів з даними, що містяться в масиві userData
// Приклад вигляду картки юзера:
// https://pbs.twimg.com/media/EIopEQ6XYAEqzUk.jpg
// (всі картки одночасно на екрані)
// В html тільки <div id="root"></div>
// Частина 2:
// За натиснення на картку юзера картка має підсвітитися червоним бордером - картка "обрана"
// Якщо обрати іншу картку, то з попередньої картки підсвітка знімається.
// Тобто одночасно може бути обрана тільки одна картка.

const root = document.querySelector("#root");
 const div = document.createElement("div");
 div.classList.add("container");

function printUser() {
    userData.forEach((user) => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const button =document.createElement("button");
    root.append(div);
    div.append(article);
    img.classList.add("imgUser");
    article.classList.add("card");
    h1.classList.add("name");
    img.setAttribute("src", user.profilePicture);
    h1.append(user.name);
    p.append(user.description);
    button.append('Connect')
    article.append(img, h1, p, button);
  });
}
printUser();

for (const btn of document.querySelectorAll(".card")) {
  btn.addEventListener("click", clickHandler);
  console.log(btn)
}

function clickHandler(){
    for (const i of document.querySelectorAll(".card")) {
        i.classList.remove("border-on");
    }
    this.classList.add("border-on");
}


