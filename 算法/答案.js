// !购物车
let base = 10 //题目中最小间隔10
let [sum, num] = readline().split(' ')
sum = sum / base
let list = {}
for (let i = 0; i < num; i++) {
    let [a, b, c] = readline().split(' ').map(Number);
    if (c) { //lines[2]如果上面没有Number转换的话输入的是字符串0，if('0')为true
        list[c] = list[c] || []
        list[c][1] = list[c][1] || []
        list[c][1].push(a / base, a / base * b)
    } else {
        list[i + 1] = list[i + 1] || []
        list[i + 1][0] = [a / base, a / base * b]
    }
}
list = [...Object.values(list)]
buy(list)
function buy(m) {
    let len = m.length
    let dp = Array.from({ length: len }, (e) => new Array(sum + 1).fill(0))
    dp[-1] = new Array(sum + 1).fill(0) //加一行-1用于第一行初始化中的边界i-1的判断
    for (let i = 0; i < len; i++) {
        for (let j = 1; j <= sum; j++) {
            if (j < m[i][0][0]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                //一共只有0，1,2个配件3种情况，手写3种判断，w、v分别代表重量和价值
                let w1, w2, v1, v2
                m[i][1] && (w1 = m[i][1][0], v1 = m[i][1][1], w2 = m[i][1][2], v2 = m[i][1][3])
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - m[i][0][0]] + m[i][0][1])
                //+undefined为NaN，NaN做判断都是false
                j >= m[i][0][0] + w1 && (dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - m[i][0][0] - w1] + m[i][0][1] + v1))
                //此处w2也用dp[i][j](上面w1比较后的结果)作比较，即v1,v2也在此处做了比较了
                j >= m[i][0][0] + w2 && (dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - m[i][0][0] - w2] + m[i][0][1] + v2))
                j >= m[i][0][0] + w1 + w2 && (dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - m[i][0][0] - w1 - w2] + m[i][0][1] + v1 + v2))
            }
        }
    }
    print(dp[len - 1][sum] * base)
}


// !坐标移动
const moveList = readline().split(';');
const position = [0, 0];
moveList.forEach((item) => {
    if (item && /^([ADWS])([\d]+)$/.test(item)) {

        const dir = RegExp.$1;
        const dis = Number(RegExp.$2);
        switch (dir) {
            case 'A':
                position[0] -= dis;
                break;
            case 'S':
                position[1] -= dis;
                break;
            case 'D':
                position[0] += dis;
                break;
            case 'W':
                position[1] += dis;
                break;
            default: break;
        }
    }
});
console.log(position.toString());

// !密码验证合格性
const moveList = readline().split(';');
const position = [0, 0];
moveList.forEach((item) => {
    if (item && /^([ADWS])([\d]+)$/.test(item)) {

        const dir = RegExp.$1;
        const dis = Number(RegExp.$2);
        switch (dir) {
            case 'A':
                position[0] -= dis;
                break;
            case 'S':
                position[1] -= dis;
                break;
            case 'D':
                position[0] += dis;
                break;
            case 'W':
                position[1] += dis;
                break;
            default: break;
        }
    }
});
console.log(position.toString());

// !合唱队
var num;
while (num = parseInt(readline())) {
    const arr = readline().split(' ').slice(0, num).map(n => parseInt(n));
    let dp1 = handle(arr);
    let dp2 = handle(arr.reverse()).reverse();
    let max = 0;
    for (let i = 0; i < dp1.length; i++) {
        max = Math.max(max, dp1[i] + dp2[i] - 1);
    }
    //     console.log(dp1.join(' '))
    //     console.log(dp2.join(' '))
    console.log(arr.length - max);
}

function handle(arr) {
    const dp = [];
    for (let i = 0; i < arr.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return dp;
}

// !字符串排序
while (line = readline()) {
    let res = '';
    let arr = line.split('');
    let sorted = [];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].charCodeAt(0) == 65 + i || arr[j].charCodeAt(0) == 97 + i) {
                sorted.push(arr[j])
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!/[A-Za-z]/g.test(arr[i])) {
            sorted.splice(i, 0, arr[i])
        }
    }
    console.log(sorted.join(''));
}


// !查找兄弟单词
let argArr = readline().split(' ')
let j = 0
let num = argArr[j++] - 0
let arrs = []
let findArr = []
let sum = 0
for (let i = 0; i < num; i++) {
    let line = argArr[j++]
    arrs.push(line)
}
let target = argArr[j++]
let k = argArr[j++]
for (let i = 0; i < num; i++) {
    if ((arrs[i] !== target) && (arrs[i].split('').sort().join('') === target.split('').sort().join(''))) {
        sum++
        findArr.push(arrs[i])
    }
}
findArr = findArr.sort()
console.log(sum)
if (findArr[k - 1]) {
    console.log(findArr[k - 1])
}

// !字符串加解密
let str
while (str = readline()) {
    let encryption = []
    let decryption = []
    let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZA".split("")
    let lowerCase = 'abcdefghijklmnopqrstuvwxyza'.split("")

    //加密
    str.split('').forEach((item, index) => {
        if (upCase.indexOf(item) !== -1) {    //大写
            if (item === 'Z') {
                encryption.push('a')
            } else {
                encryption.push(lowerCase[upCase.indexOf(item) + 1])
            }
        } else if (lowerCase.indexOf(item) !== -1) {   //小写
            if (item === 'z') {
                encryption.push('A')
            } else {
                encryption.push(upCase[lowerCase.indexOf(item) + 1])
            }

        } else if (/[0-9]/.test(item)) {   //数字
            if (item === '9') {
                encryption.push(0)
            } else {
                encryption.push(++item)
            }
        }
    })
    console.log(encryption.join(''))

    //解密
    str = readline()
    str.split('').forEach((item, index) => {
        if (upCase.indexOf(item) !== -1) {
            if (item === 'A') {
                decryption.push('z')
            } else {
                decryption.push(lowerCase[upCase.indexOf(item) - 1])
            }
        }
        if (lowerCase.indexOf(item) !== -1) {
            if (item === 'a') {
                decryption.push('Z')
            } else {
                decryption.push(upCase[lowerCase.indexOf(item) - 1])
            }
        }
        if (/[0-9]/.test(item)) {   //数字
            if (item === '0') {
                decryption.push(9)
            } else {
                decryption.push(--item)
            }
        }
    })
    console.log(decryption.join(''))
}

