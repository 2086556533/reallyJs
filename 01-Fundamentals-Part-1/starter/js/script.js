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

// !coding chanllenge
// 比较体重和bmi   bmi = 质量除以身高的平方
const mzhMass = 70;
const gxcMass = 50;
const mzhHeight = 170;
const gxcHeight = 170;
const mzhBMI = mzhMass / mzhHeight ** 2;
const gxcBMI = gxcMass / gxcHeight ** 2;

console.log(mzhMass > gxcMass, mzhBMI < gxcBMI);