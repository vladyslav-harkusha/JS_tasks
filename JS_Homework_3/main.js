// 1) #y7crMeFwHcS
//    За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
	document.write('<div>Some text</div>');
}


// 2) #TYj7ncx
//    За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
	document.write(`<div>${i} Some new text</div>`);
}


// 3) #uzkt71dp
//    За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;

while (i < 20) {
	document.write('<h1>Some title</h1>')
	i++;
}


// 4) #OeT7t3uUMFi
//    За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;

while (j < 20) {
	document.write(`<h1>${j} - Some new title</h1>`)
	j++;
}

// 5) #vLSZKMlO
//    Використовуючи дані з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for (const item of listOfItems) {
	document.write(`<li>${item}</li>`);
}
document.write('</ul>');


// 6) #Hdjws7E
//    Використовуючи дані з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
//    Великими літерами прописанні властивості об'єкта які потрібно впровадити в шаблон
let products = [
	{
		title: 'milk',
		price: 22,
		image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
	},
	{
		title: 'juice',
		price: 27,
		image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
	},
	{
		title: 'tomato',
		price: 47,
		image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
	},
	{
		title: 'tea',
		price: 15,
		image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
	}
];

for (const product of products) {
	document.write(`
		<div class="product-card">
			<h3 class="product-title">${product.title}. Price - ${product.price}</h3>
			<img src="${product.image}" alt="${product.title}" class="product-image">
		</div>
	`);
}


// 7) #4WrHwFTEop0
//    Є масив, за допомоги циклу вивести:
//  	- користувачів зі статусом true
//  	- користувачів зі статусом false
//  	- користувачів які старші за 30 років
let users = [
	{name: 'vasya', age: 31, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
	{name: 'olya', age: 28, status: false},
	{name: 'max', age: 30, status: true},
	{name: 'anya', age: 31, status: false},
	{name: 'oleg', age: 28, status: false},
	{name: 'andrey', age: 29, status: true},
	{name: 'masha', age: 30, status: true},
	{name: 'olya', age: 31, status: false},
	{name: 'max', age: 31, status: true}
];
console.log('користувачі зі статусом true')
for (const user of users) {
	if (user.status) {
		console.log(user)
	}
}

console.log('користувачі зі статусом false')
for (const user of users) {
	if (!user.status) {
		console.log(user)
	}
}

console.log('користувачі які старші за 30 років')
for (const user of users) {
	if (user.age > 30) {
		console.log(user)
	}
}

