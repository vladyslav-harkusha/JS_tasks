// 1) #67kfznmiMl
//    Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arr1 = [34, 'rabbit', false, NaN, undefined, null, 88, true, '100500', 100500];
console.log(
	arr1[0], arr1[1], arr1[2], arr1[3], arr1[4], arr1[5], arr1[6], arr1[7], arr1[8], arr1[9]
);


// 2) #LARqoUj5I
//    Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = {
	title: 'The Picture of Dorian Gray',
	pageCount: 100500,
	genre: 'roman'
};
const book2 = {
	title: 'Dialogs',
	pageCount: 100600,
	genre: 'philosophy'
};
const book3 = {
	title: 'Robinson Crusoe',
	pageCount: 100700,
	genre: 'adventure'
};


// 3) #sA3Gg1sCp
//    Створити 3 об'єкти які описують книги.
//    Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const book4 = {
	title: 'The Picture of Dorian Gray',
	pageCount: 100500,
	genre: 'roman',
	authors: [
		{ name: 'Oscar', age: 50 },
		{ name: 'Wilde', age: 60 }
	]
};
const book5 = {
	title: 'Dialogs',
	pageCount: 100600,
	genre: 'philosophy',
	authors: [
		{ name: 'Platon', age: 85 }
	]
};
const book6 = {
	title: 'Robinson Crusoe',
	pageCount: 100700,
	genre: 'adventure',
	authors: [
		{ name: 'Daniel', age: 40 },
		{ name: 'Defoe', age: 45 }
	]
};


// 4) #jCHFnEbdmFd
//    Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username, password.
//    Вивести в консоль пароль кожного користувача
const users = [
	{ name: 'Ivan', username: 'crazy-boy92', password: 'qwerty' },
	{ name: 'Sergij', username: 'bigBoss777', password: 'qwerty123' },
	{ name: 'Vladyslav', username: 'someOneWithSomething', password: 'admin' },
	{ name: 'Petro', username: 'ArMoVir', password: 'admin123' },
	{ name: 'John', username: 'bear-lover55', password: 'password' },
	{ name: 'Monika', username: 'konfetka98', password: 'guest' },
	{ name: 'Julia', username: 'lady92', password: 'guest123' },
	{ name: 'Ann', username: 'fancyGirl', password: '12345' },
	{ name: 'Viktor', username: 'lord_of_the_pings', password: '111111' },
	{ name: 'Galya', username: 'Petrova', password: 'galyapetrova' }
];
console.log(
	users[0].password,
	users[1].password,
	users[2].password,
	users[3].password,
	users[4].password,
	users[5].password,
	users[6].password,
	users[7].password,
	users[8].password,
	users[9].password
);


// 5) #coYydZuaeEB
//    Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//    Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
//    Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
const dailyTemperature = [
	{ day: 'monday', temperature: [-2, 5, 3] },
	{ day: 'tuesday', temperature: [0, 6, 2] },
	{ day: 'wednesday', temperature: [10, 15, 9] },
	{ day: 'thursday', temperature: [15, 25, 3] },
	{ day: 'friday', temperature: [-5, -1, 5] },
	{ day: 'saturday', temperature: [7, 15, 12] },
	{ day: 'sunday', temperature: [11, 32, 27] }
];


// 6) #bAUsaq6LI
//    Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3
const x = +prompt('Введіть любе число, відмінне від нуля');

if (x) {
	console.log('Вірно')
} else {
	console.log('Невірно')
}


// 7) #3ckURgvs
//    Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//    (в першу, другу, третю или четверту частину години).
const time = +prompt('Введіть кількість хвилин на годиннику');

switch (true) {
	case (time > 0 && time <= 15):
		console.log('Перша чверть');
		break;
	case (time > 15 && time <= 30):
		console.log('Друга чверть');
		break;
	case (time > 30 && time <= 45):
		console.log('Третя чверть');
		break;
	case (time > 45 && time <= 60):
		console.log('Четверта чверть');
		break;
	default:
		console.log('Ви ввели некоректне число');
}


// 8) #UMoNq4biWGe
//    У змінній day дано якесь число від 1 до 31.
//    Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day = +prompt('Введіть число місяця');

if (day > 0 && day <= 10) {
	console.log('Перша декада');
} else if (day > 10 && day <= 20) {
	console.log('Друга декада');
} else if (day > 20 && day <= 31) {
	console.log('Третя декада');
} else {
	console.log('Ви ввели некоректне число');
}


// 9) #KzrtqyQ
//    Скласти розклад на тиждень за домопоги switch.
//    Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const dayNumber = +prompt('Введіть порядковий номер дня тижня');

switch (dayNumber) {
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log('Saturday');
		break;
	case 7:
		console.log('Sunday');
		break;
	default:
		console.log('Incorrect input');
}


// 10) #uwsz1RnTQJ1
//     Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох.
//     Також потрібно врахувати коли введені рівні числа.
const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');

if (firstNumber > secondNumber) {
	console.log(`Max number: ${firstNumber}`);
} else if (firstNumber < secondNumber) {
	console.log(`Max number: ${secondNumber}`);
} else if (firstNumber === secondNumber) {
	console.log('Numbers are equal')
} else {
	console.log('Incorrect input');
}


// 11) #iBvqtjEm
//     Є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, буде присвоювати змінній y значення "default" якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let y;

y = y ? y : 'default';


// 12) #awLXL6TBzg
//     З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
	{title: 'JavaScript Complex', monthDuration: 5},
	{title: 'Java Complex', monthDuration: 6},
	{title: 'Python Complex', monthDuration: 6},
	{title: 'QA Complex', monthDuration: 4},
	{title: 'FullStack', monthDuration: 7},
	{title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
	console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
	console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
	console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
	console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
	console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
	console.log('Супер');
}