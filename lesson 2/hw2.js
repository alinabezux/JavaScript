//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю чи четверту частину години).
    /*let time = +prompt("Введіть хвилину від 0 до 59");
    if (time >= 0 && time <= 14) {
    console.log('I')
    } else if (time >= 15 && time <= 29) {
    console.log('II')
    } else if (time >= 30 && time <= 44) {
    console.log('III')
    }else if (time >= 45 && time <= 59) {
    console.log('IV')
    } else {
        console.log("Некоректно введений час")
    }*/

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
   /* let day = +prompt("Введіть дату від 1 до 31")
    if (day>=1 && day<=10){console.log('I')}
    else if (day >=11 &&day <=20){console.log('II')}
    else if(day>=21 && day<=31){console.log('III')}
    else {console.log("Некоректно введена дата")}*/

//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//   Перевірте роботу скрипта при test, що дорівнює true, false.
//   Напишіть два варіанти скрипта - з коротким записом(тернаркою)
    /*let test = false;
if (test===true){console.log("Вірно")}
else {console.log("Неправильно")}
(тернарка)
(test = true) ? console.log('Вірно') : console.log('Неправильно')*/

//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
    /*let a = 0;
if (a!==0){console.log("Вірно")}
else {console.log("Невірно")}
(a !== 0) ? console.log('Вірно') : console.log('Невірно')*/

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
// дня тижня і на екрані відображається інфа,що заплановано на цей день.
    /*let day = +prompt('enter day')
switch (day){
    case 1:
        console.log('go to the store');
        break;
    case 2:
        console.log('read a book');
        break;
    case 3:
        console.log('clean the room');
        break;
    case 4:
        console.log('walk the dog');
        break;
    case 5:
        console.log('go to friends');
        break;
    case 6:
        console.log('call mom');
        break;
    case 7:
        console.log('make pasta');
        break;
    default:
        console.log('wrong number');
}*/

//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
    /*let year = +prompt('Введіть кількість днів у році');
if (year % 4 === 0) {
    console.log('Високосний')
} else {
    console.log('Не високосний')
}
(+prompt('Введіть кількість днів у році') % 4 === 0) ? console.log('Високосний') : console.log('Не високосний');*/

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
/*let nameJS = prompt('Яка «офіційна» назва JavaScript?');
if (nameJS === 'ECMAScript') {
    alert('Правильно!');
} else {
    alert('Не знаєте? ECMAScript!');
}*/
