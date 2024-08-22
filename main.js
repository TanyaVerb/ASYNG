//классы

//typeError
//возникает попытке выполнить операцию на назначении неправильного типа
// let str = "str";
// str();//неправильный тип
// let obj = {};

// obj.map()

// let num = 24;
// num.toUpperCase()

//ReferenceError
// Возникает когда код ссылается на несуществующую или необъявленную переменную

// console.log(age);

//SyntaxError
//Возникает при синтаксической ошибке в коде

//const car
//{}}

//RangeError
//Ошибка возникает когда значение передается за пределы допустимого диапазона

// let arr = new Array(-1); //массив не может иметь отрицательную длину
// console.log(arr);

//EvalError
//Возникает в функциях eval

//Error

// let er = new Error("CUSTOM ERROR");
// console.log(er);

//*********************************************************************/

//Синтаксис
try {
  //наш код
} catch (error) {
  //обработка ошибки
}

//Пример 1
// try {
//   console.log("TRY");
// } catch (error) {
//   console.log("catch");
// }

//Пример 2
// try {
//   console.log("try Пример2");
//   console.log(notvariable);
//   console.log("try Пример 2 этот код не выполнится!");
// } catch (error) {
//   console.log(error);
//   console.log("catch Пример 2");
// }

//Пример 3
// try {
//   console.log("TRY Пример 3");
//   let str = "str";
//   str();
// } catch (error) {
//   console.log(error);
//   console.log("catch Пример3");
// }

//Пример4
// try {
//   console.log("TRY Пример 4");

//   const arr = [1, 2, 3, 4, 5];
//   const result = arr.map((i) => {
//     console.log(i);
//     return i();
//   });
//   console.log(result);
// } catch (error) {
//   console.log("catch Пример4");
// }

//Пример4.1
// try {
//   console.log("TRY Пример 4.1");

//   const arr = [1, 2, 3, 4, 5];
//   const result = arr.map((i) => {
//     try {
//       console.log(i);
//       return i();
//     } catch (error) {
//       console.log("Возникла ошибка в map");
//     }
//   });
//   console.log(result);
// } catch (error) {
//   console.log("catch Пример4.1");
// }

//Пример 5 //синтаксическая ошибка не обрабатывается
// try {
//     let var@1_123=123
//     console.log("TRY Пример 5");
// } catch (error) {
//     console.log("catch Пример 5");
// }

// console.log("Скрипт дошел до конца");

//Пример 6
//try cath - работает синхронно

// try {
//   console.log("TRY Пример 6");
//   setTimeout(() => {
//     let str = "str";
//     str();
//   }, 1000);
// } catch (error) {
//   console.log("catch Пример 6");
// }

////Пример 6

// try {
//   console.log("TRY Пример 6");
//   setTimeout(() => {
//     try {
//       let str = "str";
//       str();
//     } catch (error) {
//       console.log("catch Пример6");
//     }
//   }, 1000);
// } catch (error) {
//   console.log("catch Пример6");
// }

////Пример 8
// try {
//   atttty;
// } catch (error) {
//   console.log(error);
//   console.log("error.name", error.name);
//   console.log("error.message", error.message);
//   console.log("error.stack", error.stack);
// }
////Пример 9
// try {
//   atttty;
// } catch {
//   console.log("cathc Пример 9");
// }

////Пример 10
// try {
//   const json = '{"age":32}';
//   //   const json2 = "{'age':32}";

//   const parseJson = JSON.parse(json);

//   if (parseJson.name) {
//     //выполни код
//   } else {
//     //дай пользователю понять, что  что-то пошло не так
//     throw new Error("Наше собственное сообщение об ошибке");
//   }

//   //   const parseJson2 = JSON.parse(json2);
//   console.log(parseJson);
// } catch (e) {
//   console.log(e.name);
//   console.log(e.message);
//   console.log("catch Пример 10");
// } finally {
//   console.log("выполнение кода в любом случае");
// }

//Пример 11
// function foo() {
//   try {
//     if (confirm("Выбросить ошибку?")) {
//       noFoo();
//     } else {
//       console.log("try code");
//       return "TRY-second";
//     }
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("finaly with return- first"); // выводятся до return
//   }
// }

// console.log(foo());

//Пример 12

// function funcWithOutCatch() {
//   try {
//     // some code
//   } finally {
//     throw new Error("TEXT FOR ERROR");
//   }
// }

// window.onerror = function (message, url, line, col, error) {
//   console.log("Ошибочка");
//   console.log(message);
//   console.log(url);
//   console.log(line);
//   console.log(col);
//   console.log(error);
// };
// funcWithOutCatch();

//Пример

class CustomError extends Error {
  constructor(mes) {
    super(mes);
    // this.name = "CustomError";
    this.name = this.constructor.name;
    this.stack = new Error().stack;
    this.somethingDo();
  }

  somethingDo() {
    console.log(1);
  }
}

try {
  throw new CustomError("Привет, как дела? Исправь ошибку");
} catch (e) {
  console.log(e);
  console.log(e.name);
  console.log(e.message);
  console.log(e.stack);
}

console.log("Скрипт дошел до конца");
