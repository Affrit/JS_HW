// ========== 1 ==========
const getSquaresSum = inputNum => {
    let squaresSum = 0
    for (let num = 1; num <= inputNum; num++) {
        squaresSum += num ** 2
    }
    return squaresSum
}
let userInputNum = +prompt('Введите число')
isNaN(userInputNum) ? alert('Вы ввели не число!') : console.log(getSquaresSum(userInputNum))


// ========== 2 ==========
const arr = [3, 5, 12, 9, 23, 93, 17]
console.log(arr.reduce((acc, el) => {
    return el > 2 && el < 20 ? acc + el : acc
}, 0))
//console.log(arr.filter(el => el > 2 && el < 20).reduce((acc, el) => acc + el, 0))


// ========== 3 ==========
const array = [[1, 6, 3, '6'], [10, 15, 13, '10']]
console.log(array.reduce((acc, subArrSum) => acc + subArrSum.reduce((acc, el) => {
    return typeof el === 'number' ? acc + el : acc
}, 0), 0))
/*
console.log(array.flat().reduce((acc, el) => {
    return typeof el === 'number' ? acc + el : acc
}, 0))
*/


// ========== 4 ==========
const key = prompt('Введите ключ')
const value = prompt('Введите значение')
const person = {
    name: 'Stas',
    age: 26,
}

const addKey = (key, value, obj) => {
    if (obj.hasOwnProperty(key)) return 'Уже есть'
    //if (key in obj) return 'Уже есть'
    obj[key] = value
    return obj
}
console.log(addKey(key, value, person))
