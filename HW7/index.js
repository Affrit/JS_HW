// ========== 1 ==========
const arr = ['Vasya', 'Petya', 'Alexey']

const removeUser = (arr, idx) => {
    return arr.splice(idx, 1)
}

removeUser(arr, 1)
console.log(arr) // ['Vasya', 'Alexey']


// ========== 2 ==========
const sqares = document.getElementsByClassName('squares')[0]

const inner_div = document.createElement('div')
inner_div.className = "squares__square"
sqares.append(inner_div)


// ========== 3 ==========
const holder = document.getElementsByClassName('holder')[0]

for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div')
    div.className = 'item'
    div.innerText = i
    holder.append(div)
}


// ========== 4 ==========
function sampleFunc() {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}

function modificator(func) {
    return function() {
        return func('test', 'sample')
    }
}

const testFunc = modificator( sampleFunc ) 
testFunc() // sampleFunc: test | sample


// ========== 5 ==========
const group = [
  {
    name: 'Stanislav',
    lastName: 'Ostapenko',
    gender: 'male',
  },

  {
    name: 'Stanislav',
    lastName: 'Kuznetsov',
    gender: 'male',
  },

  {
    name: 'Alexander',
    lastName: 'Dubovik',
    gender: 'male',
  },

  {
    name: 'Alexander',
    lastName: 'Plujnik',
    gender: 'male',
  },

  {
    name: 'Anna',
    lastName: 'Babicheva',
    gender: 'female',
  },

  {
    name: 'Darina',
    lastName: 'Koloda',
    gender: 'female',
  },

  {
    name: 'Karina',
    lastName: 'Adamova',
    gender: 'female',
  },

  {
    name: 'Kirill',
    lastName: 'Denisov',
    gender: 'male',
  },

  {
    name: 'Vladislav',
    lastName: 'Martynov',
    gender: 'male',
  },

  {
    name: 'Nikita',
    lastName: 'Podgorniy',
    gender: 'male',
  },

  {
    name: 'Alexander',
    lastName: 'Poltavskiy',
    gender: 'male',
  },
]

function getStudentsList(arrayOfStudents) {
  
    arrayOfStudents.forEach(obj => {
        obj.toString = function() {
            const name = this.name
            const lastName = this.lastName
            const gender = this.gender

            return `name - ${name}, lastName - ${lastName}, gender - ${gender}` 
        }

        const resultStr = String(obj)

        console.log(resultStr)
    })
}

getStudentsList(group)