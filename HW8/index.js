// ========== 1 ==========
const img = document.getElementById('img')

const p = document.createElement('p')
p.innerText = 'Click here to see img'

document.body.prepend(p)

const onPClicked = () => {
    img.setAttribute('class', 'img')
    p.setAttribute('class', 'invisible')
}

const onImgCliked = () => {
    img.setAttribute('class', 'invisible')
    p.setAttribute('class', 'visible')
}

p.addEventListener('click', onPClicked)
img.addEventListener('click', onImgCliked)

// ========== 2 ==========
const array = [1, 2, 3, 0, 4, 5, 6]

const getSumBeforeZero = arr => {
    let sum = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) break
        sum += arr[i]
    }

    return sum
}

const result = getSumBeforeZero(array)
console.log(result)


// ========== 3 ==========
/*
const getCountOfElem = arr => {
    let countOfElem = 0
    arr.reduce((acc, el) => {
        acc > 10 ? '' : countOfElem += 1
        return acc + el
    }, 0)

    return countOfElem
}
*/

const getCountOfElem = arr => {
    let countOfElem = 0
    let sumOfArr = 0

    for (let num of arr) {
        sumOfArr += num
        countOfElem += 1
        if (sumOfArr > 10) break
    }

    return countOfElem
}

const res = getCountOfElem(array)
console.log(res)


// ========== 4 ==========
const input = document.getElementById('input')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let currentValue = input.value
    console.log(currentValue)
})


// ========== 5 ==========
const links = document.getElementById('links')

const onLinkHovered = ({ target }) => {
    if (target.tagName === 'A' && !target.innerText.includes(target.href)) {
        target.innerText = `${target.innerText} (${target.href})`
    }
}

links.addEventListener('mouseover', onLinkHovered)


// ========== 6 ==========
const button = document.getElementById('button')
const span = document.getElementById('span')

const onButtonClicked = () => {
    span.setAttribute('style', 'display: none')
}

button.addEventListener('click', onButtonClicked)


// ========== 7 ==========
const inputPx = document.getElementById('inputPx')
const startBtn = document.getElementById('startBtn')
const circle = document.getElementById('circle')

const onInput = () => {
    isNaN(+inputPx.value) ? inputPx.value = '' : inputPx.value
}

const onStartBtnClicked = () => {
    if (inputPx.value > 600 || inputPx.value < 0) {
        inputPx.value = 'ERROR'
    } else {
        //const style = document.createElement('style')
        //const styleElem = document.head.appendChild(style)
        //styleElem.innerHTML = `.span:after {left: ${inputPx.value}px;}`
        circle.style.marginLeft = `${inputPx.value}px`
    }
}

startBtn.addEventListener('click', onStartBtnClicked)
inputPx.addEventListener('input', onInput)