// #4aDbSgh
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const arr1 = [];
for (let i = 0; i < 10; i++) {
	arr1[i] = `item ${i + 1}`;
}
console.log(arr1);


// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
const arr2 = [2,17,13,6,22,31,45,66,100,-18];

console.log('1. перебрати його циклом while');
let i = 0;
while (i < arr2.length) {
	console.log(arr2[i]);
	i++;
}

console.log('2. перебрати його циклом for');
for (let j = 0; j < arr2.length; j++) {
	console.log(arr2[j]);
}

console.log('3. перебрати циклом while та вивести  числа тільки з непарним індексом');
let k = 0;
while (k < arr2.length) {
	if (k % 2 !== 0) {
		console.log(arr2[k]);
	}
	k++;
}

console.log('4. перебрати циклом for та вивести числа тільки з непарним індексом');
for (let j = 0; j < arr2.length; j++) {
	if (j % 2 !== 0) {
		console.log(arr2[j]);
	}
}

console.log('5. перебрати циклом while та вивести  числа тільки парні значення');
let m = 0;
while (m < arr2.length) {
	if (arr2[m] % 2 === 0) {
		console.log(arr2[m]);
	}
	m++;
}

console.log('6. перебрати циклом for та вивести  числа тільки парні  значення');
for (let j = 0; j < arr2.length; j++) {
	if (arr2[j] % 2 === 0) {
		console.log(arr2[j]);
	}
}

console.log('7. замінити кожне число кратне 3 на слово "okten"');
for (let j = 0; j < arr2.length; j++) {
	if (arr2[j] % 3 === 0) {
		arr2[j] = 'okten';
	}
}
console.log(arr2);

console.log('8. вивести масив в зворотньому порядку.');
for (let j = arr2.length - 1; j >= 0; j--) {
	console.log(arr2[j]);
}


//#yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numbers = [545, 56, 5, -2, 0, 589, 88, 4, 22, 27];
for (const number of numbers) {
	console.log(number);
}

// #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const words = ['545', '56', '5', '-2', '0', '589', '88', '4', '22', '27'];
for (const word of words) {
	console.log(word);
}

// #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const arr44 = ['545', true, -98, 'adfdf', null, undefined, 'dfas', 5, 'dfd', '27'];
for (const elem of arr44) {
	console.log(elem);
}

// #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const arr55 = ['545', true, false, 'adfdf', 'null', false, 'dfas', true, 'dfd', '27'];
for (const elem of arr55) {
	if (typeof elem === 'boolean') {
		console.log(elem);
	}
}

// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
const arr66 = [545, true, false, 'adfdf', 'null', false, 'dfas', true, 'dfd', 27];
for (const elem of arr66) {
	if (typeof elem === 'number') {
		console.log(elem);
	}
}

// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
const arr77 = [545, true, false, 'adfdf', 'null', false, 'dfas', true, 'dfd', 27];
for (const elem of arr77) {
	if (typeof elem === 'string') {
		console.log(elem);
	}
}


// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const arr22 = [];
arr22[0] = false;
arr22[1] = 77;
arr22[2] = true;
arr22[3] = { name: 'Stefan' };
arr22[4] = null;
arr22[5] = undefined;
arr22[6] = NaN;
arr22[7] = [1, 2, 3];
arr22[8] = 'lorem';
arr22[9] = 'ipsum';
for (const arr22Element of arr22) {
	console.log(arr22Element);
}

// #mDMWMW5a
// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 10; j++) {
	console.log(j);
	document.write(`<p>${j}</p>`);
}

// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 100; j++) {
	console.log(j);
	document.write(`<p>${j}</p>`);
}

// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 2; j <= 200; j += 2) {
	console.log(j);
	document.write(`<p>${j}</p>`);
}

// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 1; j <= 100; j++) {
	if (j % 2 === 0) {
		console.log(j);
		document.write(`<p>${j}</p>`);
	}
}

// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 1; j <= 100; j++) {
	if (j % 2 !== 0) {
		console.log(j);
		document.write(`<p>${j}</p>`);
	}
}


// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори, жанри).
const books = [
	{
		title: 'The Picture of Dorian Gray',
		pageCount: 100500,
		genres: ['roman'],
		authors: [
			{ name: 'Oscar', age: 50 },
			{ name: 'Wilde', age: 60 },
			{ name: 'Bob', age: 12 }
		]
	},
	{
		title: 'Dialogs',
		pageCount: 100600,
		genres: ['philosophy'],
		authors: [
			{ name: 'Platon', age: 85 }
		]
	},
	{
		title: 'Robinson Crusoe',
		pageCount: 100700,
		genres: ['adventure', 'roman'],
		authors: [
			{ name: 'Daniel', age: 40 },
			{ name: 'Defoe', age: 45 }
		]
	}
];

// - знайти наібльшу книжку.
let biggestBook = books[0];
for (const book of books) {
	if (book.pageCount > biggestBook.pageCount) {
		biggestBook = book;
	}
}
console.log(biggestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenresBook = books[0];
for (const book of books) {
	if (book.genres.length > maxGenresBook.genres.length) {
		maxGenresBook = book;
	}
}
console.log(maxGenresBook);

// - знайти книжку/ки з найдовшою назвою
let longestTitleBook = books[0];
for (const book of books) {
	if (book.title.length > longestTitleBook.title.length) {
		longestTitleBook = book;
	}
}
console.log(longestTitleBook);

// - знайти книжку/ки які писали 2 автори
for (const book of books) {
	if (book.authors.length === 2) {
		console.log(book);
	}
}

// - знайти книжку/ки які писав 1 автор
for (const book of books) {
	if (book.authors.length === 1) {
		console.log(book);
	}
}
