// console.log("start");

// function foo() {
//   setTimeout(() => {
//     console.log("setTimeout 1");
//   }, 0);
// }
// const promise = new Promise((resolve) => {
//   console.log("executor start");
//   setTimeout(() => {
//     console.log("setTimeout into promise");
//     resolve("resolve");
//   });
//   console.log("executor finish");
// });

// Promise.resolve("resolve2")
//   .then(() => {
//     console.log("promise2");
//   })
//   .then(() => {
//     console.log("promise2");
//   });
// promise
//   .then(() => {
//     console.log("promise1");
//   })
//   .then(() => {
//     console.log("promise1");
//   });
// setTimeout(() => {
//   console.log("setTimeout 2");
// }, 0);

// foo();
// console.log("end");

//синхронный код
//микротаски st1 pr2
//макротаски stInto resolve ST2
//result -> "start" exst exf end

//==========================================

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    setTimeout(() => {
      console.log("Timeout in Promise 1");
    }, 0);
  })
  .then(() => {
    console.log("Promise 2");
  });

(async () => {
  console.log("Async 1");
  await new Promise((resolve) => {
    console.log("Async Promise 1");
    resolve();
  });
  console.log("Async 2");
})();

Promise.resolve()
  .then(() => {
    console.log("Promise 3");
  })
  .then(() => {
    console.log("Promise 4");
  });

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

//=====================================
function sleep(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      //   reject("Слишком мало сна");
      reject(new Error("Слишком мало сна"));
    }

    setTimeout(() => {
      return resolve(`Поспал ${time}`);
    }, time);
  });
}

// sleep(1500)
//   .then((res) => {
//     console.log(res);
//     return sleep(1000);
//   })
//   .then((res) => {
//     console.log(res);
//     return sleep(500);
//   })
//   .then((res) => {
//     console.log(res);
//     return sleep(200);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Ошибка!!!", err);
//     console.log(err.name);
//     console.log(err.message);
//   });

const sleepSession = async () => {
  try {
    const sleep1 = await sleep(1500);
    console.log(sleep1);
    const sleep2 = await sleep(1000);
    console.log(sleep2);
    const sleep3 = await sleep(500);
    console.log(sleep3);
    const sleep4 = await sleep(200);
    console.log(sleep4);
  } catch (error) {
    console.log("Ошибка!!!", error);
  }
};

sleepSession();
