// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
const array1 = ['hello world', 'lorem ipsum', 'javascript is cool']

array1.forEach(elem => console.log(elem.length));


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
const array2 = ['hello world', 'lorem ipsum', 'javascript is cool'];

array2.forEach(elem => console.log(elem.toUpperCase()));


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const array3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

array3.forEach(elem => console.log(elem.toLowerCase()));


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
const dirtyString = ' dirty string   ';
const cleanString = dirtyString.trim();

console.log(cleanString);


// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray1 = str => str.split(' ');   // variant 1

const stringToArray2 = (str) => {    // variant 2
	if (typeof str !== 'string') {
		return 'incorrect input';
	}

	return str.split(' ');
};

console.log(stringToArray2('Ревуть воли як ясла повні'));


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arrOfNumbers = [10,8,-7,55,987,-1011,0,1050,0];
const arrOfStrings = arrOfNumbers.map(elem => `${elem}`);

console.log(arrOfStrings);


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const sortNums = (nums, direction) => {
	if (direction === 'ascending') {
		return nums.sort((num1, num2) => num1 - num2);
	}
	if (direction === 'descending') {
		return nums.sort((num1, num2) => num2 - num1);
	}

	return 'incorrect input';
};

const nums = [11,21,3];
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]


// #yo06d74c1C
// - є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const resultArray = coursesAndDurationArray
	.sort((course1, course2) => course2.monthDuration - course1.monthDuration )
	.filter(course => course.monthDuration > 5)
	.map((course, index) => ({ id: index + 1, ...course }));

console.log(resultArray);


//  #bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const suits = ['spade', 'diamond','heart', 'clubs'];
const colors = ['red', 'black'];

const cards = [];
for (const suit of suits) {
	for (const value of values) {
		cards.push({
			suit,
			value,
			color: (suit === 'heart' || suit === 'diamond') ? colors[0] : colors[1]
		});
	}
}
console.log(cards);

//  - знайти піковий туз
console.log(
	cards.find(card => card.suit === 'spade' && card.value === 'ace')
);

// - всі шістки
console.log(
	cards.filter(card => card.value === '6')
);

//  - всі червоні карти
console.log(
	cards.filter(card => card.color === 'red')
);

//  - всі буби
console.log(
	cards.filter(card => card.suit === 'diamond')
);

//  - всі трефи від 9 та більше
console.log(
	cards.filter(card => card.suit === 'clubs' && !(+card.value < 9))
);


// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const cardsObject = cards.reduce((acc, card) => {
	switch (card.suit) {
		case 'spade':
			acc.spades.push(card);
			break;
		case 'diamond':
			acc.diamonds.push(card);
			break;
		case 'heart':
			acc.hearts.push(card);
			break;
		case 'clubs':
			acc.clubs.push(card);
			break;
		default:
			console.log('incorrect data');
	}
	return acc;
}, { spades:[], diamonds:[], hearts:[], clubs:[] });

console.log(cardsObject);


// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
const coursesArray = [
	{
		title: 'JavaScript Complex',
		monthDuration: 5,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
	},
	{
		title: 'Java Complex',
		monthDuration: 6,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
	},
	{
		title: 'Python Complex',
		monthDuration: 6,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
	},
	{
		title: 'QA Complex',
		monthDuration: 4,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
	},
	{
		title: 'FullStack',
		monthDuration: 7,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
	},
	{
		title: 'Frontend',
		monthDuration: 4,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
	}
];
// --написати пошук всіх об'єктів, в яких в modules є sass
const coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesWithSass);

// --написати пошук всіх об'єктів, в яких в modules є docker
const coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesWithDocker);
