// //ТИПЫ ДАННЫХ и оператор typeof который указывать на тип данных
// let name = 'Vitaly';
// console.log(typeof name);
// console.log(typeof 42);
// console.log(typeof 'ggg');
// console.log(typeof null);
// console.log(typeof undefined);

//_____________________________________________________________________________________

// //Конкатенация - сложение строк с помощью оператора +. Результатом будет новая строка
// const firstName = 'Pavel';
// const lastName = 'Durov';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

//_____________________________________________________________________________________

// //Шаблонные строки и длина строки (также и массива)
// const firstName = 'Pavel';
// const lastName = 'Durov';
// console.log(`Длинна имени Pavel ${firstName.length} символов, а фамилии Durov ${lastName.length} символов`);
// if (firstName.length == lastName.length) {
//     console.log('Длинна имени и фамилии равны');
// } else {
//     console.log('Длинна имени и фамилии не равны');
// }

//_____________________________________________________________________________________

// //Обращение к символу []

// const name = 'Witcher';
// console.log(name[2]); //t

//_____________________________________________________________________________________

// //indexOf() метод который который ищет индекс первого элемента, если значение не найдено возращает -1
// //метод toLowerCase приравнивает к нижнему регистру все буквы

// let name = 'Witcher';
// console.log(name.toLowerCase().indexOf('cher'));

//_____________________________________________________________________________________

// //Остаток от деления num % 3
// let num = 2013;

// if(num % 3 === 0) {
//     num = num * 3;
// } else {
//     num = num - 2000;
// }
// console.log(num);

//_____________________________________________________________________________________

//Икремент ++ и декремент -- увелечение и соответственно уменьшение числа на один

//_____________________________________________________________________________________

//Возведение в степень **

//_____________________________________________________________________________________

// //NaN «Not a Number» результат числовой операции с нечисловым значением

// console.log(54 * 'Minecraft'); //это NaN

//_____________________________________________________________________________________

// //Infinity результат деления на 0

// console.log(55 / 0);

//_____________________________________________________________________________________

//undefined показывает что область памяти выделена но значение не определено

// let name;
// console.log(name);

//_____________________________________________________________________________________

// //Преобразование к числу поставить перед + или метод Number()
// //Если значение не может быть преобразовано в конкретное число, оно принимает значение NaN

// let num = '22';
// let second = '13';
// console.log(+num + Number(second));

//_____________________________________________________________________________________

// //Тернарный оператор
// const num = -5;
// let isPositive = num > 0 ? 'больше' : 'меньше';
// console.log(isPositive);

//_____________________________________________________________________________________

// //Оператор switch используется если надо сравнить равенство одной переменной с несколькими значениями

// const num = '5';

// switch(num) {
//     case '4':
//         console.log('равно 4');
//         break;
//     case '5':
//         console.log('равно 5');
//         break;
//     default:
//         console.log('нет совпадений');
//         break;
// }

//_____________________________________________________________________________________

// //Цикл While, повторяет тело цикла пока условие истино

// let num = 10;

// while (num < 15) {
//     num++
//     console.log(num);
// }

//_____________________________________________________________________________________

// let num = +prompt('введите двузначное число');


// while (num < 100) {
//     num = num + 7;
//     console.log(num);
// }

//_____________________________________________________________________________________

// let num = +prompt('введите двузначное число');

// let i = 0;

// while (i < num) {
//     i++
//     console.log('I know how to use cycles');
// }

//_____________________________________________________________________________________

// const num = 10;

// let sum = null;

// for (let i = 0; i <= num; i++) {
//     sum = sum + i
//     console.log(i)
// }

// console.log(`Сумма чисел ${sum}`)

//_____________________________________________________________________________________

// const str =  'Vitaly Gol';

// for (let i = 0; i < str.length; i++) {
//     console.log(`${str[i]} индекс ${i}`);
// }

//_____________________________________________________________________________________

// const str = prompt('Введите имя');

// let reverse = str.split('').reverse();

// for (let i = 0; i < reverse.length; i++) {
//     console.log(reverse[i]);
// }

//_____________________________________________________________________________________

