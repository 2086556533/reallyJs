// 严格模式  
'use strict'; // 声明本文档使用严格模式 可以用于代码调试

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i can drive')


// function  是一段可以不断重用的功能
// function logger() {
//     console.log('my name is mzh');
// }
// 调用 运行
// logger();

// function fruitProcessor(apple, orange) {
//     console.log(apple, orange);
//     const juice = `Juice with ${apple} apples and ${orange} oranges`
//     return juice
// }
// console.log(fruitProcessor(2, 3));

// 函数声明  可以在定义之前调用
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1998);
// console.log(age1);
// 匿名函数  不能在定义之前调用
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1998);
// console.log(age2)

// 箭头函数
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years ago`;
// }
// console.log(yearsUntilRetirement(1998, 'mzh'));

// 函数内部调用其他函数
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apple, orange) {
//     const applePieces = cutFruitPieces(apple)
//     const orangePieces = cutFruitPieces(orange)

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
//     return juice
// }
// console.log(fruitProcessor(2, 3))
// const calcAge = function (birthTear) {
//     return 2022 - birthTear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years ago`)
//         return retirement
//     } else {
//         console.log(`${firstName} is already retired`)
//         return -1

//     }

//     // return `${firstName} retires in ${retirement} years ago`;
// }
// console.log(yearsUntilRetirement(1998, 'mzh'));
// console.log(yearsUntilRetirement(1955, 'zsq'));

// !coding challenge
// 
const average = (socre1, socre2, socre3) => (socre1 + socre2 + socre3) / 3
const aSocre = average(600, 0, 0);
const bSocre = average(100, 0, 0);
const checkWinner = function (aSocre, bSocre) {
    if (aSocre >= 2 * bSocre) {
        console.log(`Team a is win ${aSocre} VS ${bSocre}`)
    } else if (bSocre >= aSocre) {
        console.log(`Team b is win ${bSocre} VS ${aSocre}`)
    } else {
        console.log('there is no team win..')
    }
}
checkWinner(aSocre, bSocre);

