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

// const inq = prompt('Введите имя свойства');

// //Обычный объект
// const user = {
//     name: 'Luser',
//     nickName: 'Loshara',
//     age: 24,
//     beforePension: null,
//     premium: true,
//     'h and h': null,
//     setAge(newAge) {
//         this.age = newAge;
//     },
//     getYearsBeforeRetirement(pension) {
//         this.beforePension = pension - this.age;
//     }
// }

// //Деструктуризация объекта, для записи свойств в отдельные переменные
// const {name, age} = user;
// console.log(name , age);

// //копирование объекта с помощью spreed оператора
// const userClone = {...user};
// console.log(userClone);

// //Добавление свойства
// user.status = 'online';
// //Изменение свойства
// user.status = 'offline';
// //Удаление свойства
// delete user.status;

// user.setAge(34)
// user.getYearsBeforeRetirement(65)

// console.log(user);
// console.log(`До пенсии осталось ${user.beforePension}`);

// //Создали ссылку к свойству объекта
// const property = 'premium';

// //Обращение к свойствам
// console.log(user.name);
// console.log(user['premium']);
// console.log(user['h and h']);
// //Ссылка через переменную
// console.log(`Ссылка к свойству premium: ${user[property]}`);

// //Наличие свойства
// if (user.name) {
//     console.log(`Свойство name true`);
// } else {
//     console.log(`Свойство name false`);
// }

// //Наличие свойства
// if ('premium' in user) {
//     console.log(`Свойство premium true`);
// } else {
//     console.log(`Свойство premium false`);
// }

// if (user[inq]) {
//     console.log(`Свойство ${inq} имеется`);
// } else {
//     console.log(`Свойство ${inq} не имеется`);
// }

//_____________________________________________________________________________________

// // Объекты

// const userOne = {
//     name: 'Vladislav',
//     age: 24,
//     loginfo(job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`Job is ${phone}`);
//         console.groupEnd()
//     }
// }

// const userTwo = {
//     name: 'Elena',
//     age: 33
// }

// userOne.loginfo()

// //Метод bind
// //Первый способ
// userOne.loginfo.bind(userTwo)('Frontend', '+7 977 147 47 14')
// //Или
// userOne.loginfo.bind(userTwo, 'Frontend', '+7 977 147 47 14')()
// //Второй способ
// const fnAddInfo = userOne.loginfo.bind(userTwo)
// fnAddInfo('Frontend', '+7 977 147 47 14')

// //Метод call
// userOne.loginfo.call(userTwo, 'Frontend', '+7 977 147 47 14')

// //Метод apply
// userOne.loginfo.apply(userTwo, ['Frontend', '+7 977 147 47 14'])

// const array = [1, 2, 3, 4, 5];

// Array.prototype.multiplay = ( function(n) {
//     return this.map( i => {
//         return i * n
//     })
// })

// console.log(array.multiplay(2));

// function multiply(arr, n) {
//     return arr.map( element => {
//         return element * n;
//     })
// }

// console.log(multiply(array, 5));
// console.log(array);

//_____________________________________________________________________________________

// const shopItem  = {
//     name: 'phone',
//     price: 12000,
//     changeName(newName) {
//         this.name = newName;
//         console.log(this.name)
//     },
//     changePrice(newPrice) {
//         this.price = newPrice;
//         console.log(this.price);
//     }
// }

// shopItem.changeName('iphone')
// shopItem.changeName(35000)

//Классы

// class User {
//     constructor(name) {
//         this.name = name;
//         this.department = 'Rebels';
//         this.isAvailable = false;
//     }
//     toggleAvailable(isAv) {
//         this.isAvailable = isAv;
//     }
// }

// const userOne = new User('Luke Skywalker');
// const userTwo = new User('Han Solo');

// console.log(userOne);
// console.log(userTwo);

// class Person {
//     constructor(surname, name, age, gender) {
//         this.surname = surname;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     celebrateBirthday() {
//         this.age += 1
//     }
//     rename(newName) {
//         this.name = newName;
//     }
// }

// const personOne = new Person('Buchkova', 'Anna', 19, 'female');
// const personTwo = new Person('Volkova', 'Olga', 22, 'female');
// const personThree = new Person('Dyatlova', 'Nadya', 30, 'female');

// personOne.celebrateBirthday()
// personTwo.celebrateBirthday()
// personThree.celebrateBirthday()

// console.log(personOne);
// console.log(personTwo);
// console.log(personThree);

// class Admin extends Person {
//     constructor(surname, name, age, gender, role, id) {
//         super(surname, name, age, gender);
//         this.role = role;
//         this.id = id;
//     }
// }

// class Player extends Person {
//     constructor(surname, name, age, gender, level) {
//         super(surname, name, age, gender);
//         this.level = level;
//     }
// }

// const personFour = new Admin('Golob', 'Vitaly', 25, 'Male', 'admin', 001);
// const personFive = new Player('Golob', 'Aleksey', 15, 'Male', 14);

// personFive.rename('Maksim')

// console.log(personFour);
// console.log(personFive);

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

