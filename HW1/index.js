let name = 'Vasya'
const typeCheck = name => {
    return typeof name === 'string' ? `Привет ${name}` : 'Ошибка, не тот тип данных'
}
console.log(typeCheck(name))
name = 123
console.log(typeCheck(name))


console.log(typeof 3) // number
console.log(typeof '3') // string
console.log(typeof true) // boolean
console.log(typeof {count: '3'}) // object
console.log(typeof null) // null (object)
console.log(typeof undefined) // undefined
console.log(typeof 3n) // bigint
console.log(typeof Symbol('3')) // symbol