// ========== 1 ==========
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
}

const getCity = function() {
    const arrays = Object.entries(this)

    const result = arrays.reduce((acc, arr) => {
        const [city, country] = arr
        return [...acc, `${city} - это ${country}`]
    }, [])

    return result
}

const result = getCity.call(citiesAndCountries)
console.log(result)


// ========== 2 ==========
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(lang, datNumber) {
    if (!namesOfDays.hasOwnProperty(lang)) {
        return 'Такого языка нет'
    }
    if (!datNumber || datNumber < 1 || datNumber > 7) {
        return 'Не корректный день недели'
    }

    const nameOfDay = namesOfDays[lang][datNumber - 1]
    return nameOfDay
}

const sunday = getNameOfDay('en', 7)
const sundayOnRu = getNameOfDay('ru', 7)
console.log(sunday, sundayOnRu)


// ========== 3 ==========
const pers = {
    name: 'Vlad'
}

const pers1 = {
    age: 1
}

function setProto(currentObj, protoObj) {
    //currentObj.__proto__ = protoObj
    Object.setPrototypeOf(currentObj, protoObj)
}

setProto(pers1, pers)
console.log(pers1)


// ========== 4 ==========
const person = {
    _ageValidation(age) {
        return age > 18 ? age : 'Validation Error'
    },

    setAge(age) {
        return this.age = this._ageValidation(age)
    },

    getAge() {
        return this.age
    },

    setName(name) {
        return this.name = name
    },

    getName() {
        return this.name
    },
}

const person1 = Object.create(person)

person1.setName('Stas')
console.log( person1.getName() )

person1.setAge(26)
console.log( person1.getAge() )

person1.setAge()
console.log( person1.getAge() )