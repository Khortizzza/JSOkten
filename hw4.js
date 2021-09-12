// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randArray (mi, ma, i) {
    ma.push(Math.floor(Math.random() *100));
    return ma.length < i ? randArray(mi, ma) : ma;
}
console.log(randArray(0, []));

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

function randArray (min, max, lengh) {
    const arr = [];
    for (let i = 0; i < lengh; i++){
        arr.push (Math.floor(Math.random()* (max - min) + min));
    }
    return arr
}
console.log(randArray(0, 100, 10))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let go = [456, 4, 45, 64, 24, 42];
go.sort(function(a, b) { return a - b; });

console.log(go);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

let array = [2, 3, 88, 54, 265, 6, 96, 1];
let result = array.filter(num => num % 2 == 0);
console.log(result);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
//

let numbers = [2, 3, 88, 54, 265, 6, 96, 1];
let Strnumber = numbers.map(function(element){
    return `${element}`;
})

console.log(Strnumber);


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// та Відсортувати його по id. по зростанню (sort)
//
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users;
users = [
    new User(44, 'ivan', 'popov', 'ivan@popov.com', '0500990671'),
    new User(23, 'polina', 'ivanova', 'poli@gmail.com', '0990562233'),
    new User(1, 'anna', 'franchuk', 'anna@franchuk.com', '0985223641'),
    new User(12, 'pavlo', 'prokopchuk', 'pavl@i.ua', '0678524796')
];
console.log(users);

const filterId = users.filter(function (e) {
    return e.id % 2==0;
});
console.log(filterId);

const sortId = users.sort
(function(a, c){
    return a.id-c.id
})
console.log(sortId);