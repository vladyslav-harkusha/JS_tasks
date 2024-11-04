// 1) #dYQNrBV
//    Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log
const var1 = 'hello';
const var2 = 'owu';
const var3 = 'com';
const var4 = 'ua';
const var5 = 1;
const var6 = 10;
const var7 = -999;
const var8 = 123;
const var9 = 3.14;
const var10 = 2.7;
const var11 = 16;
const var12 = true;
const var13 = false;
console.log(
	var1, var2,	var3, var4,	var5, var6, var7, var8, var9, var10, var11, var12, var13
);


// 2) #6Qb97gsv
//    Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
const firstName = 'Vladyslav';
const middleName = 'Viktorovych';
const lastName = 'Harkusha';
const person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);


// 3) #4N0y5tufA
//    За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);


// 4) #ruUtWDUI
//    Додаткове для тих хто цікавився prompt`oм
//    За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
const personFirstName = prompt("Введіть ваше ім'я");
const personMiddleName = prompt("Введіть ваше по-батькові");
const personAge = prompt("Введіть ваш вік");
console.log(`Ім'я: ${personFirstName}`);
console.log(`По-батькові: ${personMiddleName}`);
console.log(`Вік: ${personAge} років`);
