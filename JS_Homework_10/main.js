// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const text1 = document.getElementById('text');
const button1 = document.getElementById('button-clear');

button1.addEventListener('click',  () => {
	if (text1.style.display === 'block' || !text1.style.display) {
		 text1.style.display = 'none';
		button1.innerText = 'SHOW text'
	} else {
		text1.style.display = 'block';
		button1.innerText = 'CLEAR text';
	}
});



// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const inputAge = document.getElementById('age-input');
const buttonAge = document.getElementById('age-button');
const message = document.getElementById('message');

buttonAge.addEventListener('click', () =>
	+inputAge.value < 18
		? message.innerText = 'sorry, you cannot enter this site'
		: message.innerText = 'you can enter this site'
);



// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form1 = document.forms.form1;
const userInfo = document.getElementById('user-info');

form1.addEventListener('submit', (event) => {
	event.preventDefault();

	const userObj = {
		name: form1.userName.value,
		surname: form1.userSurname.value,
		age: form1.userAge.value
	}

	userInfo.innerText = `name - ${userObj.name}, surname - ${userObj.surname}, age - ${userObj.age}`;
});



// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const loadsQuantityElement = document.getElementById('loads-quantity');
let loadsQuantity = +localStorage.getItem('loadsQuantity') || 1;
loadsQuantity++;
localStorage.setItem('loadsQuantity', loadsQuantity);

loadsQuantityElement.innerText = loadsQuantity;



// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const kilosInput = document.getElementById('kilosInput');
const poundsInput = document.getElementById('poundsInput');

kilosInput.addEventListener('input', (event) => poundsInput.value = event.target.value * 2.2);
poundsInput.addEventListener('input', (event) => kilosInput.value = event.target.value / 2.2);



// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
const addToLocalStorage = (arrayName, objToAdd) => {
	const foundArray = JSON.parse(localStorage.getItem(arrayName));

	if (Array.isArray(foundArray)) {
		foundArray.push(objToAdd);
		localStorage.setItem(arrayName, JSON.stringify(foundArray));
	}
};

const arrJSON = JSON.stringify(['elem1'])
localStorage.setItem('someArray', arrJSON);
addToLocalStorage('someArray', { name: 'Tolik' });



// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const tableCreator = document.forms.tableCreator;
const table = document.getElementById('my-table');

tableCreator.addEventListener('submit', (event) => {
	event.preventDefault();
	table.innerText = '';

	for (let i = 0; i < +tableCreator.rows.value; i++) {
		const tr = document.createElement('tr');

		for (let j = 0; j < +tableCreator.columns.value; j++) {
			const td = document.createElement('td');
			td.innerText = tableCreator.content.value;
			tr.appendChild(td);
		}

		table.appendChild(tr);
	}
});



// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const arr100 = [];
for (let i = 0; i < 100; i++) {
	const obj = {
		id: i + 1,
		name: `name ${i + 1}`,
		surname: `surname ${i + 1}`
	}
	arr100.push(obj);
}
console.log(arr100);


const list = document.getElementById('list');
const prevButton = document.getElementById('button-prev');
const nextButton = document.getElementById('button-next');

let minIndex = 0;
let maxIndex = 9;

const createListItems = (arr, minI, maxI) => {
	for (let i = minI; i <= maxI; i++) {
		const item = document.createElement('li');
		item.innerText = `${arr[i].id} - ${arr[i].name} - ${arr[i].surname}`;

		list.appendChild(item);
	}
}
createListItems(arr100, minIndex, maxIndex);

nextButton.addEventListener('click', () => {
	if (maxIndex < 90) {
		list.innerText = '';
		maxIndex += 10;
		minIndex += 10;
		createListItems(arr100, minIndex, maxIndex);
	}
});

prevButton.addEventListener('click', () => {
	if (minIndex > 9) {
		list.innerText = '';
		maxIndex -= 10;
		minIndex -= 10;
		createListItems(arr100, minIndex, maxIndex);
	}
});