// !密码截取
let input = readline()
let arr = Array.from(input)
let res = []
for (let i = 0; i < arr.length; i++) {
    let a = d1(i, arr)
    let b = d2(i, arr)
    //     console.log(a,b)
    res[i] = Math.max(a, b)
}
console.log(Math.max(...res))
function d1(index, arr) {
    let l = index - 1
    let r = index + 1
    let count = 1
    while (l >= 0 && r < arr.length) {
        if (arr[l] == arr[r]) {
            count += 2
            l--
            r++
        } else {
            break
        }
    }
    return count
}
function d2(index, arr) {
    let l = index
    let r = index + 1
    let count = 0
    while (l >= 0 && r < arr.length) {
        if (arr[l] == arr[r]) {
            count += 2
            l--
            r++
        } else {
            break
        }
    }
    return count
}

// !整数与IP地址间的转换
let input = readline()
let arr = Array.from(input)
let res = []
for (let i = 0; i < arr.length; i++) {
    let a = d1(i, arr)
    let b = d2(i, arr)
    //     console.log(a,b)
    res[i] = Math.max(a, b)
}
console.log(Math.max(...res))
function d1(index, arr) {
    let l = index - 1
    let r = index + 1
    let count = 1
    while (l >= 0 && r < arr.length) {
        if (arr[l] == arr[r]) {
            count += 2
            l--
            r++
        } else {
            break
        }
    }
    return count
}
function d2(index, arr) {
    let l = index
    let r = index + 1
    let count = 0
    while (l >= 0 && r < arr.length) {
        if (arr[l] == arr[r]) {
            count += 2
            l--
            r++
        } else {
            break
        }
    }
    return count
}


// !字符串加密
var key = readline();
var msg = readline();
var line = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').toLocaleLowerCase();
var set = new Set(key + line);
var list = new Array(...set);
var final = '';
for (var i = 0; i < msg.length; i++) {
    var index = line.indexOf(msg[i]);
    var mi = list[index];
    final += mi[0];
}
console.log(final);

// !小球落地五次后经历的路程和第五次反弹的高度
var initHeight = parseInt(readline())
var sum = initHeight
var height = initHeight / 2
for (let i = 0; i < 4; i++) {
    sum += height * 2
    height /= 2

}
console.log(sum)
console.log(height)


// !称砝码
let n;
while (n = readline()) {
    let weight = readline().split(' ').map(Number);
    let num = readline().split(' ').map(Number);
    let res = { 0: true };
    // 遍历每个不同的重量
    for (let i = 0; i < weight.length; i++) {
        // 得到当前所有的重量数
        let current = Object.keys(res).map(Number);
        // 列举当前重量及其数量的所有可能结果
        for (let j = 1; j <= num[i]; j++) {
            current.forEach(item => {
                let val = item + j * weight[i];
                if (!res[val]) {
                    res[val] = true;
                }
            })

        }
    }

    print(Object.keys(res).length);
}


// !迷宫问题
//此为 DFS 深度搜索，搞了一下午，上网看了视频，还有广度搜素
while (line = readline()) {
    let [n, m] = line.split(' ').map(x => parseInt(x));
    let test = Array(n).fill(0).map(x => Array(m).fill(0)); // 0表示没走过， 1表示已走
    let arr = []; // 0 表示空地，1表示阻挡
    let arrX = [1, 0, -1, 0]; //下一步x对应的右、下、左、上
    let arrY = [0, 1, 0, -1]; //下一步y对应的右、下、左、上
    let target = [];
    for (let i = 0; i < n; i++) {
        arr.push(readline().split(' ').map(x => parseInt(x)));
    }
    dfs(0, 0, [{ x: 0, y: 0 }]);
    for (let item of target) {
        print(`(${item.y},${item.x})`);
    }
    function dfs(x, y, points) {
        points = JSON.parse(JSON.stringify(points)); //必须得深拷贝否则会将所有走过的点都记录
        if (x == m - 1 && y == n - 1) {
            return target = points; //如果有多条路径，此处可以作判断将points最短的赋值给target
        }
        for (let key = 0; key <= 3; key++) {
            let pointX = x + arrX[key];
            let pointY = y + arrY[key];
            if (pointX >= 0 && pointX < m && pointY >= 0 && pointY < n) {
                if (arr[pointY][pointX] == 0 && test[pointY][pointX] == 0) {
                    test[pointY][pointX] = 1;
                    points.push({ x: pointX, y: pointY })
                    dfs(pointX, pointY, points);
                    points.pop(); // 回退
                    test[pointY][pointX] = 0; //还原状态
                }
            }

        }
        return;
    }
}


// !名字的漂亮度
while (n = readline()) {
    for (let i = 0; i < n; i++) {
        let str = readline()
        let map = new Array(26).fill(0);
        let res = 0;
        let arr = str.toLowerCase().split('');
        arr.forEach((ele) => {
            map[ele.charCodeAt(0) - 97]++;
        })
        map.sort((a, b) => b - a);
        for (let i = 0; i < 26; i++) {
            res += map[i] * (26 - i)
        }
        console.log(res);
    }
}
// !从单向链表中删除指定值的节点
let [total, start, ...arr] = readline().split(" ").map(Number);
const rmVal = arr.pop();
let res = [start];
for (let i = 0; i < arr.length; i += 2) {
    const val = arr[i];
    const head = arr[i + 1];
    const index = res.findIndex((val) => val === head);
    res.splice(index + 1, 0, val);
}
print(
    res
        .filter((n) => n !== rmVal)
        .join(" ")
);


// !四则运算
const operatorMap = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 2,
    "%": 2
};

// 中缀表达式转逆波兰表达式
const convert = (inputArr = []) => {
    if (inputArr.length === 0) return [];

    const ops = [];
    const outputs = [];

    const n = inputArr.length;
    for (let i = 0; i < n; i++) {
        const elem = inputArr[i];
        if (/\d/.test(elem)) {
            outputs.push(elem);
            while (i + 1 < inputArr.length && /\d/.test(inputArr[i + 1])) {
                outputs[outputs.length - 1] += inputArr[i + 1];
                i++;
            }
        } else if (elem === "(" || elem === "[" || elem === "{") {
            // 入栈 操作符
            ops.push("(");
            if (inputArr[i + 1] === '-' || inputArr[i + 1] === '+') {
                outputs.push('0')
            }
        } else if (elem === ")" || elem === "]" || elem === "}") {
            while (ops.length) {
                const op = ops.pop();
                if (op === "(") break;
                outputs.push(op);
            }
        } else {
            // 如果是正常运算符
            while (ops.length >= 0) {
                const topOp = ops[ops.length - 1];
                // 如果运算符栈为空，或顶部运算符是 '(' ，亦或当前运算符优先级比栈顶优先级高
                if (
                    ops.length === 0 ||
                    topOp === "(" ||
                    operatorMap[elem] > operatorMap[topOp]
                ) {
                    ops.push(elem);
                    break;
                } else {
                    // 不然，就应该计算当前输出结果
                    outputs.push(ops.pop());
                }
            }
        }
    }
    // 循环结束，如果运算符栈不为空，则添加到输出结果栈
    while (ops.length) {
        outputs.push(ops.pop());
    }
    return outputs;
};

