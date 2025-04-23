// function extractAfterSubstring(str, substr) {
//   if (str.includes(substr)) {
//     return str.slice(str.indexOf(substr) + substr.length);
//   } else {
//     return "";
//   }
// }

// console.log(extractAfterSubstring("Hello, world!", "world"));
// console.log(extractAfterSubstring("JavaScript is fun", "is"));
// console.log(extractAfterSubstring("This is a test", "not"));

// const vowels = "aeiouAEIOU";

// function removeVowelsFromWords(str) {
//   let newStr = " ";
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(removeVowelsFromWords("Hello, world!"));
// console.log(removeVowelsFromWords("JavaScript is fun"));
// console.log(removeVowelsFromWords("This is a test"));

// const message = prompt("Введіть число");
// console.log(message);

// const message = alert("Введіть число");
// console.log(message);

// const message = confirm("Введіть число");
// console.log(message);

// let message = prompt("Введіть число");

// while (message < 100 && message !== null) {
//   message = prompt("Введіть число");
// }

// console.log(message);

// function countOccurrences(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countOccurrences("Hello, world!", "l"));
// console.log(countOccurrences("JavaScript is fun", "a"));
// console.log(countOccurrences("This is a test", "t"));

//Дано рядок, який складається із символів.Напишіть функію
// яка перевіряє, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

// Task 9

// const string = "abcde"; // тестовий рядок 1
// const stringSecond = "bcde"; // тестовий рядок 2

// function checkFirstLetter(str) {
//   if (str[0] === "a") {
//     return "так";
//   } else {
//     return "ні";
//   }
// }

// console.log(checkFirstLetter(string));
// console.log(checkFirstLetter(stringSecond));

// Task 8

// Написати функцію removeCharacter, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати новий рядок,
//   у якому всі входження символу char видалені. Використовуйте цикл while

// function removeCharacter(str, char) {
//   let newStr = "";
//   let i = 0;
//   while (i < str.length) {
//     if (str[i] !== char) {
//       newStr += str[i];
//     }
//     i++;
//   }
//   return newStr;
// }

// // Приклади використання:
// console.log(removeCharacter("Hello, world!", "o")); // "Hell, wrld!"
// console.log(removeCharacter("JavaScript", "a")); // "JvScript"
// console.log(removeCharacter("12345", "3")); // "1245"

// Task 5

// Написати функцію extractBetween, яка приймає три аргументи:
// рядок str, підрядок start і підрядок end.Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end.Якщо один з підрядків не знайдено,
//   функція повинна повертати порожній рядок.

// function extractBetween(str, start, end) {
//   let startIndex = str.indexOf(start);
//   let endIndex = str.indexOf(end);

//   if (startIndex !== -1 && endIndex !== -1) {
//     return str.slice(startIndex + start.length, endIndex);
//   } else {
//     return "";
//   }
// }

// // Приклади використання:
// console.log(extractBetween("Hello, [world]!", "[", "]")); // "world"
// console.log(extractBetween("Hello, [world]!", "{", "}")); // ""
// console.log(extractBetween("Hello, {world}!", "{", "}")); // "world"

// Task 11

// Написати функцію extractNumber,
// яка приймає рядок str і повертає перше число,
// знайдене в рядку.Якщо число не знайдено,
// функція повинна повертати null.

// function extractNumber(str) {
//   let number = str.match(/\d+/);
//   if (number) {
//     return number[0];
//   } else {
//     return null;
//   }
// }

// // Приклади використання:
// console.log(extractNumber("abc123def")); // 123
// console.log(extractNumber("no numbers here")); // null
// console.log(extractNumber("42 is the answer")); // 42

// Task 12

// Написати функцію findLongestWord,
//     яка приймає рядок str і повертає найдовше слово в цьому рядку.
// Якщо таких слів кілька, повернути перше знайдене.

// function findLongestWord(str) {
//   let words = str.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// // Приклади використання:
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"
// console.log(findLongestWord("JavaScript is awesome")); // "JavaScript"
// console.log(findLongestWord("I love coding")); // "coding"

// Task 13
// Написати функцію capitalizeEverySecondChar,
// яка приймає рядок str і повертає новий рядок,
// у якому кожен другий символ є великим.

// function capitalizeEverySecondChar(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 1) {
//       newStr += str[i].toUpperCase();
//     } else {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// // Приклади використання:
// console.log(capitalizeEverySecondChar("hello world")); // "hElLo wOrLd"
// console.log(capitalizeEverySecondChar("javascript")); // "jAvAsCrIpT"
// console.log(capitalizeEverySecondChar("1234567890")); // "1234567890"

// Task 14

// Написати функцію hasUniqueChars,
//     яка приймає рядок str і повертає true,
//     якщо всі символи в рядку унікальні, і false в іншому випадку.

function hasUniqueChars(str) {
  let chars = {};
  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      return false;
    }
    chars[str[i]] = true;
  }
  return true;
}

// Приклади використання:
console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("hello")); // false
console.log(hasUniqueChars("1234567890")); // true