// class Animal {
//     static type = 'ANIMAL'

//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//     }
//     voice() {
//         console.log('Ааааууууу');
//     }
// }

// const obj = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal {
//     static type = 'CAT'

//     constructor(options) {
//         super(options)
//         this.color = options.color;
//     }

//     voice() {
//         super.voice()
//         console.log('I am cat');
//     }

//     get ageInfo() {
//         return this.age * 7;
//     }

//     set ageInfo(newAge) {
//         this.age = newAge;
//     }
// }

// const cat = new Cat ({
//     name: 'Cat',
//     age: 7,
//     hasTail: true
// })

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = 'none';
//     }

//     show() {
//         this.$el.style.display = 'block';
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }

// const boxOne = new Box({
//     selector: '#boxOne',
//     size: 100,
//     color: 'red'
// })

//_____________________________________________________________________________________

// //DOM дерево

// //Метод querySelector() - метод вернёт первый объект, подходящий под селектор, переданный в качестве параметра
// const input = document.querySelector('input');

// //Метод querySelectorAll() - этот метод возращает коллекцию элементов. Коллекция - это упорядоченный псевдомассив элементов
// //Обратиться к элементу можно как к массиву и перебрать тоже
// const input = document.querySelectorAll('input');

// //Упражнение
// const videoCards = document.querySelectorAll('.primary');
// console.log(videoCards[0].innerText);
// console.log(videoCards[1].innerText);

// const videoCards = document.querySelector('ul');

// console.log(videoCards.parentElement);
// console.log(`Предыдущий ${videoCards.previousElementSibling.innerHTML}`);
// console.log(videoCards.innerText);
// console.log(videoCards.firstElementChild.innerHTML);

// // const video = document.querySelectorAll('li');
// // video.forEach(element => {
// //     console.log(element.innerHTML);
// // })

// const change = document.querySelector('.primary');
// console.log(change.innerText);
// change.innerText = 'Я поменял текст';
// change.style.color = 'red';
// console.log(change.innerText);

// const header = document.querySelector('h1');
// header.innerText = 'GeForce 20 Series';

// const changeBackground = document.querySelectorAll('.primary');
// changeBackground.forEach( e => {
//     e.style.background = '#ebebeb';
// })

// const list = document.querySelectorAll('li');

// list.forEach(element => {
//     element.classList.add('item');
// })

// list.forEach(element => {
//     if (!element.classList.contains('primary')) {
//         element.classList.add('secondary');
//     }
// })

// list.forEach(element => {
//     if (element.classList.contains('primary')) {
//         element.remove();
//     }
// })

// const parrent = document.querySelector('ul');
// const newElement = document.createElement('li');
// newElement.innerText = 'TITAN RTX';
// parrent.insertBefore(newElement, list[0]);

//_____________________________________________________________________________________

//Упражнение

// const btn = document.querySelectorAll('.shopping-list button');
// btn.forEach(element => {
//     element.addEventListener('click', event => {
//         event.target.style.textDecoration = 'line-through';
//     });
// })

//_____________________________________________________________________________________

//Упражнение

// const zone = document.querySelector('.zone');
// const label = document.querySelector('.label');

// zone.addEventListener('mouseover', () => {
//   label.style.display = 'block';
// });

// zone.addEventListener('mouseout', () => {
//   label.style.display = 'none';
// });

//_____________________________________________________________________________________

// document.addEventListener('keyup', event => {
//     if (event.keyCode == 13) {
//         console.log(`ENTER`);
//     } else {
//         console.log(event.keyCode);
//     }
// })

//_____________________________________________________________________________________

// const input = document.querySelector('.form input');
// const button = document.querySelector('.btn');

// const arr = [];

// button.addEventListener('click', () => {
//     console.log(input.value);
//     const name = input.value;
//     arr.push(name);

//     console.log(arr);

//     input.value = '';
// })

//_____________________________________________________________________________________

// const password = document.querySelector('.pass');
// const clue = document.querySelector('.tip');

// password.addEventListener('blur', () => {
//     if (password.value.length >= 3) {
//         clue.style.display = 'none';
//     } else {
//         clue.style.display = 'block';
//     }
// })

//_____________________________________________________________________________________

// const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';

// const dataObj = JSON.parse(data);

// console.log(dataObj);

// dataObj.id = 157;

// const dataStr = JSON.stringify(dataObj)

// console.log(dataStr);

//_____________________________________________________________________________________

//Упражнение "генератор шуток"

// const text = document.querySelector('.task p');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     button.innerText = 'ЕЩЕ';

//     fetch('https://api.chucknorris.io/jokes/random')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             text.innerText = data.value;
//         })
//         .catch(error => {
//             console.log(`Ошибка ${error.message}`);
//         });
// })

//_____________________________________________________________________________________

const text = document.querySelector('.task p');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    button.innerText = 'ЕЩЕ';

    let time = 0;
    const id = setInterval(() => {
        time += 1;
        // console.log(`Прошло ${time} сек.`);
        text.innerText = time;
    }, 1000);
})