const compute = (left, right, op) => {
    switch (op) {
        case "+":
            return left + right;
        case "-":
            return left - right;
        case "*":
            return left * right;
        case "/":
            return left / right;
        case "^":
            return left ** right;
        default:
            throw Error("bad oprator:" + op);
    }
};

const calc = (strArr = []) => {
    if (!Array.isArray(strArr) || strArr.length === 0) return 0;
    const tempArr = [];

    strArr.forEach((key) => {
        if (/\d/.test(key)) {
            tempArr.push(key);
        } else {
            // 运算符
            const left = ~~tempArr.pop();
            const right = ~~tempArr.pop();
            if (isNaN(left) || isNaN(right)) {
                throw Error(`无效表达式: ${strArr.join(",")}`);
            }
            tempArr.push(compute(right, left, key));
        }
    });
    return ~~tempArr[0];
};
const input = readline();
const strArr = convert([...input])
console.log(calc(strArr))


// !计算字符串的距离
var minDistance = function (word1, word2) {
    let n = word1.length;
    let m = word2.length;
    if (n * m === 0) return n + m;
    if (word1 === word2) return 0;
    let dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push([])
        for (let j = 0; j <= m; j++) {
            if (i * j) {
                dp[i][j] = word1[i - 1] == word2[j - 1] ? dp[i - 1][j - 1] : (Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1);
            } else {
                dp[i][j] = i + j;
            }
        }
    }
    return dp[n][m];
};



while (str1 = readline()) {
    const str2 = readline();
    console.log(minDistance(str1, str2));
}

// !挑7
while (word = readline()) {
    word = parseInt(word, 10);
    let arr = [];
    for (var i = 1; i <= word; i++) {
        ((i + '').includes('7') || !(i % 7)) && arr.push(i);
    }
    console.log(arr.length);
}

// !高精度整数加法
const b = readline().split('');
const a = readline().split('');
let c = 0
let res = '';
while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res;
    c = c > 9 ? 1 : 0;
}
console.log(res)


// !找出字符串中第一个只出现一次的字符

function outputFirstLetter(str) {
    const len = str.length
    for (let i = 0; i < len; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i]
        }
    }
    return -1
}

console.log(outputFirstLetter(readline()))


// !DNA序列
const fun = () => {
    let line
    while (line = readline()) {
        let str = line
        let num = parseInt(readline())
        let count = 0
        let countStr = ""
        for (let i = 0; i < line.length; i++) {
            let thatStr = str.substring(i, i + num)
            let thatNum = 0
            for (let j of thatStr) {
                if (j === "C" || j === "G") {
                    thatNum++
                }
            }
            if (thatNum > count) {
                countStr = thatStr
                count = thatNum
            }
        }
        console.log(countStr)
    }
}
fun()


// !MP3光标位置
let num = parseInt(readline());
let str = readline().split('');
// 声明存储当前列表和选中歌曲的变量
let menu = [];
let se = 1;
// 根据输入的命令分别处理赋值
if (num <= 4) {
    menu = [1, 2, 3, 4].slice(0, num);
    str.forEach(i => {
        if (i === 'U') {
            se === 1 ? se = num : se -= 1;
        } else if (i === "D") {
            se === num ? se = 1 : se += 1;
        }
    })
} else {
    str.forEach(i => {
        if (i === 'U') {
            if (se === 1) {
                se = num;
                menu = [num - 3, num - 2, num - 1, num];
            } else {
                se -= 1;
                se <= menu[0] ? menu = [se, se + 1, se + 2, se + 3] : menu = menu;
            }
        } else if (i === "D") {
            if (se === num) {
                se = 1;
                menu = [1, 2, 3, 4];
            } else {
                se += 1;
                se >= menu[3] ? menu = [se - 3, se - 2, se - 1, se] : menu = menu;
            }
        }
    })
}
console.log(menu.join(' '))
console.log(se)


// !查找两个字符串a,b中的最长公共子串
const line1 = readline();
const line2 = readline();

let short = line1.length >= line2.length ? line2 : line1
let long = line1.length >= line2.length ? line1 : line2

let common = '';
let i = 0; let j = 1;
while (i < short.length && j < short.length + 1) {
    let temp = short.slice(i, j);
    if (long.indexOf(temp) > -1) {
        common = temp.length > common.length ? temp : common;
        j++;
    } else {
        i++;
        j = i + 1;
    }
}

console.log(common)

// !配置文件恢复
let line;
while (line = readline()) {
    let strs = line.split(' ');
    let result;

    if (strs.length === 1) {
        if ('reset'.indexOf(strs[0]) > -1) {
            print('reset what');
        } else {
            print('unknown command');
        }
    }

    if (strs.length === 2) {
        let cmd1 = ['reset', 'board', 'board', 'reboot', 'backplane'];
        let cmd2 = ['board', 'add', 'delete', 'backplane', 'abort'];
        let results = ['board fault', 'where to add', 'no board at all', 'impossible', 'install first']
        let matched = [];

        for (let i = 0; i < cmd1.length; i++) {
            if (cmd1[i].indexOf(strs[0]) > -1) {
                matched.push(i);
            }
        }
        if (matched.length === 0) {
            result = 'unknown command';
        } else if (matched.length > 0) {
            let count = 0;
            for (let num of matched) {
                if (cmd2[num].indexOf(strs[1]) > -1) {
                    result = results[num];
                    count++;
                }
            }
            if (count !== 1) {
                result = 'unknown command';
            }
        }
        print(result);
    }

}

// !24点游戏算法
function calcGame(line) {
    let sign = false;
    const dp = (arr, res) => {
        //剪枝
        if (res > 24) {
            return;
        }
        //满足条件并剪枝
        if (res === 24) {
            sign = true;
            return;
        }
        if (res < 24) {
            for (let i = 0; i < arr.length; i++) {
                //拷贝下数组，原数组需要多次使用，不能修改
                let newArr = arr.slice();
                //下一次是数组是去掉当前数字的数组
                newArr.splice(i, 1);
                if (res === 0) {
                    //初始化的时候
                    dp(newArr, arr[i]);
                } else {
                    //正常+-*/
                    dp(newArr, res * arr[i]);
                    dp(newArr, res + arr[i]);
                    dp(newArr, res - arr[i]);
                    dp(newArr, res / arr[i]);
                }
            }
        }
    };
    dp(line, 0);
    console.log(sign);
}


