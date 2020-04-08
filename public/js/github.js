/**
 * Exercises File
 * Haremos uso del api de Github
 * ¡ Nuevamente !
 *
 * Esta vez usaremos el API de
 * `https://api.github.com/search/repositories?q=LO_QUE_SE_QUIERA_BUSCAR`
 *
 * Donde podremos buscar los repositorios que queramos.
 *
 * A Cumplir:
 * - Hacer un form dinamico como el que tiene Github en su pagina
 *   cada vez que se escriba se debe hacer una query AJAX al la URL
 * - Se debe desplegar una lista solo con los 5 primeros resultados con el nombre completo del repo
 *  -- debe presentarse el nombre completo y
 *     haber un enalce <a href> con html_url de los componentes en caso de ser escogido
 *
 *
 */

M.AutoInit()

const searchBar = document.querySelector('.collapsible')
const div = document.querySelector('#div-collapsible')
// const li = document.querySelector('#active')
// console.log('TLC: li', li)
// const navTag = document.getElementsByTagName('nav')

// console.log('TLC: searchBar', searchBar)

searchBar.addEventListener('focusin', (e) => {
  // debugger
  e.currentTarget.classList.add('collapsible-focus')
  // div.style.display = 'block'
  div.classList.add('collapsible-body')
  // console.log('TLC: e.currentTarget', e.currentTarget)
})

searchBar.addEventListener('focusout', (e) => {
  e.currentTarget.classList.remove('collapsible-focus')
  div.classList.remove('collapsible-body')
  // div.removeAttribute('style')
  // div.style.display = ''
})

// document.addEventListener('keyup', function() {
//     const elems = document.querySelectorAll('.dropdown-trigger')
//     const instances = M.Dropdown.init(elems)
// })
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible')
  var instances = M.Collapsible.init(elems)
})

const list = document.querySelector('#dropdown1')
console.log('TLC: list', list)

searchBar.addEventListener('keyup', searchResult)

let repo = ''

async function searchResult(event) {
  // event.preventDefault()
  list.innerHTML = ''
  repo = event.target.value
  console.log('TLC: searchResult -> repo', repo)

  try {
    const result = await fetch(
      `https://api.github.com/search/repositories?q=${repo}`
    )
    const data = await result.json()
    console.log('TLC: searchResult -> data', data)
    if (!data.message) {
      for (let i = 0; i < 5; i++) {
        const elementList = document.createElement('li')
        elementList.append(data.items[i].name)
        console.log('TLC: searchResult -> elementList', elementList)
        list.appendChild(elementList)
        // console.log('TLC: searchResult -> data', data.items[i].name)
        // console.log('TLC: searchResult -> data', data)
      }
    }
  } catch (error) {
    console.log(error.message)
  }
}
