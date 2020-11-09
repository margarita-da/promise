import '../style/style.scss';
import {getData} from './api'
import {createList, createCard} from './common/utils'

const list = document.querySelector('.list-group')
const getListUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'

getData(getListUrl, createList)

list.addEventListener('click', (event) => {
    event.preventDefault()
    const itemId = event.target.dataset.id
    const urlDetails = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${itemId}.json`
    getData(urlDetails, createCard)
})