// !矩阵乘法
while (line = readline()) {
    let x = parseInt(line);
    let y = parseInt(readline());
    let z = parseInt(readline());

    let A = [];
    let B = [];
    let C = Array(x).fill(0).map(x => Array(z).fill(0));

    for (let i = 0; i < x; i++) {
        A.push(readline());
    }
    for (let i = 0; i < y; i++) {
        B.push(readline());
    }
    A = A.map(
        x => x.split(' ').map(
            x => parseInt(x)
        ));
    B = B.map(
        x => x.split(' ').map(
            x => parseInt(x)
        ));;


    for (let i = 0; i < x; i++) {
        for (let j = 0; j < z; j++) {
            for (let k = 0; k < y; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    for (let item of C) {
        print(item.join(' '));
    }
}

// !矩阵乘法计算量估计
const length = parseInt(readline())

const arr = []

for (let i = 0; i < length; i++) {
    const itemArr = readline().split(" ")
    arr.push(itemArr)
}

const str = readline()

const numberArr = []
const todoArr = []

let sum = 0;

function mul(arr1, arr2) {
    const [x, xy] = arr1
    const [yy, z] = arr2
    const currentSum = x * xy * z
    sum += currentSum
    return [x, z]
}

function calc() {
    const right = numberArr.pop()
    const left = numberArr.pop()
    const current = mul(left, right)
    numberArr.push(current)
    todoArr.pop()
}

for (let i = 0, l = str.length; i < l; i++) {
    if (str[i] === "(") {
        todoArr.push("(")
    } else if (str[i] === ")") {
        calc()
    } else {
        numberArr.push(arr.shift())
    }
}

while (todoArr.length) {
    calc()
}

console.log(sum)

// !字符串通配符
while (line1 = readline()) {
    var line2 = readline()
    var regStr = line1.toLowerCase().replace(/\*+/g, '*').replace(/\*/g, '[a-z0-9\.]*').replace(/\?/g, '[a-z0-9\.]')
    var reg = new RegExp('^' + regStr + '$', 'ig')
    print(reg.test(line2))
}


// !参数解析
const arr = str.split(" ");
if (!str.includes('"')) {
    console.log(arr.length);
    arr.forEach((d) => {
        console.log(d);
    });
} else {
    let arr1 = str.split('"');
    arr1.forEach((d, i) => {
        if (i % 2) {
            arr1[i] = d.replace(/\s/g, "A");
        }
    });
    const result = arr1.join("").split(" ");
    console.log(result.length);
    result.forEach((d, i) => {
        console.log(d.replace(/A/g, " "));
    });
}

// !公共子串i算
const line = readline();
const line2 = readline();

let short, long;
if (line.length >= line2.length) {
    short = line2;
    long = line;
} else {
    short = line;
    long = line2;
}

let dp = [];
let max = 0;

for (let i = 0; i < short.length; i++) {
    dp[i] = 0;
    for (let j = 0; j <= i; j++) {
        let str = short.slice(j, i + 1);
        if (long.indexOf(str) > -1) {
            dp[i] = Math.max(str.length, dp[i]);
            max = Math.max(max, dp[i])
        }
    }
}

console.log(max);

// !火车进站
const number = parseInt(readline())
const trains = readline().split(' ')
const paths = []
function sortAll(vals = [], max = 0, inStack = [], outStack = []) {
    //已经全部出站
    if (outStack.length === max) {
        paths.push(outStack.join(" "))
        return
    }
    //     一个都没进站，只能进站
    if (vals.length === max) {
        inStack.push(vals.shift())
        sortAll(vals, max, inStack, outStack)
        return
    }
    //     还有可以进站的，选择进站
    if (vals.length > 0) {
        const cur = vals.shift()
        inStack.push(cur)
        sortAll(vals, max, inStack, outStack)
        inStack.pop()
        vals.unshift(cur)
    }
    //     有可以出战的，选择出战
    if (inStack.length > 0) {
        const cur = inStack.pop()
        outStack.push(cur)
        sortAll(vals, max, inStack, outStack)
        outStack.pop()
        inStack.push(cur)
    }

}

sortAll(trains, number)

paths.sort((l, r) => {
    //     if(l.length<r.length){
    //         return -1
    //     }else if(l.length>r.length){
    //         return 1
    //     }
    let p = 0
    while (p < l.length) {
        if (l[p] < r[p]) {
            return -1
        } else if (l[p] > r[p]) {
            return 1
        }
        p++
    }
})
paths.forEach(item => console.log(item))

// !将真分数分解为埃及分数
let line;

const getCommonConvention = (x, y) => {
    //     求最小公约数 欧里几德算法，辗转相除法
    if (y == 0) {
        return x
    }
    let z = x % y;
    return getCommonConvention(y, z)
}
const getCommonMultiple = (x, y) => {
    //     求最小公倍数
    return (x * y) / getCommonConvention(x, y)
}
const getCalc = (x, y) => {
    //     存放结果集合
    let result = [];
    let increase = 0;
    while (increase != 1) {
        // 分母处以分子判断分子是分母的几分之几。比如8/11。 11/8 大于1 小于2 所以最多占1/2 
        let a = Math.floor(y / x);
        //      获取 2和11的最小倍数22 转变成相同分母
        let commonMultiple = getCommonMultiple(y, a + 1);
        //          将1/2放入第一个集合
        result.push('1/' + String(a + 1))

        //     同等放大然后计算剩下的分子
        increase = (commonMultiple / y * x) - (commonMultiple / (a + 1))
        //       比如 8 / 11 a=1 a+1 = 2. 第一个是1/2 所以最小公倍数是22， （22/11 * 8） - (22/1+1) 就是余数 5。
        //         简单来说就是。8/11 - 1/2 转变成 16/22 - 11/22 剩余5 即是5/22
        //         将问题转变成1/2 + 5/22的埃及分数 我们只需要求5/22的埃及分数
        //     判断剩余的值 和 最小公倍数是不是可以整除 如果整除则代表分子是分母的 1/xx. 
        //         如果不能整除则继续寻找 5/22的埃及分数
        if (y % x == 0) {
            y = commonMultiple / increase
            x = 1
        } else {
            x = increase
            y = commonMultiple
        }

        if (increase == 1) {
            result.push('1/' + String(commonMultiple))
        }
    };
    return result
}
while (line = readline()) {
    let str = line;
    let numArr = str.split('/')
    let x = parseInt(numArr[0])
    let y = parseInt(numArr[1])
    let result = getCalc(x, y)
    console.log(result.join('+'));

}

// !合法IP

while (str = readline()) {
    let strArr = str.split('.')
    let res = 'YES';
    //ipv4 不能大于255不能小于0；
    //多个字符不能以0开头，只有一个字符可以是0
    //每个字符不能是除0~9以外的字符
    if (strArr.length !== 4) { res = 'NO' } else {
        for (let i = 0; i < strArr.length; i++) {
            let el = strArr[i]
            if (!el || Number(el) > 255 || Number(el) < 0) {
                //每一项不能小于0或大于255
                res = 'NO'
                break;
            } else {
                //遍历每一个字符
                for (let s = 0; s < el.length; s++) {
                    let f = el.charCodeAt(s);
                    //多个数字，以0开头不行
                    if ((s == 0 && el[s] == 0 && el.length > 1) || f < 48 || f > 57) {
                        res = 'NO'
                        break
                    }
                }
            }
        }
    }

    console.log(res)
}

// !在字符串中找出连续最长的数字串
while (line = readline()) {
    deal(line);
}

function deal(s) {
    var arr = s.match(/[0-9]+/g);
    var len = [];
    arr.forEach(item => {
        len.push(item.length);
    })
    var maxLen = Math.max(...len);
    var res = '';
    arr.forEach(item => {
        if (item.length == maxLen) {
            res += item;
        }
    })
    console.log(res + ',' + maxLen);
}

// !redraiment的走法
readline()
const arr = readline().split(' ').map(item => parseInt(item))
const res = []
arr.forEach((item, idx) => {
    let maxStep = 0
    for (let i = 0; i < idx; i++) {
        if (arr[i] < item && res[i] > maxStep) { maxStep = res[i] }
    }
    res.push(maxStep + 1)
})
print(Math.max(...res))

// !求解立方根
let num = readline();
function fn(res) {
    return res < 0 ? Math.cbrt(res).toFixed(1) : Math.pow(res, 1 / 3).toFixed(1)
}
console.log(fn(num))


// !明明的随机数
let n = parseInt(readline());
let arr = [...Array(n)].map(() => readline());
Array.from(new Set(arr)).sort((a, b) => a - b).map((e) => console.log(e));


// !识别有效的IP地址和掩码并进行分类统计
function readline(i) {//用node模拟ACM风格代码
    let strs = [
        '221.249.44.138~255.255.241.0',
        '204.20.192.203~255.0.0.0',
        '38.98.249.11~255.174.255.255'
    ];
    return strs[i];
}
function validMask(str) {//模拟二进制按位取反和按位与操作
    if (str === '0.0.0.0' || str === '255.255.255.255') return false;//判断是否为全0或者全1
    str = str.split('.').map(it => (+it).toString(2).padStart(8, 0)).join('');//转换为二进制，不足8位的左侧补0
    str = str.split('');
    let m = str.map(it => it ^ '1').join('');//按位取反
    m = (parseInt(m, 2) + 1).toString(2).padStart(32, 0);//转换成10进制＋1之后转换为2进制，补齐成32位
    m = m.split('').map((it, i) => it | str[i]).join('');//按位或，如果和原二进制字符串相同则合法，否则不合法
    return m === str.join('');
}

let i = 0;
let line;
let result = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'err': 0,
    'pIp': 0,
}
while (line = readline(i)) {
    line = line.split('~');
    let ip = line[0].split('.');//获取IP字符串
    let illegal = ip.some(it => !it);//判断IP字符串中是否含有空字段
    ip = ip.map(it => +it);
    let mask = line[1];//获取子网掩码字符串
    if (ip[0] === 0 || ip[0] === 127) {//根据测试用例来看应该先进行此判断
        i++;
        continue;
    }
    if (!validMask(mask)) {//子网掩码非法
        result['err']++;
        i++;
        continue;
    }
    if (illegal) {//存在空字段，非法
        console.log('ill')
        result['err']++;
    } else {
        if (ip[0] >= 1 && ip[0] <= 126) {//a类
            if (ip[0] === 10) {
                result['pIp']++;//进行私有网络判断，与a类不冲突
            }
            result['a']++;
        } else if (ip[0] >= 128 && ip[0] <= 191) {
            if (ip[0] == 172 && ip[1] >= 16 && ip[1] <= 31) {
                result['pIp']++;//进行私有网络判断，与a类不冲突
            }
            result['b']++;
        } else if (ip[0] >= 192 && ip[0] <= 223) {
            if (ip[0] === 192 && ip[1] === 168) {
                result['pIp']++;//进行私有网络判断，与a类不冲突
            }
            result['c']++;
        } else if (ip[0] >= 224 && ip[0] <= 239) {
            result['d']++;
        } else if (ip[0] >= 240 && ip[0] <= 255) {
            result['e']++;
        }
    }
    i++;
}
console.log(Object.values(result).join(' '));

// !简单错误记录
let obj = {}
let str;
while (str = readline()) {
    const [c, n] = str.split(" ");
    const s = c.substr(c.lastIndexOf('\\') + 1).substr(-16)
    obj[`${s} ${n}`] = (obj[`${s} ${n}`] || 0) + 1
}

Object.keys(obj).slice(-8).forEach(el => {
    print(`${el} ${obj[el]}`)
})

// !数据分类处理
while (str = readline()) {  //当能读取输入的时候进入循环
    let IArr = str.split(' ');  //拆分得到I序列
    let RArr = readline().split(' ');  //拆分得到R序列
    IArr.shift(); //删除数组第一位，下同
    RArr.shift();
    RArr = [...new Set(RArr.sort((a, b) => a - b))];  //利用Set去重，同时排序，重新赋值给RArr
    let log = [];  //定义输出数组
    RArr.forEach(item => {  //对R序列的每一项
        let itemArr = []  //定义临时数组
        for (let i = 0; i < IArr.length; i++) {
            if (IArr[i].includes(item)) {  //查找包含R单项的I序列项
                itemArr.push(i, IArr[i]);  //若找到，在临时数组中保存下标和I序列单项
            }
        }
        if (itemArr.length !== 0) {  //如果临时数组长度大于0
            log.push(item, itemArr.length / 2, ...itemArr);  //输出数组中加入R单项，I序列中符合条件的个数，并把保存的临沭数组扩展进来
        }
    })
    log.unshift(log.length)  //统计输出数组的长度，并将该数字添加到输出数组的第一位
    console.log(log.join(' '))
}

//!字符串合并处理
let oddListIndex = [];
let evenListIndex = [];
let sortFn = (a, b) => {
    return a.charCodeAt() - b.charCodeAt()
}
let oddList = str
    .filter((item, index) => {
        if (index % 2 !== 0) {
            oddListIndex.push(index);
        }
        return index % 2 !== 0;
    })
    .sort(sortFn);
let evenList = str
    .filter((item, index) => {
        if (index % 2 == 0) {
            evenListIndex.push(index);
        }
        return index % 2 == 0;
    })
    .sort(sortFn);
while (oddList.length) {
    let index = oddListIndex.shift();
    let st = oddList.shift();
    str[index] = st;
}
while (evenList.length) {
    let index = evenListIndex.shift();
    let st = evenList.shift();
    str[index] = st;
}
let newStr = str.map((item, index, arr) => {
    let judge1 = item.charCodeAt() >= 65 && item.charCodeAt() <= 70;
    let judge2 = item.charCodeAt() >= 97 && item.charCodeAt() <= 102;
    let judge3 = item.charCodeAt() >= 48 && item.charCodeAt() <= 57;

    if (judge1 || judge2 || judge3) {
        let dec = parseInt(item, 16);
        let bin = parseInt(('0000' + dec.toString(2)).substr(-4).split("").reverse().join(""), 2)
            .toString(16)
            .toUpperCase();
        return bin;
    } else {
        return item
    }
});
console.log(newStr.join(""));

// !判断两个IP是不是属于同一子网
while ((line = readline())) {
    let [a, b, c] = [line, readline(), readline()];
    if (isIp(a) & isIp(b) & isIp(c)) {
        let yArr = toPad(a);
        if (isIpMask(yArr)) {
            let p1Arr = toPad(b);
            let p2Arr = toPad(c);
            if (getAnd(p1Arr, yArr) == getAnd(p2Arr, yArr)) {
                print(0);
            } else {
                print(2);
            }
        } else {
            print(1);
        }
    } else {
        print(1);
    }
}
function toPad(ip) {
    return ip.split(".").map((el) => Number(el).toString(2).padStart(8, "0"));
}
function isIp(ip) {
    let ipArr = ip.split(".");
    let isOk = true;
    ipArr.forEach((el) => {
        if (Number(el) > 255) {
            isOk = false;
        }
    });
    return isOk && /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(ip);
}
function isIpMask(ipm) {
    return !ipm.join("").includes("01");
}
function getAnd(p1, p2) {
    let i = 0;
    let pArr = "";
    let tmp = [];
    while (i < 4) {
        let a1 = p1[i].split("");
        let a2 = p2[i].split("");
        let j = 0;
        while (j < 8) {
            if (a1[j] == 0 || a2[j] == 0) {
                tmp.push(0);
            } else {
                tmp.push(1);
            }
            j++;
        }
        pArr += tmp.join("");
        i++;
    }
    return pArr;
}


// !学英语
const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const tens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'forteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
]
const twieties = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const range = [1e2, 1e3, 1e6, 1e9, 1e12]
const ranges = ['hundred', 'thousand', 'million', 'billion']

function transfer(num) {
    // terminor
    if (num <= 9) return ones[num]
    if (num <= 19) return tens[num % 10]
    if (num <= 99) return twieties[Math.floor(num / 10)] + (num % 10 == 0 ? '' : ' ' + ones[num % 10])

    // 递归调用
    for (let i = 0; i < 4; i++) {
        if (num < range[i + 1]) {
            return (
                transfer(Math.floor(num / range[i])) +
                ' ' +
                ranges[i] +
                (num % range[i] == 0 ? ' ' : (i != 0 ? ' ' : ' and ') + transfer(num % range[i]))
            )
        }
    }
    return ''
}

// const num = Number('2222222') // two million two hundred and twenty two thousand two hundred and twenty two
const num = Number(readline())
console.log(transfer(num))

// 成绩排序
let n;
while (n = parseInt(readline())) {
    let flag = parseInt(readline());
    let score = [];
    for (let i = 0; i < n; i++) {
        let item = readline().trim().split(' ');
        score.push({
            name: item[0],
            point: Number(item[1]),
            index: i
        });
    }
    // 排序
    score.sort((a, b) => {
        if (a.point === b.point) {
            return a.index - b.index;
        } else if (flag === 0) {
            return b.point - a.point;
        } else if (flag === 1) {
            return a.point - b.point;
        }
    });
    for (let i = 0; i < n; i++) {
        const item = JSON.parse(JSON.stringify(score[i]));
        print(item.name + ' ' + item.point);
    }
}
let n;
while (n = parseInt(readline())) {
    let flag = parseInt(readline());
    let score = [];
    for (let i = 0; i < n; i++) {
        let item = readline().trim().split(' ');
        score.push({
            name: item[0],
            point: Number(item[1]),
            index: i
        });
    }
    // 排序
    score.sort((a, b) => {
        if (a.point === b.point) {
            return a.index - b.index;
        } else if (flag === 0) {
            return b.point - a.point;
        } else if (flag === 1) {
            return a.point - b.point;
        }
    });
    for (let i = 0; i < n; i++) {
        const item = JSON.parse(JSON.stringify(score[i]));
        print(item.name + ' ' + item.point);
    }
}

// !扑克牌大小
let input = readline()
let data = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', 'joker', 'JOKER']
let [l, r] = input.split('-')
let left = l.split(' ')
let right = r.split(' ')
// 判断王炸
if (l == 'joker JOKER' || r == 'joker JOKER') {
    console.log('joker JOKER')
} else {
    if (left.length == right.length) {
        //         console.log(data.indexOf(left[0]),left[0])
        //         console.log(data.indexOf(right[0]),right[0])
        if (data.indexOf(left[0]) > data.indexOf(right[0])) {
            console.log(l)
        } else {
            console.log(r)
        }
    } else {
        if (left.length == 4) {
            console.log(l)
        } else if (right.length == 4) {
            console.log(r)
        } else {
            console.log('ERROR')
        }
    }
}

// !24点运算
const d = { 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 1, 2: 2 }
const res = []
function f(nums, target) {
    if (nums.length == 1) {
        if (d[nums[0]] == target) {
            res.push(nums[0])
            return true
        } else {
            return false
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i]
        const b = nums.slice(0, i).concat(nums.slice(i + 1))
        if (f(b, target + d[a])) {
            res.push('-' + a)
            return true
        } else if (f(b, target - d[a])) {
            res.push('+' + a)
            return true
        } else if (f(b, target * d[a])) {
            res.push('/' + a)
            return true
        } else if (target % d[a] === 0 && f(b, target / d[a])) {
            res.push('*' + a)
            return true
        }
    }
    return false
}
function get24(str) {
    var nums = str.split(' ')
    if (nums.includes('joker') || nums.includes('JOKER')) {
        console.log('ERROR')
    } else {
        if (f(nums, 24)) {
            console.log(res.join(''))
        } else {
            console.log('NONE')
        }
    }
}
get24(readline())

// !数组分组
let line;
let arr = []
function getRes(arr) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0 && arr[i] % 5 != 0) {
            arr1.push(arr[i])
        } else if (arr[i] % 3 != 0 && arr[i] % 5 == 0) {
            arr2.push(arr[i])
        } else {
            arr3.push(arr[i])
        }
    }
    let num1 = getSum(arr1);
    let num2 = getSum(arr2);
    let summeries = num1 - num2;
    let flag = getCalc(arr3, summeries)
    return flag
}

