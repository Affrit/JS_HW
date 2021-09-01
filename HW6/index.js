// ========== 1 ==========
function Animal(name, age, color) {
    this.name = name
    this.age = age
    this.color = color

    if (!new.target) {
        return new Animal(name, age, color)
    }
}

const rabbit = new Animal('Joe', 5, 'white')
console.log(rabbit)

const withoutNew = Animal('Bob', 3, 'black')
console.log(withoutNew)


// ========== 2 ==========
function Calculator() {
    this.read = function() {
        this.value1 = +prompt('input value1')
        this.value2 = +prompt('input value2')

        if ( isNaN(this.value1) ) alert('invalid value1')
        if ( isNaN(this.value2) ) alert('invalid value2')
    }

    this.setAction = function() {
        this.action = prompt('choose action (+, -, /, *, **, %)')
    }

    this.doAction = function() {
        switch (this.action) {
            case '+':
                return this.sum(this.value1, this.value2)
            
            case '-':
                return this.min(this.value1, this.value2)

            case '*':
                return this.mul(this.value1, this.value2)

            case '/':
                return this.div(this.value1, this.value2)

            case '%':
                return this.remainOfDiv(this.value1, this.value2)

            case '**':
                return this.exp(this.value1, this.value2)

            default:
                return 'invalid action'
        }
    }

    this.sum = function(x, y) {
        return x + y
    }

    this.min = function(x, y) {
        return x - y
    }

    this.mul = function(x, y) {
        return x * y
    }

    this.div = function(x, y) {
        return x / y
    }

    this.remainOfDiv = function(x, y) {
        return x % y
    }

    this.exp = function(x, y) {
        return x ** y
    }
}

const calculator = new Calculator()

calculator.read()
calculator.setAction()
const tres = calculator.doAction()
console.log(tres)

const mul = calculator.mul(5, 5) // also works
console.log(mul) // 25


// ========== 3 ==========
function Nums(...args) {
    this.args = args
}

Nums.prototype.getSum = function() {
    const sum = this.args.reduce((acc, num) => {
        return Number.isInteger(num) ? acc + num : acc
    }, 0)

    return sum
}

Nums.prototype.myFilterReverse = function() {
    const filteredArr = this.args.filter(num => Number.isInteger(num))
    const filteredReversedArr = filteredArr.map((el, idx) => {
        const oppositeEl = filteredArr[filteredArr.length - idx - 1]
        el = oppositeEl
        return el
    })

    return filteredReversedArr
}

const test = new Nums(1, 2, 3, 4.5)
const sum = test.getSum()
console.log(sum)

const newArr = test.myFilterReverse()
console.log(newArr)


// ========== 4 ==========
const array = [1, 1, 2, 2, 3]

Array.prototype.getUnique = function() {
    const unique = new Set(this)
    return Array.from(unique)
}

const newArray = array.getUnique()
console.log(newArray)


// ========== 5 ==========
const obj = {a: 1, b: 2, c: 3, d: false, e: 0}

Object.prototype.getKeySum = function() {
    const keysValuesArr = Object.entries(this)

    const sum = keysValuesArr.reduce((acc, arr) => {
        const [key, value] = arr
        if (!key) return acc
        
        return Number.isInteger(value) ? acc + value : acc
    }, 0)

    return sum
}

Object.prototype.reversKey = function() {
    const keyValueArrs = Object.entries(this)

    const valueKeyArrs = keyValueArrs.map(arr => {
        let [key, value] = arr
        return [key, value] = [value, key]
    })

    const reversedObj = Object.fromEntries(valueKeyArrs)

    return reversedObj
}

const sumOfObj = obj.getKeySum()
console.log(sumOfObj)

const reversedObj = obj.reversKey()
console.log(obj)
console.log(reversedObj)