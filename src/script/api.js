import{createLoader} from './common/utils'

const row = document.querySelector('.row')

export function getData(url, fn) {
    const spinner = createLoader()
    row.appendChild(spinner)

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибочка')
        } 
            return response.json()
    })
    .then(data => {
        setTimeout(()=>{
            spinner.remove()
            fn(data)
        }, 1000)
        })
    .catch(error => console.log(error))
}