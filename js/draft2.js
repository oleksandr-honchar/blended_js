const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;

console.log(biggerNumber); // 10

function getBiggerNumber(a, b) {
  return a > b ? a : b;
}

console.log(getBiggerNumber(5, 10)); // 10
console.log(getBiggerNumber(20, 15)); // 20
console.log(getBiggerNumber(7, 7)); // 7

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return password == correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}
console.log(checkPassword("jqueryismyjam"));

function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return 0;
      break;
    case "organization":
      return 50;
      break;
    case "professional":
      return 20;
      break;
    default:
      return "Invalid subscription type!";
  }
}

console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("starter"));
console.log(getSubscriptionPrice("random"));
console.log(getSubscriptionPrice("premium"));

function isNumberInRange(start, end, number) {
  if (number <= end && number >= start) {
    return "true";
  } else {
    return "false";
  }
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));

function checkAccess(subType) {
  if (subType == "pro" || subType == "vip") {
    return "true";
  } else {
    return "false";
  }
}

console.log(checkAccess("pro"));
console.log(checkAccess("starter"));
console.log(checkAccess("vip"));
console.log(checkAccess("free"));
console.log(checkAccess("professional"));

function toggleModalVisibility(isVisible) {
  if (isVisible == !true) {
    return "true";
  } else {
    return "false";
  }
}

console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false));

function getSubstring(string, length) {
  return (string = string.slice(0, length));
}
console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 6));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));

function normalizeInput(input, to) {
  if (to == "upper") return (normalizeInput = input.toUpperCase());
  else if (to == "lower") return (normalizeInput = input.toLowerCase());
  else return "upper or lower only";
}

console.log(normalizeInput("Hello world", "bad"));

function checkForName(fullName, firstName) {
  const lowerCaseFullName = fullName.toLowerCase();
  const lowerCaseFirstName = firstName.toLowerCase();
  if (lowerCaseFullName.includes(lowerCaseFirstName)) return "true";
  else return "false";
}

console.log(checkForName("Egor Kolbasov", "Egir"));

function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) return "true";
  else return "false";
}

console.log(checkFileExtension("index.html", "html"));
console.log(checkFileExtension("index.html", "css"));
console.log(checkFileExtension("index.css", "css"));
console.log(checkFileExtension("index.js", "js"));

function getFileName(file) {
  if (file.includes(".")) return file.slice(0, file.lastIndexOf("."));
  else return file;
}

console.log(getFileName("styles.css"));
console.log(getFileName("app.js"));
console.log(getFileName("index.html"));
console.log(getFileName("index"));

function createFileName(name, ext) {
  return `${name.trim()}.${ext.trim()}`;
}

console.log(createFileName("index", "html"));
console.log(createFileName("style", "css"));
console.log(createFileName(" app ", " js "));

function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i = i + 1) {
    sum += i;
  }
  return sum;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(0));
console.log(calculateTotal(18));
console.log(calculateTotal(24));

function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(0));

function calculateEvenTotal(number) {
  let sum = 0;
  for (let i = 0; i <= number; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(calculateEvenTotal(1));
console.log(calculateEvenTotal(3));
console.log(calculateEvenTotal(7));
console.log(calculateEvenTotal(18));
console.log(calculateEvenTotal(27));

const start = 6;
const end = 17;
let number;
for (number = start; number <= end; number += 1) {
  if (number % 5 === 0) {
    console.log(number);
    break;
  }
}

function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
  return i;
}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(10, 50, 4));
console.log(findNumber(43, 100, 7));

function calcBmi(weight, height) {
  let numWeight = weight.replace(",", ".");
  numWeight = Number.parseFloat(numWeight);
  const numHeight = Number.parseFloat(height);

  const bmi = numWeight / numHeight ** 2;
  return bmi.toFixed(1);
}

const bmi = calcBmi("82,3", "1.75");
console.log(bmi);
