//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b, c) {
//     if (a < b && a < c) {
//         document.write(a);
//     } else if (b < a && b < c) {
//         document.write(b);
//     } else {
//         document.write(c);
//     }
// }
// min(10,20,30);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a, b, c) {
//     if (a > b && a > c) {
//         document.write(a);
//     } else if (b > a && b > c) {
//         document.write(b);
//     } else {
//         document.write(c);
//     }
// }
// max(10,20,30);

// - створити функцію яка повертає найбільше число з масиву
// function max(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// document.write(max([1, 6, 5, 8, 9]));

// - створити функцію яка повертає найменьше число з масиву
// function min(array) {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
// document.write(min([5,63,95,65.2]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = sum + arrayElement;
//     }
//     return sum;
// }
//
// document.write(sum([1, 2, 10]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function average(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = sum + arrayElement;
//     }
//     return sum / array.length;
// }
//
// document.write(average([4, 5, 6]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено)
// function minmax(numbers) {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// document.write(minmax(100, 20, 3, 100, 2021));

// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function arrRandom(x) {
//     let arr = [];
//     for (let i = 0; i < x; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
//
// document.write(arrRandom(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomlimit(x,limit) {
//     let array = [];
//     for (let i = 0; i < x; i++) {
//         array.push(Math.round(Math.random() * limit));
//     }
//     return array;
// }
//
// document.write(randomlimit(10,50));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(array) {
//     let newArray = [];
//     for (let i = array.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArray[ri] = array[i];
//     }
//     return newArray;
// }
//
// document.write(reverse(1, 2, 3));
