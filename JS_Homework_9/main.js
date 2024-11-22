// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const firstTaskDiv = document.createElement('div');
firstTaskDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
firstTaskDiv.innerText = 'some text for firstTaskDiv';
document.body.appendChild(firstTaskDiv);

const firstTaskDivCopy = firstTaskDiv.cloneNode(true);
document.body.appendChild(firstTaskDivCopy);



// #OPLI89c9G
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const secondTaskArray = ['Main','Products','About us','Contacts'];

const navList = document.createElement('ul');
document.body.appendChild(navList);

for (const elem of secondTaskArray) {
	const navItem = document.createElement('li');
	navItem.innerText = elem;

	navList.appendChild(navItem);
}



// #jeBqHV525U5
// - Є масив
const coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray1) {
	const courseItem = document.createElement('div');
	courseItem.innerText = `${course.title} - ${course.monthDuration}`

	document.body.appendChild(courseItem);
}



// #jeBqHV525U5
// - Є масив
const coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// 	Завдання робити через цикли.
const coursesList = document.createElement('ul');
coursesList.classList.add('list')
document.body.append(coursesList);

for (const course of coursesAndDurationArray2) {
	const courseItem = document.createElement('li');
	courseItem.classList.add('item');
	coursesList.appendChild(courseItem);

	const courseTitle = document.createElement('h3');
	courseTitle.classList.add('heading');
	courseTitle.innerText = course.title;

	const courseMonthDuration = document.createElement('p');
	courseMonthDuration.classList.add('description');
	courseMonthDuration.innerText = course.monthDuration;

	courseItem.append(courseTitle, courseMonthDuration);
}

