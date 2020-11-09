const list = document.querySelector('.list-group')
const card = document.querySelector('.card')
const img = document.querySelector('.card-img-top')
const title = document.querySelector('.card-title')
const details = document.querySelector('.card-text')


export function createLoader() {
    const loader = document.createElement('div')
    const loaderSpan = document.createElement('span')
    loader.classList.add("spinner-border", "text-warning", "mt-5", "ml-5")
    loaderSpan.classList.add("sr-only")
    loader.appendChild(loaderSpan)
    return loader
}

export function createList(data=[]) {
    data.map((item, i) => {
        const itemLink = document.createElement('a')
        itemLink.classList.add("list-group-item", "list-group-item-action")
        itemLink.setAttribute('data-id', item.id)
        itemLink.innerText = item.name
        list.append(itemLink)
    })
}

export function createCard(data=[]) {
    if (card.classList.contains("d-none")) card.classList.remove("d-none")
    img.setAttribute('src', data.avatar)
    title.textContent = data.name
    details.textContent = data.details.city
}
