// ========== 1 ==========
function getFibNum(n) {
    return n <= 1 ? 1 : getFibNum(n - 1) + getFibNum(n - 2)
}
const fibNum = getFibNum(20)
console.log('recursion fib', fibNum)


function getfibNumByCycle(n) {
    let fib1 = 0
    let fib2 = 1
    let sum = 1

    for (let i = 1; i < n; i++) {
        fib1 = fib2
        fib2 = sum
        sum = fib1 + fib2
    }

    return sum
}

const fibNum2 = getfibNumByCycle(20)
console.log('cycle fib', fibNum2)


// ========== 2 ==========
function getSumOfNumTo(n) {
    return n === 1 ? 1 : n + getSumOfNumTo(n - 1)
}

const sum = getSumOfNumTo(5)
console.log('recursion sum', sum)


function getSumOfNumToByCycle(n) {
    let sum = 0

    for (let i = 1; i <= n; i++) {
        sum += i
    }

    return sum
}

const sumOfNum = getSumOfNumToByCycle(5)
console.log('cycle sum', sumOfNum)


// ========== 3 ==========
function printNumbers(from, to) {
    const func = () => {
        if (from === to) {
            clearInterval(timer)
        }

        console.log(from++)
    }
    const timer = setInterval(func, 1000)

}

printNumbers(1, 5)

function printNumbersByTo(from, to) {
    let timerId = setTimeout(function tick() {
        if (from < to) {
            timerId = setTimeout(tick, 1000)
        }

        console.log('recursion', from++)
    }, 1000)
}

printNumbersByTo(1, 5)


// ========== 4 ==========
function programTimer() {
    let sec = 1
    const tick = () => {
        if (sec === 5) {
            clearInterval(timer)
        }
        console.log(`Прошло: ${sec} сек.`)
        sec++
    }
    const timer = setInterval(tick, 1000)
}

programTimer()


// ========== 5 ==========
const listItems = document.getElementsByClassName('li')
const getSum = document.getElementById('sum')
const input = document.getElementById('inp')

let sumOfItems = 0
let arrOfitemNums = []

for (let item of listItems) {
    let itemValue = +item.innerText
    if (!isNaN(itemValue)) {
        sumOfItems += itemValue
        arrOfitemNums = [...arrOfitemNums, itemValue]
    }
}

const resultStr = `${arrOfitemNums.join(' + ')} = ${sumOfItems}`

const onGetSum = () => {
    input.value = resultStr
}

getSum.addEventListener('click', onGetSum)


// ========== 6 ==========
/*
    There are 2 players, in the first round the first player starts the game as X and goes first,
    the second player plays as 0 and goes second. In the second round, 
    players change places and the second player plays for X and goes first.
    And so on with each round they change places.
*/

const gameWrap = document.getElementById('gameWrap')
const sqares = document.getElementsByClassName('sqare')
const gameField = document.getElementById('gameField')
const restartBtn = document.getElementById('restartBtn')
const round = document.getElementById('round')
const score = document.getElementById('score')

let roundNum = 1 // current game round
let move = 0 // current game move (up to 9)
let firstPlayerPts = 0
let secondPlayerPts = 0
let turn = true // if true - 'X' player's turn, false - '0'
let firstPlayerId = 1
let secondPlayerId = 0

const fieldState = { // sqareID = true when it free, 0 - was occupied by the player 'O', 1 - was occupied by the player 'X'
    sqare1: true,
    sqare2: true,
    sqare3: true,
    sqare4: true,
    sqare5: true,
    sqare6: true,
    sqare7: true,
    sqare8: true,
    sqare9: true,
}

const updateInfo = () => {
    round.innerText = `Раунд ${roundNum}`
    score.innerText = `Игрок1 ${firstPlayerPts} - ${secondPlayerPts} Игрок2`
}

const clearField = () => { // clears the playing field, and resets the values ​​in the playing field state object
    for (let element of sqares) {
        element.innerHTML = ''
    }
    for (key in fieldState) {
        fieldState[key] = true
    }
}

const isHasWinner = (playerId) => { // checks if the player satisfies the win condition
    switch (true) {
        case fieldState.sqare1 === playerId &&
             fieldState.sqare2 === playerId &&
             fieldState.sqare3 === playerId:
             return true

        case fieldState.sqare4 === playerId &&
             fieldState.sqare5 === playerId &&
             fieldState.sqare6 === playerId:
             return true

        case fieldState.sqare7 === playerId &&
             fieldState.sqare8 === playerId &&
             fieldState.sqare9 === playerId:
             return true

        case fieldState.sqare1 === playerId &&
             fieldState.sqare4 === playerId &&
             fieldState.sqare7 === playerId:
             return true

        case fieldState.sqare2 === playerId &&
             fieldState.sqare5 === playerId &&
             fieldState.sqare8 === playerId:
             return true

        case fieldState.sqare3 === playerId &&
             fieldState.sqare6 === playerId &&
             fieldState.sqare9 === playerId:
             return true

        case fieldState.sqare1 === playerId &&
             fieldState.sqare5 === playerId &&
             fieldState.sqare9 === playerId:
             return true

        case fieldState.sqare3 === playerId &&
             fieldState.sqare5 === playerId &&
             fieldState.sqare7 === playerId:
             return true

        default:
             return false
    }
}

const changeFigureforPlayer = () => { // Swaps playerID. In the next round, the player who played for X will play for 0.
    [firstPlayerId, secondPlayerId] = [secondPlayerId, firstPlayerId]
}

const nextRound = (win) => {
    roundNum += 1
    turn = true
    move = 0

    win === firstPlayerId ? firstPlayerPts += 1 : ''
    win === secondPlayerId ? secondPlayerPts += 1 : ''

    updateInfo()
    clearField()
    changeFigureforPlayer()
}

const nextTurn = () => {
    turn ? turn = false : turn = true
    move += 1

    if ( isHasWinner(firstPlayerId) ) {
        alert('Игрок1 Выиграл!')
        nextRound(firstPlayerId)
    }
    if ( isHasWinner(secondPlayerId) ) {
        alert('Игрок2 Выиграл!')
        nextRound(secondPlayerId)
    }

    if (move === 9) {
        alert('Ничья!')
        nextRound()
    }
}

const createElement = (nodeName, className) => {
    const element = document.createElement(nodeName)
    element.setAttribute('class', className)
    return element
}

const onSqareClicked = ({ target }) => {
    if (!fieldState[target.id] || fieldState[target.id] === 1) {
        alert('Поле Занято!')
        return
    }
    
    if (turn) {
        fieldState[target.id] = 1
        const x = createElement('div', 'x')
        target.append(x)
    } else {
        fieldState[target.id] = 0
        const o = createElement('div', 'o')
        target.append(o)
    }

    setTimeout(nextTurn, 50)
}

const onRestart = () => { // resets all values ​​to start a new game
    roundNum = 1
    move = 0
    firstPlayerPts = 0
    secondPlayerPts = 0
    turn = true
    firstPlayerId = 1
    secondPlayerId = 0
    clearField()
    updateInfo()
}

gameField.addEventListener('click', onSqareClicked)
restartBtn.addEventListener('click', onRestart)