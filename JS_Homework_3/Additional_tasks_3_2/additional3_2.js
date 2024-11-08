// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
const arr1A = [];
for (let i = 2; i <= 100; i += 2) {
	arr1A[arr1A.length] = i;
}
console.log(arr1A);

//      b. заповнити його 50 непарними числами за допомоги циклу.
const arr1B = [];
for (let i = 1; i < 100; i += 2) {
	arr1B[arr1B.length] = i;
}
console.log(arr1B);

//      c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
const arr1C = [];
for (let i = 0; i < 20; i++) {
	arr1C[arr1C.length] = Math.floor(Math.random() * 10);
}
console.log(arr1C);

//      d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
const arr1D = [];
const minNumber = 8;
const maxNumber = 732;
for (let i = 0; i < 20; i++) {
	arr1D[arr1D.length] = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}
console.log(arr1D);


// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr1D.length; i++) {
	if ((i + 1) % 3 === 0) {
		console.log(arr1D[i]);
	}
}


//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arr1D.length; i++) {
	if ((i + 1) % 3 === 0 && arr1D[i] % 2 === 0) {
		console.log(arr1D[i]);
	}
}


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
const newArr1 = [];

for (let i = 0; i < arr1D.length; i++) {
	if ((i + 1) % 3 === 0 && arr1D[i] % 2 === 0) {
		console.log(arr1D[i]);
		newArr1[newArr1.length] = arr1D[i];
	}
}
console.log(newArr1);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
console.log(arr1D);

for (let i = 0; i < arr1D.length; i++) {
	if (arr1D[i + 1] % 2 === 0) {
		console.log(arr1D[i]);
	}
}


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const arr6 = [100,250,50,168,120,345,188];
let sum = 0;

for (const elem of arr6) {
	sum += elem;
}

const averagePrice = sum / arr6.length;
console.log(averagePrice);


//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
const arr7 = [];
for (let i = 0; i < 20; i++) {
	arr7[arr7.length] = Math.floor(Math.random() * 10);
}

const newArr7 = []
for (let i = 0; i < arr7.length; i++) {
	newArr7[newArr7.length] = arr7[i] * 5;
}
console.log(arr7);
console.log(newArr7);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
const arr8 = [true, 'sadsfasf', undefined, 27, null, 'dfs', false, -45, 0];
const newArr8 = [];

for (const elem of arr8) {
	if (typeof elem === 'number') {
		newArr8[newArr8.length] = elem;
	}
}
console.log(newArr8);


// 9. - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
// Масиви:
let usersWithId = [
	{id: 1, name: 'vasya', age: 31, status: false},
	{id: 2, name: 'petya', age: 30, status: true},
	{id: 3, name: 'kolya', age: 29, status: true},
	{id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
	{user_id: 3, country: 'USA', city: 'Portland'},
	{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
	{user_id: 2, country: 'Poland', city: 'Krakow'},
	{user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (const user of usersWithId) {
	for (const city of citiesWithId) {
		if (user.id === city.user_id) {
			usersWithCities[usersWithCities.length] = {
				id: user.id,
				name: user.name,
				age: user.age,
				status: user.status,
				address: {
					id: city.user_id,
					country: city.country,
					city: city.city
				}
			}

		}
	}
}
console.log(usersWithCities);

// for (const user of usersWithCities) {
// 	if (user.id === citiesWithId.user_id) {
//
// 	}
// }



// 10. Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
const arr10 = [45, 66, 5, -99, 8, 0, -11, 88, 27, 4];
for (const number of arr10) {
	if (number % 2 === 0 && number !== 0) {
		console.log(number);
	}
}


// 11. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
const arr11 = [true, 'sadsfasf', undefined, 27, null, 'dfs', false, -45, 0];
const newArr11 = [];
for (const elem of arr11) {
	newArr11[newArr11.length] = elem;
}
console.log(newArr11);


// 12. Дано масив: [ 'a', 'b', 'c'].
const arr12 = ['a', 'b', 'c'];

//     - За допомогою циклу for зібрати всі букви в слово.
let word1 = '';
for (let i = 0; i < arr12.length; i++) {
	word1 += arr12[i];
}
console.log(word1);

//     - За допомогою циклу while зібрати всі букви в слово.
let word2 = '';
let j = 0;
while (j < arr12.length)  {
	word2 += arr12[j];
	j++;
}
console.log(word2);

//     - За допомогою циклу for of зібрати всі букви в слово.
let word3 = '';
for (const elem of arr12) {
	word3 += elem;
}
console.log(word3);
