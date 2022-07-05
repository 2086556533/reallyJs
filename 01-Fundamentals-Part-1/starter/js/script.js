// let js = 'amazing';
// console.log(40 + 80 + 23 - 10);
//
// console.log('mzh')/
// console.log(12)

// camalCase 驼峰格式
// let firstName = 'mzh'
// console.log(firstName)
// firstName = 'zsq'
// console.log(firstName)
// firstName = 'wjl'
// console.log(firstName)

// !wrongnamed  字母数字下划线美元符号 字母不打头
// let a&b = 123  this is wrong
// let new = 123  this is wrong
// let function = 123  this is wrong
// let Person = 123  this is wrong
// !定义常数用大写
// let PI = 3.1415; this is right

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';
// !upper is better than downner
// let job1 = 'Programmer';
// let job2 = 'Teacher';

// console.log(myFirstJob)

// ! 数据类型
/*
    1. 原始数据类型 定义时不需要确定数据类型  会动态确定
        number  STring  Boolean  三种最重要的数据类型
        undefined  Null  ES6新增  Symbol  Bigint

*/
// typeof 获得数值的数据类型
// let num = 12;
// console.log(typeof true)
// console.log(typeof myFirstJob)
// console.log(typeof num)

// let year;
// console.log(year);
// console.log(typeof year);
// year = 1997;
// console.log(typeof year);
// !这是一个js中的错误   null的数据类型是一个对象
// console.log(typeof null)

/*
    !var ES6  let const
    尽量避免使用var
*/

// let age = 30;
// age = 40;
// let year;
// !const  受保护的变量不能被改变(以下为错误代码)
// const birthYear = 1991;
// birthYear = 1992;
// const job;
// this is right
// var job = 'programmer'
// job = 'teacher'

// !运算符 1. 数学运算符+ - * / ** typeof   2. 赋值运算符= += -= *= ++ --
// const now = 2037;
// const mzhYear = now - 1998;
// const gxcYear = now - 2000;
// 2**3表示2的三次幂
// console.log(mzhYear * 2, gxcYear / 2, 2 ** 3, 'mzhYear' + 'mzh')
// ! 比较运算符 <  >  <=  >=
// console.log(mzhYear >= 18)

// !运算符优先级
// const now = 2037;
// const ageMzh = now - 1998;
// const ageGxc = now - 2000;
// console.log(ageGxc, ageMzh);
// const averageAge = (ageGxc + ageMzh) / 2;
// console.log(averageAge)
// // console.log(now - 1998 > now - 2018)
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y)

// !coding challenges  编码挑战
// 比较体重和bmi   bmi = 质量除以身高的平方
// const mzhMass = 70;
// const gxcMass = 50;
// const mzhHeight = 1.7;
// const gxcHeight = 1.7;
// const mzhBMI = mzhMass / mzhHeight ** 2;
// const gxcBMI = gxcMass / gxcHeight ** 2;

// console.log(mzhBMI, gxcBMI);

// !字符串
// 1. 模板字符串  最常用的ES6内容
// const firstName = 'mzh';
// const job = 'teacher';
// const birthYear = 1998;
// const year = 2022
// const mzh = "i'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
// console.log(mzh)

// const mzhNew = `i'm  ${firstName} , a ${year - birthYear} year old ${job}`;
// console.log(mzhNew)

// console.log('string weith \n\
// muliple \n\
// lines');
// console.log(`string
// multiple
// lines`)

// !  if。。else语句(控制结构)
// const age = 16;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log('yoou can get id😊')
// } else {
//     console.log('you are so young😒')
// }
// ----------------------------------------------------------------------------
// const birthYear = 2098;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);
// ----------------------------------------------------------------------------

// !coding challenges  编码挑战
// const mzhMass = 70;
// const gxcMass = 50;
// const mzhHeight = 1.7;
// const gxcHeight = 1.7;
// const mzhBMI = mzhMass / mzhHeight ** 2;
// const gxcBMI = gxcMass / gxcHeight ** 2;
// if (mzhBMI > gxcBMI) {
//     console.log(`mzh's BMI is heighter than gxc,is${mzhBMI} 😂`)
// } else {
//     console.log(`gxc's BMI is heighter than mzh,is${mzhBMI} 😂`)

