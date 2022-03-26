// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*const minNum = (a, b, c) => {
    if (a < b && a < c) {
        document.write(a)
    } else if (b < a && b < c) {
        document.write(b)
    } else document.write(c)
};
minNum(2,6,10);*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*const maxNum = (a, b, c) => {
    if (a > b && a > c) {
        document.write(a)
    } else if (b > a && b > c) {
        document.write(b)

    } else document.write(c)
};
maxNum(10, 51, 23);*/

// - створити функцію яка повертає найбільше число з масиву
/*const maxNum = (array) => {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
   document.write(max);
}
maxNum([53, 56, 3, 41.6]);*/

// - створити функцію яка повертає найменьше число з масиву
/*const minNum = (array) => {
    let min = array[0];
    for (const arrayElement of array) {
        if (arrayElement < min) {
            min = arrayElement
        }
    }
    return min;
}
document.write(minNum([5, 1, 6]));*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*const Sum = (array) => {
    let Summary = 0;
    for (let i = 0; i < array.length; i++) {
        Summary = Summary + array[i];
    }
    return Summary;
}
document.write(`Сума елементів масиву = ${(Sum([1, 2, 10]))}`);*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*const AveSum = (array) => {
    // let sum = 0;
    // for (const arrayElement of array) {
    //     sum += arrayElement;
    // }
    // return sum / array.length;
    return (Sum(array)) / array.length;
}
document.write(`Середнє арифметичне масиву = ${AveSum([5, 10, 3, 2])}`);*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*const MinMax = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const element of arg) {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    }
    document.write(max);
    return min;
}
MinMax(5, 10, 69);*/

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*const Numbers = (length) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
};
document.write(Numbers(10));*/

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*const RandomNums = (length, limit) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * limit));
    }
    return array;
}
document.write(RandomNums(10, 200));*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*const reverse = (array) => {
    let revArr = [];
    for (let i = array.length - 1, ri = 0; i >= 0, ri < array.length; ri++, i--) {
        revArr[ri] = array[i];
    }
    return revArr;
}
document.write(reverse([1, 2, 3, 4, 5]));*/