function getCalc(arr, summeries) {

    let flag = false


    if (summeries == 0 && arr.length == 0) {
        //      分完了 两边值的差值一样则代表可以分为两组
        flag = true
        return flag
    } else if (arr.length == 0 && summeries != 0) {
        //         分完了但是值不想等 或者是值相等还有剩的
        return flag
    } else {
        arr.push(summeries)
        arr = arr.map(i => Math.abs(i));
        arr = arr.sort((a, b) => a - b);
        summeries = arr[arr.length - 1]
        arr.splice(arr.length - 1, 1);
        //         将数据进行遍历取绝对值，因为是两边放左边和放右边是一样，但是值要取反，
        //         举个例子1 -5 -1 -3 2 -4    将-5放左边和放右边进行运算 和+5放左边进行运算结果是一样的 运算指（+-）
        //         题目中虽然给了负数但是我们把它当做正整数处理就很好处理了
        //         将数据进行排序然后取 最大的两个进行相减然后结果进行递归处理
        //         第一次的结果放入第二次运算中进行排序相减 当全部处理完这个值如果不是0，则代表分不完
        let numDescrease = arr[arr.length - 1];
        arr.splice(arr.length - 1, 1);
        let current = summeries - numDescrease
        flag = getCalc(arr, current)
    }
    return flag
}

