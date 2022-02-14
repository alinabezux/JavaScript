//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function Srectangle(a, b) {
//     return a * b;
// }
// document.write(Srectangle(10, 10);

//- створити функцію яка обчислює та повертає площу кола з радіусом r
// function Scircle(r) {
//     return 3.14 * r * r;
// }
// document.write(Scircle(10));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function Scylinder(h, r) {
//     return 2 * 3.14 * h * r;
// }
// document.write(Scylinder(10, 10));

//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 45, 0, 23.1, 'hello', 'sdfgh'];
// function writeArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i]);
//     }
// }
// writeArray(arr);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createtext(text) {
//     document.write(text);
//     document.write(`<hr>`);
// }
// createtext('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem commodi cupiditate dolorem doloremque dolores doloribus, et excepturi illum ipsa ipsum maxime necessitatibus nobis odit quas qui, quibusdam sapiente voluptates?');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function CreateUl(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// CreateUl('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, nemo!');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function CreateUl2(conter, text) {
//     document.write(`<ul>`)
//     for (let i = 0; i < conter; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// CreateUl2(3, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, nemo!');

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, 3.14, 'hello', true];
// function list(array) {
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`)
// }
// list(arr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let newArray = [{id: 1, name: 'Alina', age: 18}, {id: 2, name: 'Pes', age: 0.2}, {id: 3, name: 'Kit', age: 3}];
// function writeObjects(array) {
//     for (let arrayElement of array) {
//         document.write(`<div>${arrayElement.id}. ${arrayElement.name}. ${arrayElement.age}</div>`);
//     }
// }
// writeObjects(newArray);
