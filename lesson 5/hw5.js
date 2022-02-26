// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка обчислює та повертає площу прямокутника
// const squareRectangle = (a, b) => {
//     return a * b;
// }
// document.write(squareRectangle(5, 4));

// - створити функцію яка обчислює та повертає площу кола
// const squareCircle = (r) => {
//     return 2 * 3.14 * r;
//     ;
// }
// document.write(squareCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру
// const squareCylinder = (r, h) => {
//     return (2 * 3.14 * r * h) + (2 * 3.14 * r * r) ;
// }
// document.write(squareCylinder(5, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 2, 3, 'hello', true];
// const foo = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i]);
//     }
// }
// foo(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const func = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// func('sdfghjkl');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const createUl = (text) => {
//     document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// createUl(`dfghjk`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const createUl = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createUl(`dfghjk`, 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, 63, true, 'hello'];
// const foo = (array) => {
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`);
// }
// foo(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let arr = [{id: 1, name: 'Alina', age: 18}, {id: 2, name: 'Misha', age: 11}, {id: 3, name: 'Yuriy', age: 41}];
// const func = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}. ${arrayElement.name} ${arrayElement.age}</div>`);
//     }
// }
// func(arr);
