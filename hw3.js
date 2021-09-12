// - створити функцію яка обчислює та повертає площу прямокутника висотою 8
// function calc(a, b) {
//     return a * b;
// }
//
// let calc1 = calc(5, 7);
// console.log(calc1);

// - створити функцію яка обчислює та повертає площу кола
//r=8
// function circle(b) {
//     const a = 3.14;
//     return a * (b * b);
// }
//
// let circle1 = circle(8);
// console.log(circle1);

// - створити функцію яка обчислює та повертає площу циліндру
//R-6 h-8
//S=2πR(h+R)
// function cylinder(r, h) {
//     const p = 3.14;
//     return 2 * p * r * (h + r);
// }
//
// cylinder1 = cylinder(6, 8)
// console.log(cylinder1);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function cyfr() {
//     let min = arguments [0];
//     let max = arguments [0];
//     for (const argument of arguments) {
//         if (argument < min) min = argument;
//         if (argument > max) max = argument;
//     }
//     console.log(max, 'max')
//     return min;
// }
//
// console.log(cyfr(4, 8, 15, 9, 14, 22), 'min');


// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
// function word() {
//     let words = arguments [0];
//
//     return document.write(`<div>${words}</div>`);
// }
//
// word('slovo');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function counter(data, count) {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//     }
//     document.write(`</ul>`);
// }
//
// counter("Our text", 3)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function counter(data, count) {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${data}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
//
// counter("Our text", 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function element(number, string, bool) {
//     function element() {
//         let arg;
//         for (let i = 0; i < arguments.length; i++) {
//             document.write(`<li> ${arguments[i]} </li>`);
//         }
//         return
//     }
//
//     element(11, 'slovo', true, 222, 'second slovo', false)

function element (){
    document.write(`<ul>`);
    for (let i = 0; i < arguments.length; i++) {
        document.write(`<li> ${arguments[i]}</li>`);
    }
    document.write(`</ul`);
}
element(12, 'hello', true, 65, 'bye', false)