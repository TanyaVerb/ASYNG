const userData = {
  name: "Vlad",
  age: 32,
};

class MyPromise {
  constructor(executor) {
    this.lineHandlers = [];
    this.errorHandler = () => {};
    this.finallyHandler = () => {};

    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.errorHandler(e);
    }
  }

  resolve(data) {
    this.lineHandlers.forEach((callBack) => {
      data = callBack(data);
    });
    this.finallyHandler();
  }
  reject(err) {
    this.errorHandler(err);
    this.finallyHandler();
  }
  then(fn) {
    //необходима для чейнинга then
    this.lineHandlers.push(fn);
    //возвращает объект который содержит все методы инстанса класса
    return this;
  }
  catch(fn) {
    this.errorHandler = fn;
    return this;
  }

  finally(fn) {
    this.finallyHandler = fn;
    return this;
  }
}

// const promise = new MyPromise((resolve, reject) => {
//   console.log("executor RUN");
//   setTimeout(() => {
//     resolve(userData);
//     console.log("setTimeout into executor");
//   }, 1500);
// });

// promise
//   .then((result) => {
//     console.log("then 1");
//     console.log(result);
//     result.done = true;
//     return result;
//   })
//   .then((result) => {
//     console.log("then 2");
//     console.log(result);
//     return result;
//   })
//   .catch((e) => {
//     console.log(e);
//     return "error";
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// /**
//  *
//  */

// const promise1 = new Promise(() => {});
// console.log(promise1);
// // promise1.then(r=>)

// const promise = fetch("https://jsonplaceholder.typicode.com/photos/1");

const img = document.querySelector(".img");
const title = document.querySelector(".title");

// promise
//   .then((data) => {
//     const result = data.json();
//     console.log(result);
//     return result;
//   })
//   .then((response) => {
//     console.log(response);
//     img.src = response.thumbnailUrl;
//     title.innerHTML = response.title;
//   });

console.log("start");

function foo() {
  setTimeout(() => {
    console.log("setTimeout 1");
  }, 0);
}

const promise = new Promise((resolve) => {
  console.log("executor start");
  setTimeout(() => {
    console.log("setTimeout into promise");
    resolve("resolve");
  });
  console.log("executor finish");
});

Promise.resolve("resolve2")
  .then(() => {
    console.log("promise2");
  })
  .then(() => {
    console.log("promise2");
  });
promise
  .then(() => {
    console.log("promise1");
  })
  .then(() => {
    console.log("promise1");
  });
setTimeout(() => {
  console.log("setTimeout 2");
}, 0);

foo();
console.log("end");

//синхронный код
//микротаски st1 pr2
//макротаски stInto resolve ST2
//result -> "start" exst exf end

console.log("");
//============================

/**
 * fetch("https://jsonplaceholder.typicode.com/users/1")
 * .then(result=>{
 * console.log(result)
 * if(!result.ok)throw new Error('Запрос не успешен!')
 *  const body =result.json()
 * console.log(body)
 * return body
 * })
 * .then(body =>{
 * * console.log(body)
 * })
 * .catch((e)=>{
 *  console.log(e)
 *
 * })
 * .finally(()=>{
 * console.log('Запрос завершен')
 * })
 *
 *
 */

/** */

// const baseUrl = "";

// async function getUser(userId) {
//   try {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     if (!response.ok) {
//       throw new Error("Запрос не успешен!");
//     }
//     const user = await response.json();
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("Запрос завершен");
//   }
// }

// const result = getUser(10);

// console.log(result);

const baseUrl2 = "https://jsonplaceholder.typicode.com/todos";

//список дел с отображением заголовка (title), только в состоянии completed
//обработать ошибку Try catch

const btnEl = document.querySelector(".btn");
console.log(btnEl);

async function getTodos() {
  try {
    const response = await fetch(`${baseUrl2}`);
    if (!response.ok) {
      throw new Error("Запрос не успешен!");
    }
    const data = await response.json();

    console.log(data);

    const todoList = data.filter((todo) => todo.completed);
    const html = renderTodo();

    console.log(todoList);

    return todoList;
  } catch (error) {}
}

// const result2 = getTodos();

// console.log(result2);

btnEl.addEventListener("click", getTodos);

function renderTodo(todos) {
  const items = todos
    .map((item) => {
      return ` <li>${item.title}</li>`;
    })
    .json("");
  return `<ul>
      <li>${item}</li>
    </ul>`;
}

getTodos();

// const observer = new IntersectionObserver();

async function getImg() {
  let response = await fetch("./images.jpg");
  // console.log(response);
  const img = response.blob();
  console.log(img);
  const url = URL.createObjectURL(img);
  console.log(url);

  const picture = document.createElement("img");
  picture.style = "width: 150px; height:150px";
  picture.src = url;

  document.body.append(picture);
}

getImg();