// }

// !数值类型转换
// ----------------------------------------------------------------------------
// const inputYear = '1998';
// console.log(Number(inputYear) + 18)
// console.log(Number('mzh') + 18)
// console.log(String(23) + inputYear)
// ----------------------------------------------------------------------------
// 强制转换
// console.log('i am ' + 23 + ' year old') // 使用加号将数字转换为字符串
// console.log('23' - '10' - 3)  // 使用减号乘号 除号 将字符串转换为数字
// console.log('23' * '10')
// console.log('23' / '10')
// let n = '1' + 1;
// n = n - 1;
// console.log(n)
// ----------------------------------------------------------------------------

// !真值和假值
// 五个假值  0 '' undefined null NaN
// console.log(Boolean(0))  // false
// console.log(Boolean(undefined))  // false
// console.log(Boolean('mzh'))  // true
// console.log(Boolean({}))  // true
// const money = 9999999
// if (money) {
//     console.log('dont spend it all :)')
// } else {
//     console.log('u shoule get a job')
// }

// let height = 0;
// if (height) {
//     console.log('height is  defined')
// } else {
//     console.log('height is undefined')
// }

// const age = '18';
// // 三等号 严格相等 ‘18’ === 18  false 双等号 松散相等 ‘18’ == 18 true
// if (age === 18) console.log('you are 18 years old (strict)')
// if (age == 18) console.log('you are 18 years old (loose)')

// const favourite = Number(prompt('what is your favourite number'))
// console.log(favourite)
// console.log(typeof favourite)

// if (favourite === 23) {
//     console.log('cool 23 is an amazing number')
// } else if (favourite === 7) {
//     console.log('cool 7 is an amazing number')
// } else {
//     console.log('number is not 23 or 7')
// }

// if (favourite !== 23) console.log('why not 23?')

// !逻辑运算  与 &&  或 ||  非 !
// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('able to drive')
// } else {
//     console.log('someone else should drive')
// }
// if (!isTired) {
//     console.log('someone else should drive');
// } else if (shouldDrive) {
//     console.log('able to drive')
// } else {
//     console.log('someone else should drive');
// }

// !coding chanllenge

// const mzhScore = (96 + 108 + 89) / 3;
// const gxcScore = (97 + 112 + 101) / 3;
// if (mzhScore > gxcScore && mzhScore >= 100) {
//     console.log('mzhteam is won this game 🎉')
// } else if (gxcScore > mzhScore && gxcScore >= 100) {
//     console.log('gxcteam is won this game 🎉')
// } else if (mzhScore === gxcScore && mzhScore === 100 && gxcScore === 100) {
//     console.log('both won');

// } else {
//     console.log('no one won')
// }

// const day = 'wednesday';
// switch (day) {
//     case 'monday': console.log('this is monday');
//         break;
//     case 'tuesday': console.log('this is tuesday'); break;
//     case 'wednesday': ;
//     case 'thursday': console.log('this is thursday'); break;
//     case 'friday': console.log('this is friday'); break;
//     case 'saturday': console.log('this is saturday'); break;
//     case 'sunday': console.log('this is sunday'); break;
//     default: console.log('not a valid day')
// }
// if (day === 'monday') {
//     console.log('this is monday');
// } else if (day === 'tuesday') {
//     console.log('this is tuesday')
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('this is thursday')
// } else if (day === 'friday') {
//     console.log('this is friday');
// } else if (day === 'saturday') {
//     console.log('this is saturday')
// } else if (day === 'sunday') {
//     console.log('this is sunday')
// } else {
//     console.log('not a valid day')
// }

// ! 三目运算
// const age = 18;
// age >= 18 ? console.log('this is a adult') : console.log('is not a adult')
// console.log(`i like drink ${age >= 18 ? 'wine' : 'water'}`)

// 50-300 15%  其他 20%
// const tips = 100;
// console.log(`you should give me ${tips >= 50 && tips <= 300 ? tips * 0.15 : tips * .2}$`)

// js发展历史