function getSum(arr) {
    let num = 0
    if (arr.length == 0) {
        return num
    }
    for (let i of arr) {
        num += parseInt(i)
    }
    return num
}

while (line = readline()) {
    arr.push(line);
    if (arr.length == 2) {
        let arr1 = arr[1].trim().split(' ').map((i) => parseInt(i));
        let res = getRes(arr1);
        arr = []
        console.log(res)
    }

}

// !人民币转换
let line;

function getFirst(num) {
    let length = Math.ceil(num.length / 4);
    let first = num.length % 4 == 0 ? 4 : num.length % 4
    let explain = '';
    let hasAdd = false
    let canAdd = hasZero(num)

    for (let i = 0; i < length; i++) {
        hasAdd = explain.indexOf('零') > -1
        let cur = num.substring(first + (i - 1) * 4, first + (i) * 4);

        let str = getChina(cur, length - i, canAdd, hasAdd);
        explain += str
    }
    return explain
}
function getNext(num) {
    let explain = '';
    let chinaArr = '壹,贰,叁,肆,伍,陆,柒,捌,玖'.split(',');
    if (Number(num) == 0) {
        explain += '整'
    } else {
        let arr = num.split('');
        let index = 0
        for (let i of arr) {
            if (i != '0' && index == 0) {
                explain += chinaArr[(Number(i) - 1)] + '角'
            } else if (i != '0' && index == 1) {
                explain += chinaArr[(Number(i) - 1)] + '分'
            }
            index++
        }
    }
    return explain
}
function hasZero(num) {
    let flag = false
    if (num.length == 1) {
        flag = false
    } else {
        flag = num.includes('0')
    }
    return flag
}
function getChina(num, stage, canAdd, hasAdd) {
    let chinaArr = '壹,贰,叁,肆,伍,陆,柒,捌,玖'.split(',');
    let arr = num.split('');
    let str = ''
    let step = arr.length
    for (let i of arr) {
        if (i != '0') {
            if (step == 4) {
                str += chinaArr[(Number(i) - 1)] + '仟'
            } else if (step == 3) {
                str += chinaArr[(Number(i) - 1)] + '佰'
            } else if (step == 2) {
                if ((Number(i) - 1) != 0) {
                    str += chinaArr[(Number(i) - 1)] + '拾'
                } else {
                    str += '拾'
                }

            } else if (step == 1) {
                str += chinaArr[(Number(i) - 1)]
            }
        } else {
            if (canAdd && !hasAdd) {
                str += '零'
                hasAdd = true
            }
        }
        step--
    }
    if (stage % 3 == 0) {
        str += '亿'
    } else if (stage % 3 == 2) {
        str += '万'
    }
    //     console.log(str)
    str = str.replace('零万', '万零')
    return str
}

