// console.log(filterValues(["a", "b", "c", 1, 2, 3, "a", "b", "c"]));

// function filterValues(arr) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === i) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

// console.log(filterValues(["a", "b", "c", 1, 2, 3, "a", "b", "c"]));

// function filterValues(arr) {
//   const newArray = [];
//   for (const elem of arr) {
//     if (!newArray.includes(elem)) {
//       newArray.push(elem);
//     }
//   }
//   return newArray;
// }

// function updateObject(obj, ...rest) {
//   const newObj = {};
//   const keys = Object.keys(obj);

//   for (const key of keys) {
//     if (!rest.includes(key)) {
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "c"));

// function updateObject(obj, ...rest) {
//   const newObj = { ...obj };
//   for (const key of rest) {
//     delete newObj[key];
//   }
//   return newObj;
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "c"));

// const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function updateArray(arr) {
//   const newArray = []; // Use array!

//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]); // Now push will work
//   }
//   return newArray;
// }

// console.log(updateArray(arrNumbers));

// function checkArrays(firstArr, secondArr) {
//   for (let i = 0; i < firstArr.length; i++) {
//     if (firstArr[i] !== secondArr[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkArrays([1, 2, 3], [1, 2, 3]));
// console.log(checkArrays([1, 2, 3], [1, 2, 4]));
// console.log(checkArrays([1, 2, 3], [1, 2]));

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");
// styles[index] = "classic";

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const name = prompt("Enter login");

//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert("User not found");
//   }
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...arguments) {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     if (isNaN(arguments[i])) {
//       return "One of elements is not a number!";
//     } else {
//       sum += arguments[i];
//     }
//   }

//   return sum / arguments.length;
// }

// console.log(calculateAverage(1, 2, "text"));
// console.log(calculateAverage(1, 2, 3, 4, 5, NaN));
// console.log(calculateAverage(10, 20, 30));
// console.log(calculateAverage());

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNeighbors(arr) {
//   const newArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     newArr.push(arr[i] + arr[i + 1]);
//   }

//   return newArr;
// }

// console.log(sumNeighbors(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "Sorry, it is not an array!";
//   }
//   return Math.min(...numbers);
// }

// console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
//

// function findLongestWord(string) {
//   const wordsArray = string.split(" ");
//   let longestWord = "";

//   for (let i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i].length > longestWord.length) {
//       longestWord = wordsArray[i];
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуючи Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// if (Object.keys(salaries).length === 0) {
//   console.log(sum);
// } else {
//   for (const salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   console.log(sum);
// }

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'


const calculator = {

    read(a, b) {
        this.a = a;
        this.b = b;
    }

    sum() {
        if (this.exist()) {
        return this.a + this.b;
      } else {
        return 'Немає таких властивостей';
      }
    }

    mult() {
      if (this.exist()) {
        return this.a * this.b;
      } else {
        return 'Немає таких властивостей';
      }
    }

    exist() {
      if (this.a && this.b) {
        return true;
      } else {
        return false;
      }
       }
}