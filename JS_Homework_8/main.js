// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function createDeepCopy(originObject) {
	const deepCopy = {};

	if (originObject === null) {
		return null;
	}
	if (typeof originObject !== 'object') {
		return originObject;
	}
	if (Array.isArray(originObject)) {
		return originObject.map(elem => createDeepCopy(elem));
	}

	for (const key in originObject) {
		if (typeof originObject[key] === 'function') {
			deepCopy[key] = eval(String(originObject[key]));
		} else {
			deepCopy[key] = createDeepCopy(originObject[key]);
		}
	}

	return deepCopy;
}

const testObj = {
	name: 'Tolik',
	skills: ['react', NaN, undefined, null, 'nodejs', ['HTML', 'CSS']],
	marks: {
		js: 95,
		HTML: 80,
		react: 99
	},
	greeting: (name) => console.log(`hello ${name}`)
}
console.log(testObj);
testObj.greeting('John');

const copy = createDeepCopy(testObj);
console.log(copy);
copy.greeting('John copy');

console.log(testObj.skills[5] === copy.skills[5]);
console.log(testObj.marks === copy.marks);
console.log(testObj.greeting === copy.greeting);



// #iz6emEsP2BA
// - є масив
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
const coursesAndDurationArray = [
	{title: 'JavaScript Complex', monthDuration: 5},
	{title: 'Java Complex', monthDuration: 6},
	{title: 'Python Complex', monthDuration: 6},
	{title: 'QA Complex', monthDuration: 4},
	{title: 'FullStack', monthDuration: 7},
	{title: 'Frontend', monthDuration: 4}
];

const coursesWithId = coursesAndDurationArray.map(course => ({ id: String(Math.random()).slice(2), ...course  }));
console.log(coursesWithId);