while (line = readline()) {
    let numArr = line.split('.');
    //     两位但是后面的不是零      
    let fisrt = getFirst(numArr[0]);
    let next = getNext(numArr[1]);
    let hasYuan = numArr[0].length > 1 || numArr[0].length == 1 && Number(numArr[0]) != 0
    console.log(`人民币${fisrt}${hasYuan ? '元' : ''}${next}`)
}

// !素数伴侣


function isPrime(num) {
    if (!num) return false
    let loopMax = Math.sqrt(num);
    if (Number(num) <= 1) return false
    if (num <= 3) return num >= 2
    for (let i = 2; i <= loopMax; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

function getRes(arr1, arr2) {
    //     arr1 是偶数集合  arr2奇数集合
    let count = 0;
    let evensMatch = new Array(arr2.length).fill(0)
    for (let i = 0; i < arr1.length; i++) {
        let used = new Array(arr2.length).fill(0)
        if (find(used, arr2, arr1[i], evensMatch)) {
            count++
        }
    }
    console.log(count)
}

function find(used, evens, num, evensMatch) {
    for (let i = 0; i < evens.length; i++) {
        if (isPrime(num + evens[i]) && used[i] == 0) {
            //            偶数和奇数可以组成素数并且该奇数没有被使用
            used[i] = 1;
            //             标记为已使用
            if (evensMatch[i] == 0 || find(used, evens, evensMatch[i], evensMatch)) {
                //                 将匹配偶数保存至evensMatch
                //                 如果该偶数还可以与其他的奇数形成质数，则将新的偶数保存到evensMatch原来的舍弃
                //                 就是将现在的偶数 + 奇数形成的质数为最新的结果保存至evensMatch 、
                evensMatch[i] = num;
                return true
            }
        }
    }
    return false
}

let line
let arr = []
while (line = readline()) {
    arr.push(line);
    if (arr.length == 2) {
        let numberArr = arr[1].split(' ').map(i => parseInt(i));
        let arr1 = numberArr.filter(i => i % 2 == 0);
        let arr2 = numberArr.filter(i => i % 2 != 0);
        let res = getRes(arr1, arr2)
        arr = []
    }
}


// !sudoku
let arr = [];
while ((line = readline())) {
    arr.push(line.split(" ").map(Number));
}
let ans = run(arr);
for (let i = 0; i < 9; i++) {
    console.log(ans[i].join(" "));
}
function run(arr) {
    //创建数据备份，进行深度递归
    let tempArr = new Array(arr.length)
        .fill(0)
        .map((v) => new Array(arr.length).fill(0));
    //引用数据类型的深拷贝，防止对母数据的修改
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            tempArr[i][j] = arr[i][j];
        }
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (tempArr[i][j] == 0) {
                //检查当前位置可用于替换的元素数组
                let temp = check(tempArr, i, j);
                if (temp.length == 0) {
                    return;
                } else {
                    while (temp.length) {
                        //这里可以改成pop（）：依据出栈顺序，能通过的案例也有所变化
                        tempArr[i][j] = temp.shift();
                        if (i == 8 && j == 8) {
                            return tempArr;
                        }
                        //递归新数组，最后一层有结果则返回
                        let res = run(tempArr);
                        if (res) {
                            //可以看成是出口的上一层，最终返回结果的链式传递
                            return res;
                        }
                    }
                    //while遍历结束都没有找到合适的替换元素，则退出当前函数
                    return;
                }
            }
        }
    }
    //递归出口
    return tempArr;
}
function check(arr, x, y) {
    let temp = [];
    let a = Math.floor(x / 3) * 3;
    let b = Math.floor(y / 3) * 3;
    //检查九宫格
    for (let i = a; i < a + 2; i++) {
        for (let j = b; j < b + 2; j++) {
            if (arr[(i, j)] != 0) {
                temp.push(arr[i][j]);
            }
        }
    }
    //检查同一行和同一列
    for (let i = 0; i <= 8; i++) {
        if (arr[x][i] != 0) {
            temp.push(arr[x][i]);
        }
        if (arr[i][y] != 0) {
            temp.push(arr[i][y]);
        }
    }
    //手动去重
    temp.filter((item, index, array) => {
        return index == array.indexOf(item);
    });
    let res = [];
    for (let i = 1; i <= 9; i++) {
        if (!temp.includes(i)) {
            res.push(i);
        }
    }
    return res;
}

