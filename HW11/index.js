// ========== 1 ==========
document.cookie = "name=Stas"
document.cookie = "age=26"

console.log(document.cookie)

// ========== 2 ==========
const input = document.getElementById('input')
const saveBtn = document.getElementById('saveBtn')
const changeBtn = document.getElementById('changeBtn')
const birthdayBlock = document.getElementById('birthdayBlock')
const timerBlock = document.getElementById('timerBlock')
const daysNode = document.getElementById('days')
const hoursNode = document.getElementById('hours')
const minsNode = document.getElementById('mins')
const secondsNode = document.getElementById('seconds')
let timer = null

const getCookie = (key) => {
    const cookie = document.cookie
    const cookieArr = cookie.split('; ')
    const cookieKeyValue = cookieArr.map(str => str.split('='))

    for (let cookie of cookieKeyValue) {
        const [cookieKey, cookieValue] = cookie
        if (cookieKey === key) {
            return cookieValue
        }
    }

    return null
}

const getTimeToNextBirthday = birthday => {
    const birthdayDate = new Date(birthday)
    const birthdayDay = birthdayDate.getDate()
    const birthdayMonth = birthdayDate.getMonth()
    const currentDate = new Date()
    const currentDateYear = currentDate.getFullYear()

    let nextbirthday = new Date(currentDateYear, birthdayMonth, birthdayDay)
    if (nextbirthday - currentDate < 0) {
        nextbirthday = new Date(currentDateYear + 1, birthdayMonth, birthdayDay)
    }

    const secondsToBirthday = new Date(nextbirthday - currentDate) / 1000

    const days = Math.floor(secondsToBirthday / 3600 / 24)
    const hours = Math.floor(secondsToBirthday / 3600) % 24
    const mins = Math.floor(secondsToBirthday / 60) % 60
    const seconds = Math.floor(secondsToBirthday) % 60

    daysNode.innerText = days
    hoursNode.innerText = hours
    minsNode.innerText = mins
    secondsNode.innerText = seconds
}

const showTimer = () => {
    timer = setInterval(() => {
        getTimeToNextBirthday(birthday)
    }, 1000)

    birthdayBlock.setAttribute('class', 'invisible')
    timerBlock.setAttribute('class', 'visible')
}

const showInput = () => {
    clearInterval(timer)
    birthdayBlock.setAttribute('class', 'visible')
    timerBlock.setAttribute('class', 'invisible')
}

const showContentToggle = (birthday) => {
    if (birthday) {
        showTimer()
    } else {
        showInput()
    }
}

let birthday = getCookie('birthday')
showContentToggle(birthday)

const onSaveBirthday = () => {
    document.cookie = `birthday=${input.value}; max-age=600` // lifetime of cookie is 10 min
    birthday = getCookie('birthday')
    showContentToggle(birthday)
}

const onChangeBirthday = () => {
    showInput()
}

saveBtn.addEventListener('click', onSaveBirthday)
changeBtn.addEventListener('click', onChangeBirthday)


// ========== 3 ==========
const textarea = document.getElementById('textarea')

const textareaValue = localStorage.getItem('textareaValue')
if (textareaValue) {
    textarea.value = textareaValue
}

const onInput = () => {
    localStorage.setItem('textareaValue', textarea.value)
}

textarea.addEventListener('input', onInput)


// ========== 4 ==========
const array = [1, 2, 3, 4, 5]
array.splice(1, 0, 'a', 'b')
array.splice(6, 0, 'c')
array.splice(8, 0, 'e')

console.log(array) // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']