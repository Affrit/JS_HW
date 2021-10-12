// ========== 1 ==========
class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static getType() {
        return 'Human'
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }
}

class Programmer extends Human {
    constructor({ name, age }) {
        super(name, age)
        this.job = 'Programmer'
    }

    static getJob() {
        return 'Programmer'
    }
}

class Tester extends Human {
    constructor({ name, age }) {
        super(name, age)
        this.job = 'Tester'
    }

    static getJob() {
        return 'Tester'
    }
}

class ITCompany {
    create({ job, name, age }) {
        if (job === 'Programmer') {
            return new Programmer({ name, age })
        }
        if (job === 'Tester') {
            return new Tester({ name, age })
        }

        throw new Error('Such worker does not exists')
    }
}

const programmerOptions = {
    name: 'Stas',
    age: '26',
    job: 'Programmer',
}

const testerOptions = {
    name: 'Julia',
    age: '21',
    job: 'Tester',
}

const Company = new ITCompany()
const programmer = Company.create(programmerOptions)
const tester = Company.create(testerOptions)

console.log(programmer)
console.log(tester)


// ========== 2 ==========
const obj = {
    a: '1',
    b: '2',
    c: '3',
    e: '4',
    o: '5'
}

const vowelKeys = ['a', 'e', 'o']

for (const key in obj) {
    const isKeyVowel = vowelKeys.some(vowelKey => vowelKey === key)
    if (isKeyVowel) {
        Object.defineProperty(obj, key, {
            writable: false,
          })
    }
}