// !自动售货系统
const indexToTypes = {
    0: 'A1',
    1: 'A2',
    2: 'A3',
    3: 'A4',
    4: 'A5',
    5: 'A6'
}
const indexToChangeTypes = {
    0: '1',
    1: '2',
    2: '5',
    3: '10'
}
const prices = {
    'A1': 2,
    'A2': 3,
    'A3': 4,
    'A4': 5,
    'A5': 8,
    'A6': 6
}
while (line = readline()) {
    const str = line.split(';');
    let balance = 0;
    const goods = {};
    const changes = {};
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const temp = str[i].split(' ');
        // 初始化命令获得商品和存钱数
        if (temp[0] == 'r') {
            let cgs = temp[1].split('-');
            let ccs = temp[2].split('-');
            for (let j = 0; j < cgs.length; j++) {
                const num = parseInt(cgs[j]);
                count += num
                goods[indexToTypes[j]] = num
            }
            for (let j = 0; j < ccs.length; j++) {
                changes[indexToChangeTypes[j]] = parseInt(ccs[j])
            }
            print('S001:Initialization is successful')
        } else if (temp[0] == 'c') {
            // 针对balance 进行货币计算
            if (balance == 0) {
                print("E009:Work failure")
            } else {
                // 退币原则
                const res = [];

                for (let j = 3; j >= 0; j--) {
                    const p = parseInt(indexToChangeTypes[j]);
                    // 需要p面额的多少张
                    const count = Math.floor(balance / p);
                    //print(count, changes[p])
                    if (count >= changes[p]) {
                        balance -= p * parseInt(changes[p]);
                        res.push(changes[p]);

                    } else {
                        res.push(count);
                        balance -= p * count;
                    }
                }
                for (let j = 3; j >= 0; j--) {
                    print(`${indexToChangeTypes[3 - j]} yuan coin number=${res[j]}`)
                }

            }
        } else if (temp[0] == 'b') {
            // 开始购物
            if (prices[temp[1]]) {
                const price = prices[temp[1]];
                if (goods[temp[1]] == 0) {
                    print("E007:The goods sold out")
                } else if (balance >= price) {
                    balance -= price
                    print('S003:Buy success,balance=' + balance)
                } else {
                    print('E008:Lack of balance')
                }
            } else {
                print("E006:Goods does not exist")
            }

        } else if (temp[0] == 'p') {
            // p 钱币面额  进行投币  如果货物为空，禁止投币
            const money = parseInt(temp[1])
            if (money != 1 && money != 2 && money != 5 && money != 10) {
                print("E002:Denomination error")
            } else if (count === 0) {
                print("E005:All the goods sold out")
            } else if (money <= 2) {
                balance += parseInt(temp[1])
                const key = Object.keys(changes).filter(o => changes[o] == money)[0]
                changes[key] += 1
                print("S002:Pay success,balance=" + balance)
            } else if (parseInt(changes[1]) + 2 * parseInt(changes[2]) < parseInt(temp[1])) {
                print("E003:Change is not enough, pay fail")
            } else {
                balance += parseInt(temp[1])
                const key = Object.keys(changes).filter(o => changes[o] == money)[0]
                changes[key] += 1
                print("S002:Pay success,balance=" + balance)
            }
        } else if (str[i][0] == 'q') {
            if (temp[1] == '0') {
                Object.keys(goods).map(o => ({
                    name: o,
                    count: goods[o],
                    price: prices[o]
                })).sort((a, b) => a.count == b.count ? b.name - a.name : b.count - a.count).forEach(k => print(`${k.name} ${k.price} ${k.count}`))
            } else if (temp[1] == '1') {
                Object.keys(changes).forEach(k => print(`${k} yuan coin number=${changes[k]}`))
            } else {
                print("E010:Parameter error")
            }
        }
    }

}




