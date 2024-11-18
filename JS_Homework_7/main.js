// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.phone = phone;
}

const users = [];
for (let i = 10; i >= 1; i--) {
	const user = new User(i, `name-${i}`, `surname-${i}`, `${i}@gmail.com`, `+38095-777-77-7${i}` );
	users.push(user);
}
console.log(users);



// #2ikXsE2WiKZ
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);



// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortedUsers = [...filteredUsers].sort((user1, user2) => user1.id - user2.id);
console.log(sortedUsers);



// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
	constructor(id, name, surname , email, phone, order) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phone = phone;
		this.order = order;
	}
}
const clients = [
	new Client(1, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', ['laptop', 'toy', 'cucumber', 'pants']),
	new Client(2, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', ['toy', 'cucumber', 'pants']),
	new Client(3, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', ['laptop', 'pants']),
	new Client(4, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', ['laptop', 'toy', 'cucumber', 'pants']),
	new Client(5, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', ['laptop', 'toy']),
	new Client(6, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', ['laptop', 'toy', 'pants']),
	new Client(7, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', ['cucumber']),
	new Client(8, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', ['laptop', 'toy', 'cucumber', 'pants']),
	new Client(9, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', []),
	new Client(10, 'asdf', 'llfkr', 'gieeie@gmail.com', '+38-099-777-77-77', ['cucumber', 'pants'])
];
console.log(clients);



// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortedClients = [...clients].sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortedClients);



// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car1(model, company, year, maxSpeed, engineVol) {
	this.model = model;
	this.company = company;
	this.year = year;
	this.maxSpeed = maxSpeed;
	this.engineVol = engineVol;

	this.drive = function () {
		console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
	}
	this.info = function () {
		for (const carChar in this) {
			console.log(`${carChar} - ${this[carChar]}`)
		}
	}
	this.increaseMaxSpeed = function (newSpeed) {
		this.maxSpeed += newSpeed;
	}
	this.changeYear = function (newValue) {
		this.year = newValue;
	}
	this.addDriver = function (driverObj) {
		this.driver = driverObj;
	}
}
const car1 = new Car1('R8', 'Audi', 2020, 320, 2.5);
car1.drive();
car1.info();



// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
	constructor(model, company, year, maxSpeed, engineVol) {
		this.model = model;
		this.company = company;
		this.year = year;
		this.maxSpeed = maxSpeed;
		this.engineVol = engineVol;
	}

	drive() {
		console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
	}
	info() {
		for (const carChar in this) {
			console.log(`${carChar} - ${this[carChar]}`)
		}
	}
	increaseMaxSpeed(newSpeed) {
		this.maxSpeed += newSpeed;
	}
	changeYear(newValue) {
		this.year = newValue;
	}
	addDriver(driverObj) {
		this.driver = driverObj;
	}
}
const car2 = new Car2('Lanos', 'Daewoo', 2001, 160, 1.6);
car2.drive();
car2.info();



// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
	constructor(name, age, footSize) {
		this.name = name;
		this.age = age;
		this.footSize = footSize;
	}
}
const cinderellas = [
	new Cinderella('Tonya', 66, 36),
	new Cinderella('Manya', 12, 22),
	new Cinderella('Sonya', 18, 40),
	new Cinderella('Anya', 77, 42),
	new Cinderella('Sveta', 5, 12),
	new Cinderella('Marfa', 63, 37),
	new Cinderella('Julia', 25, 39),
	new Cinderella('Snezhana', 37, 35),
	new Cinderella('Liza', 2, 10),
	new Cinderella('Oleksandra', 8, 16)
]

class Prince {
	constructor(name, age, findedSize) {
		this.name = name;
		this.age = age;
		this.findedSize = findedSize;
	}
}
const prince1 = new Prince('Tolik', 25, 37);

const cinderella = cinderellas.find(cinder => cinder.footSize === prince1.findedSize);
console.log(cinderella);



// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.customForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
}
const arr1 = [88, 44, 879, 3, 8];
arr1.customForEach((elem, index, array) => console.log(elem, index, array));

Array.prototype.customFilter = function (callback) {
	const filteredArr = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			filteredArr.push(this[i])
		}
	}

	return filteredArr;
}
const arr2 = arr1.customFilter(elem => elem % 2 === 0);
console.log(arr2)
