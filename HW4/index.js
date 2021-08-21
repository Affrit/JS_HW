// ========== 1 ==========
const bindFunc = (func, context, ...rest) => {
    return func.bind(context, ...rest)
}


// ========== 2 ==========
const getSumOfKeys = function() {
    const valuesArr = Object.values(this)
    const sumOfValues = valuesArr.reduce((acc, el) => {
        return el > 0 ? acc + el : acc
    }, 0)

    return sumOfValues
}

const objectA = {
    a: 1,
    b: 2,
    c: 3,
}

const getSumOfObjectA = bindFunc(getSumOfKeys, objectA)
const SumOfObjectA = getSumOfObjectA()
//const SumOfObjectA = getSumOfKeys.call(objectA)
console.log(SumOfObjectA)


// ========== 3 ==========
function getNewArray() {
    if (!this.values) return 'Не найдено'

    const newArray = this.values.filter(el => {
        return (typeof el === 'number') && 
               (el > 2) && (el < 10) &&
               (el % 2 === 0)
    })

    return newArray
}

const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
}

//const getNewArrayOfvalObject0 = bindFunc(getNewArray, valObject0)
//const newArrayOfvalObject0 = getNewArrayOfvalObject0()
const newArrayOfvalObject0 = getNewArray.call(valObject0)
console.log(newArrayOfvalObject0)
