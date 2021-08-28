const arr = [
    { name: 'Vlad', age: 1 }, 
    { name: 'Vasya', age: 2 }, 
    { name: 'vasya', age: 5 },
    { name: 'vaSya', age: 5 },
    { name: 'Stas', age: 10 },
    { name: 'stAs', age: 5 },
]

const sumOfAgeForSameNames = arr.reduce((acc, el) => {
    const key = el.name.toLowerCase()
    acc.hasOwnProperty(key) ? acc[key] += el.age : acc[key] = el.age
    return acc
}, {})

for (const key in sumOfAgeForSameNames) {
    const name = key
    const ageSum = sumOfAgeForSameNames[key]
    const result = `for ${name}, ageSum = ${ageSum}`
    console.log(result)
}