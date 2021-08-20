// ===== HW1 =====
const arr = ['Капуста', 'Репа', 'Редиска', 'Морковка']
console.log(arr.join(' | '))


// ===== HW2 =====
const str = 'Вася;Петя;Вова;Олег'
const newArr = str.split(';')
console.log(newArr)


// ===== HW3 =====
const hello2 = name => {
    return !name ? 'Привет, гость' : `Привет, ${name}`
}

console.log(hello2())
console.log(hello2('Василий'))


// ===== HW4 =====
const fruits = ['яблоко', 'ананас', 'груша']
const fruitsInUpperCase = fruits.map(str => str.toUpperCase())
console.log(fruitsInUpperCase)


// ===== HW5 =====
const addOneForAll = (...args) => {
    return args.map(arg => arg += 1)
}

const val = addOneForAll(1, 2, 3, 4)
console.log(val)


// ===== HW6 =====
const getSum = (...args) => {
    return args.reduce((acc, arg) => acc + arg, 0)
}

const value = getSum(1, 2, 3, 4)
console.log(value)


// ===== HW7 =====
const aray = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const numberArray = aray.filter(el => typeof el === 'number')
console.log(numberArray)


// ===== HW8 =====
const arrayTesting = arr => {
    return arr.some(el => el) ? 'Нашли true значение' : 'Ничего нет'
}

const haveTrueValue = arrayTesting([0, false, null, 1])
const dontHaveTrueValue = arrayTesting([0, false, null, 0])
console.log(haveTrueValue)
console.log(dontHaveTrueValue)
