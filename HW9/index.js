// ========== 1 ==========
function getFibNum(n) {
    return n <= 1 ? 1 : getFibNum(n - 1) + getFibNum(n - 2)
}
const fibNum = getFibNum(20)
console.log('recursion fib', fibNum)


function getfibNumByCycle(n) {
    let fib1 = 0
    let fib2 = 1
    let sum = 1

    for (let i = 1; i < n; i++) {
        fib1 = fib2
        fib2 = sum
        sum = fib1 + fib2
    }

    return sum
}

const fibNum2 = getfibNumByCycle(20)
console.log('cycle fib', fibNum2)


// ========== 2 ==========
function getSumOfNumTo(n) {
    return n === 1 ? 1 : n + getSumOfNumTo(n - 1)
}

const sum = getSumOfNumTo(5)
console.log('recursion sum', sum)


function getSumOfNumToByCycle(n) {
    let sum = 0

    for (let i = 1; i <= n; i++) {
        sum += i
    }

    return sum
}

const sumOfNum = getSumOfNumToByCycle(5)
console.log('cycle sum', sumOfNum)


// ========== 3 ==========
function printNumbers(from, to) {
    const func = () => {
        if (from === to) {
            clearInterval(timer)
        }

        console.log(from++)
    }
    const timer = setInterval(func, 1000)

}

printNumbers(1, 5)

function printNumbersByTo(from, to) {
    let timerId = setTimeout(function tick() {
        if (from < to) {
            timerId = setTimeout(tick, 1000)
        }

        console.log('recursion', from++)
    }, 1000)
}

printNumbersByTo(1, 5)


// ========== 4 ==========
function programTimer() {
    let sec = 1
    const tick = () => {
        if (sec === 5) {
            clearInterval(timer)
        }
        console.log(`Прошло: ${sec} сек.`)
        sec++
    }
    const timer = setInterval(tick, 1000)
}

programTimer()


// ========== 5 ==========
const listItems = document.getElementsByClassName('li')
const getSum = document.getElementById('sum')
const input = document.getElementById('inp')

let sumOfItems = 0
let arrOfitemNums = []

for (let item of listItems) {
    let itemValue = +item.innerText
    if (!isNaN(itemValue)) {
        sumOfItems += itemValue
        arrOfitemNums = [...arrOfitemNums, itemValue]
    }
}

const resultStr = `${arrOfitemNums.join(' + ')} = ${sumOfItems}`

const onGetSum = () => {
    input.value = resultStr
}

getSum.addEventListener('click', onGetSum)