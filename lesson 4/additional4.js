// - створити функцію, яка якщо приймає один аргумент, просто виводить його,
// якщо два аргументи - складає або конкатенує їх між собою.
// function foo(num) {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     return sum;
// }
//
// document.write(foo(5,95));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]
// function summarise(arr1, arr2) {
//     let newArr = [];
//     for (let i = j = k = 0; i < arr1.length, j < arr2.length; i++, j++, k++) {
//         newArr[k] = arr1[i] + arr2[j];
//     }
//     return newArr;
// }
//
// document.write(`[${summarise([1, 2, 3, 4], [2, 3, 4, 5])}]`);

// - Створити функцію яка приймає масив будь яких об`єктів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function returnKeys(array) {
//     let arrKey = [];
//     for (let i = 0; i < array.length; i++) {
//         arrKey.push()
//     ???
//     return arrKey;
// }
//
// document.write(returnKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//      - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//  EXAMPLE:
//      [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
