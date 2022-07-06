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
// const average = (socre1, socre2, socre3) => (socre1 + socre2 + socre3) / 3
// const aSocre = average(600, 0, 0);
// const bSocre = average(100, 0, 0);
// const checkWinner = function (aSocre, bSocre) {
//     if (aSocre >= 2 * bSocre) {
//         console.log(`Team a is win ${aSocre} VS ${bSocre}`)
//     } else if (bSocre >= aSocre) {
//         console.log(`Team b is win ${bSocre} VS ${aSocre}`)
//     } else {
//         console.log('there is no team win..')
//     }
// }
// checkWinner(aSocre, bSocre);

// ! 数组
// const friends = ['mzh', 'zsq', 'gxc', 'wjl'];
// const friends2 = new Array(1, 2, 3, 4, 5);
// console.log(friends)
// console.log(friends2)

// console.log(friends[0])
// console.log(friends.length)
// friends[2] = 'mark'
// console.log(friends)
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const years = [2000, 2010, 2009, 1998];
// console.log(calcAge(years))  // ! this is wrong
// const ages = [calcAge(2000), calcAge(2010), calcAge(2009), calcAge(2008)]
// console.log(ages)
// !数组的内置函数
// const friends = ['mzh', 'zsq', 'gxc', 'wjl'];
// // 添加元素
// const newLength = friends.push('make');   // 改变原数组  将新元素添加到数组最后  返回新数组长度
// console.log(friends)
// console.log(newLength)
// friends.unshift('zzz');
// console.log(friends)
// // 删除元素
// const poped = friends.pop(); // 删除最后一个元素  返回已经删除的元素
// console.log(friends)
// console.log(poped)
// friends.shift() // 删除第一个元素
// console.log(friends)
// console.log(friends.indexOf('mzh')) // 得到数组中值为mzh的元素索引
// console.log(friends.indexOf('111')) // 如果数组中不存在 则返回-1

// console.log(friends.includes('zsq')) // 检查数组中是否含有zsq元素  返回true或者false  是一种严格比较

// ! coding challenge
// const bill = [155, 255, 44];
// const clacTips = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const tips = [clacTips(bill[0]), clacTips(bill[1]), clacTips(bill[2])]
// const value = [tips[0] + bill[0], tips[1] + bill[1], tips[2] + bill[2]]
// console.log(bill, tips, value)


// !对象
// const mzhObject = {
//     firstName: 'm',
//     lastName: 'zh',
//     age: 2022 - 1998,
//     job: 'coder',
//     friends: ['zsq', 'wjl', 'gxc']
// }
// console.log(mzhObject)
// console.log(mzhObject.job)
// console.log(mzhObject['lastName'])

// const nameKey = 'Name';
// console.log(mzhObject['first' + nameKey])
// console.log(mzhObject['last' + nameKey])

// const interesdIN = prompt('what do u want to know ?')
// if (mzhObject[interesdIN]) {
//     console.log(mzhObject[interesdIN])
// } else {
//     console.log(interesdIN + ' is  undefined')
// }
// mzhObject.location = 'shanxi';
// mzhObject['email'] = 'm18335784129@163.com'
// console.log(mzhObject)

// !challenge
// console.log(`${mzhObject.firstName + mzhObject.lastName} has ${mzhObject.friends.length} friends ,his bestFriends is ${mzhObject.friends[0]}`)

// const mzhObject = {
//     firstName: 'm',
//     lastName: 'zh',
//     birthYear: 1998,
//     job: 'coder',
//     friends: ['zsq', 'wjl', 'gxc'],
//     hasDriveLicense: false,
//     // clacAge: function (birthTear) {
//     //     return 2022 - birthTear
//     // }
//     // clacAge: function () {
//     //     // this指向调用该函数的人
//     //     console.log(this)
//     //     return 2022 - this.birthYear
//     // }
//     clacAge: function () {
//         this.age = 2022 - this.birthYear
//         return this.age
//     },
//     getSummrey: function () {
//         return `${this.firstName + this.lastName} is ${this.age} years old ,he is a ${this.job},${this.hasDriveLicense ? 'he has driveer license' : 'he dont has driveer license'},his friends is ${this.friends[0]}&${this.friends[1]}&${this.friends[2]}`
//     }
// }
// console.log(mzhObject['clacAge'](this.birthTear));
// mzhObject调用clacAge 所以clacAge中的this指向mzhObject
// console.log(mzhObject.clacAge());
// console.log(mzhObject.age);
// console.log(mzhObject.age);
// console.log(mzhObject.age);
// console.log(mzhObject.getSummrey());

// !code challenge

// const mzh = {
//     fullName: 'ma zhong hao',
//     mass: 76,
//     height: 170,
//     clacBMI: function () {
//         this.BMI = this.height / this.mass * this.mass
//         return this.BMI
//     }
// }
// const zsq = {
//     fullName: 'zhang shi qi',
//     mass: 50,
//     height: 170,
//     clacBMI: function () {
//         this.BMI = this.height / this.mass * this.mass
//         return this.BMI
//     }
// }
// mzh.clacBMI();
// zsq.clacBMI();
// if (mzh.BMI > zsq.BMI) {
//     console.log(1)
// } else {
//     console.log(2)
// }

// !for 循环