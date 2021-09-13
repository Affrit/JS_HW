const BASE_URL = 'https://api.punkapi.com'
const content = document.getElementById('content')

const createElement = (elementType, attributeType, attributeValue) => {
    const element = document.createElement(elementType)
    element.setAttribute(attributeType, attributeValue)
    return element
}

const insertDescriptionElement = (elementNameText, elementContent, targetBlock) => {
    if (!elementContent) return
    const descriptionElement = createElement('div', 'class', `description__item`)
    const elementName = createElement('span', 'class', `description__name`)
    const element = createElement('span', 'class', `description__text`)

    elementName.innerText = elementNameText
    element.innerText = elementContent
    descriptionElement.append(elementName)
    descriptionElement.append(element)
    targetBlock.append(descriptionElement)
}

const createDescription = () => {
    const description = createElement('div', 'class', `description`)

    insertDescriptionElement('name: ', item.name, description)
    insertDescriptionElement('brewers_tips: ', item.brewers_tips, description)
    insertDescriptionElement('contributed_by: ', item.contributed_by, description)
    insertDescriptionElement('description: ', item.description, description)
    insertDescriptionElement('ph: ', item.ph, description)

    return description
}

const showError = (error) => {
    const errorText = createElement('span', 'class', 'error')
    errorText.innerText = `${error} :-(`
    content.append(errorText)
}

async function getDataFromServer() {
    try {
        const dataFromServer = await fetch(`${BASE_URL}/v2/beers?brewed_before=11-2017&abv_gt=6`)
        const response = await dataFromServer.json()
        if (response.error) {
            throw new Error(response.error)
        }

        return response

    } catch (error) {
        showError(error)
    }
}

async function showContent() {
    try {
        const response = await getDataFromServer()

        for (item of response) {
            const contentBlock = createElement('div', 'class', `contentBlock`)
            const img = createElement('img', 'src', `${item.image_url}`)
            img.setAttribute('id', item.id) // id from server
            const description = createDescription()

            contentBlock.append(img)
            contentBlock.append(description)
            content.append(contentBlock)
        }
    } catch (error) {
        showError(error)
    }
}

showContent()

const onImgClicked = ({ target }) => {
    if (target.tagName === 'IMG') {
        localStorage.setItem('clickedElementId', target.id) // this id is from server

        const clickedElementId = localStorage.getItem('clickedElementId')
        console.log(clickedElementId)
    }
}

content.addEventListener('click', onImgClicked)