// const str = 'Hello. You a good?';

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === '.') {
//         console.log(`индекс точки ${i}`);
//     }
// }

//_____________________________________________________________________________________

// function balance(rub, usd) {
//     console.log(`Сумма на всех вкладах: ${rub + usd * 75} руб`);
// }

// balance(1200, 20);

//_____________________________________________________________________________________

// const min = (a, b) => {
//     if (a < 0 || b < 0) {
//         return null;
//     } else {
//         if (a > b) {
//             return b;
//         } else if (b > a) {
//             return a;
//         } else {
//             return 'Числа равны';
//         }
//     }
// }

// console.log(min(7, 5));
// console.log(min(3, 5));
// console.log(min(5, 5));
// console.log(min(5, -5));

//_____________________________________________________________________________________

// let yearDeposit = (bal, ptc) => {
//   bal += ptc*bal*0.01;
//   console.log(bal);
// }

// let amount = 5000;
// amount = yearDeposit(amount, 10);

//_____________________________________________________________________________________

// const arrName = ['Petya', 'Vanya', 'Aleksey'];
// console.log(arrName);

// arrName[1] = 'Classified';
// console.log(arrName);
// console.log(arrName.length);

// const arrName = ['Petya', 'Vanya', 'Aleksey'];
// console.log(arrName);
// let sum = null;

// for (let i = 0; i < arrName.length; i++) {
//     sum = sum + i;
//     console.log(arrName[i]);
// }

// console.log(`Длинна массива состовляет "${sum}" элемента`);

//_____________________________________________________________________________________

// let arr = ['Новая надежда', 'Империя наносит ответный удар', 'Возвращение джедая'];
// let episode = 3;

// for (let i = 0; i < arr.length; i++) {
//     episode += 1;
//     console.log(`Эпизод ${episode}: ${arr[i]}`);
// }

// // Эпизод 4: Новая надежда
// // Эпизод 5: Империя наносит ответный удар
// // Эпизод 6: Возвращение джедая

//_____________________________________________________________________________________

// const arrName = ['Petya', 'Vanya', 'Aleksey'];
// console.log(arrName);

// const namesJoin = arrName.join(' and ');
// console.log(namesJoin);

// const nameSplit = namesJoin.split(' and ');
// console.log(nameSplit);

// const nameParts = ['John', 'Zalupa', 'Jameson'];
// console.log(nameParts);

// const [firstName, ...other] = nameParts;
// console.log(firstName);
// console.log(other);


// const characters = ['Peter', 'Gwen', 'Norman'];

// const [...go] = characters;

// console.log(...go);

// const arr = [1,2,3,4,5];
// console.log(arr);

// let newArr = arr.map( element => element * 2);

// console.log(newArr);

//_____________________________________________________________________________________

//for of
// const array = ['a', 'b', 'c', 'd'];

// for (let element of array) {
//     console.log(element);
// }

// //Метод some() находит, удовлетворяет ли какой нибудь элемент массива условию, если да, возращает true
// const instrument = ['гитара', 'флейта', 'гитара', 'барабан', 'дудка'];

// instrument.some( element => {
//     if (element === 'гитара') {
//         console.log('гитара найдена');
//         return true;
//     }
// });

// const num = [1,0,8,33,14,7];
// const result = num.some( element => element > 10);
// console.log(result);

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

//   let sum = null;

//   for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//           sum += matrix[i][j];
//       }
//   }

//   console.log(sum);

//_____________________________________________________________________________________

// //Метод массива forEach
// const arr = ['Vitaly', 'Olya', 'Lesha'];

// function funcNames(item, index) {
//     console.log(`Имя ${item} с индексом ${index}`);
// }

// arr.forEach(funcNames);

//_____________________________________________________________________________________

// //Упражнение, вывести все отрицательные числа в консоль
// function printNegatives(item) {
//     item.forEach( (item) => {
//         if (item < 0) {
//             console.log(item);
//         }
//     })
// }

// printNegatives([2, 3, -2, 0, -1]);

//_____________________________________________________________________________________

// const arr = [2, 3, -2, 0, -1];

// arr.forEach( item => {
//     if (item < 0) {
//         console.log(item);
//     }
// })

//_____________________________________________________________________________________


// const arr = [2, 3, -2, 0, -1];

// const newArr = arr.map( (item, index) => {
//     console.log(`Элемент "${item}" с индексом ${index}`);
//     return item + 5;
// })

// console.log(`Новый массив [${newArr}]`);

//_____________________________________________________________________________________

// function updateArr( item ) {
//     const newArr = item.map( item => {
//         if (item < 0) {
//             return item * -1
//         } else if (item > 0) {
//             return item * 2
//         }
//     })
//     console.log(newArr);
// }

// updateArr([12, -23, -40, 3]);

//_____________________________________________________________________________________

// function findThreeLettersWord(item) {
//     const element = item.find(item => {
//         if (item.length === 3) {
//             return item;
//         }
//     })
//     console.log(element);
// }

// findThreeLettersWord(['Green','Red', 'Blue']);

//_____________________________________________________________________________________

//  function findThreeLettersWord(item) {
//     item.find(item => {
//         return console.log(item.length === 3);
//     })
// }
    
//     findThreeLettersWord(['Green','Red', 'Blue']);

//_____________________________________________________________________________________

// //Метод sort, сортировка массива

// const arr = [3,6,1,7,9,4,2,0,5,8];

// function filterArr() {
//     arr.sort((a, b) => {

//         if (a < b) {
//             return -1;
//         }
//         if (a > b) {
//             return 1;
//         }

//         return 0;
//     });
//     console.log(arr);
// }

// filterArr(arr)

//_____________________________________________________________________________________

// //Метод sort, упрощенный вариант

// const arr = [3,6,1,7,9,4,2,0,5,8];

// function filterArr() {
//     arr.sort((a, b) => {return b - a})
//     console.log(arr);
// }

// filterArr(arr)

//_____________________________________________________________________________________

// function sortStrings(arr) {
//     const newArr = arr.sort((a, b) => {return b.localeCompare(a)});
//     console.log(newArr);
// }

// sortStrings(['Hofstadter', 'Cooper', 'Wolowitz', 'Koothrappali']);

//_____________________________________________________________________________________

//Функция для перевода строки формата kebab-case в формат camelCase

// function kebabToCamel(str){
//     let arr = str.split('-');
//     let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
//     let capitalString = capital.join("");
  
//     console.log(capitalString);
//   }
  
//   kebabToCamel('first-user');

//_____________________________________________________________________________________

// const user = {
//     name: 'Vitaly',
//     gender: 'M',
//     'birthday br': '09.07.1997'
// }

// console.log(user['birthday br']);

// const user = {
//     name: 'Vitaly',
//     gender: 'Male'
// };

// const newUser = {
//     ...user,
//     adres: 'Russia'
// };

// // console.log(user);
// // console.log(newUser);

// if (user.status) {
//     console.log('первое условие');
// } else {
//     console.log('такого свойства нет');
// }

//_____________________________________________________________________________________

//Упражнение

console.log('ff')