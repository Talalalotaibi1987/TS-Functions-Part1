/**
 * Task 1:
 * Create a function named `printName`
 * - Accepts a "name" parameter of type "string"
 * - that just prints (logs) that "name" on the screen
 */

function printName(name: string): void {
  console.log(name);
}
printName("string");

/**
 * Task 2:
 * Create a function named `printAge`
 * - Accepts a "birthYear" parameter of type "number"
 * - and prints (logs) the age on the screen
 * - Age = current year - birth
 */

// example:
// printAge(2000); // => 2025 (2025 - 2000)

function printAge(birthYear: number): void {
  let age = 2025 - birthYear;

  console.log(age);
}
printAge(2000);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters (name and language)
 * - Accepts a "name" parameter of type "string"
 * - Accepts a "language" parameter of type "LanguageType"
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

// example:
//printHello("Aziz", "es"); // => "Hola Aziz"
//printHello("Aziz", "fr"); // => "Bonjour Aziz"

type LanguageType = "fr" | "es" | "en" | "tr";

function printHello(name: string, language: LanguageType): void {
  if (language === "en") {
    console.log(`Hello ${name}`); // hello talal
  } else if (language === "es") {
    console.log(`Hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
}
printHello("Talal", "en");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters (x and y)
 * - Accepts a "x" parameter of type "number"
 * - Accepts a "y" parameter of type "number"
 * - should print out the bigger number
 */

// example:
// printMax(4, 7); // => 7

function printMax(x: number, y: number): void {
  if (x > y) {
    console.log(x);
  } else if (x < y) {
    console.log(y);
  }
}
printMax(4, 7);
