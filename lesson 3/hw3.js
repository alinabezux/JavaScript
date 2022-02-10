// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
/*let numbers = [1, 5, 6.2, 8, 65.12];
let string = ['my', 'name', 'is', 'Alina', 'Bezuh'];
let arr3 = ['hello', 3.14, true, 145697, false];
console.log(numbers);
console.log(string);
console.log(arr3);*/

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/*let array = [];
array[0] = 'hello';
array[1] = 3.14;
array[2] = true;
array[3] = false;
array[4] = 145697;
array[5] = 'Alina';
console.log(array);*/

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
/*for (let i = 0; i < 10; i++) {
    document.write(`<div>text</div>`)
}*/

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} - text with index</div>`);
}*/

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/*let i = 0;
while (i < 20) {
    document.write(`<h1>text</h1>`);
    i++;
}*/

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*let i = 0;
while (i <= 20) {
    document.write(`<h1>${i} text with index</h1>`);
    i++;
}*/

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*
let array = [1, 6.15, 15, 752, 15.6, 456, 852, 1, 8, 1];
for (let i = 0; i < array.length; i++) {
    document.write(array[i]);
}
*/

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*let array = ['I', ' ', 'love', ' ', 'Okten', ' ', 'very', ' ', 'very', ' ', 'much', '.'];
for (let i = 0; i < array.length; i++) {
    document.write(array[i]);
}*/

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
/*let array = [1, 6.15, 'asdfgh', false, 15649846, 'пуньк', true, 1, 8, 'qwerty'];
for (let i = 0; i < array.length; i++) {
    document.write(array[i]);
}*/

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*let array = [1, 6.15, 'asdfgh', false, 15649846, 'пуньк', true, 1, 8, 'qwerty'];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'boolean') {
        console.log(array[i]);
    }
}*/

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*let array = [1, 6.15, 'asdfgh', false, 15649846, 'пуньк', true, 1, 8, 'qwerty'];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        console.log(array[i]);
    }
}*/

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/*    let array = [1, 6.15, 'asdfgh', false, 15649846, 'пуньк', true, 1, 8, 'qwerty'];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            console.log(array[i]);
        }
    }*/

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
/*let array = [];
array[0] = 'hello';
array[1] = 3.14;
array[2] = true;
array[3] = false;
array[4] = 145697;
array[5] = 'Alina';
array[6] = 'qwerty';
array[7] = true;
array[8] = 0;
array[9] = 'asd';
array[10] = false;
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}*/

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 10; i++) {
    console.log('Крок ' + i + ' ');
    document.write('Крок ' + i + ' ');
}*/

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 100; i++) {
    console.log('Крок ' + i + ' ');
    document.write('Крок ' + i + ' ');
}*/

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 100; i+=2) {
    console.log('Крок ' + i + ' ');
    document.write('Крок ' + i + ' ');
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('Крок ' + i + ' ');
        document.write('Крок ' + i + ' ');
    }
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*
for (let i = 1; i < 100; i++) {
    if (i % 2 === 1) {
        console.log('Крок ' + i + ' ');
        document.write('Крок ' + i + ' ');
    }
}*/
