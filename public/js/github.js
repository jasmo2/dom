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

const searchBar = document.querySelector('nav.nav-container')
// const navTag = document.getElementsByTagName('nav')

console.log('TLC: searchBar', searchBar)

searchBar.addEventListener('focusin', (e) => {
  // debugger
  e.currentTarget.classList.add('nav-container-focus')
  console.log('TLC: e.currentTarget', e.currentTarget)
})

searchBar.addEventListener('focusout', (e) => {
  e.currentTarget.classList.remove('nav-container-focus')
})

// document.addEventListener('DOMContentLoaded', function() {
//     const elems = document.querySelectorAll('.dropdown-trigger')
//     const instances = M.Dropdown.init(elems)
// })

const list = document.querySelector('#list-result')

searchBar.addEventListener('keydown', searchResult)

let repo = ''

async function searchResult(event) {
  // event.preventDefault()
  list.innerHTML = ''
  repo += event.key
  console.log('TLC: searchResult -> repo', repo)

  try {
    const result = await fetch(
      `https://api.github.com/search/repositories?q=${repo}`
    )
    const data = await result.json()

    for (let i = 0; i < 5; i++) {
      const elementList = document.createElement('li')
      elementList.append(data.items[i].name)
      console.log('TLC: searchResult -> elementList', elementList)
      list.appendChild(elementList)
      console.log('TLC: searchResult -> data', data.items[i].name)
      // console.log('TLC: searchResult -> data', data)
    }
  } catch (error) {}
}
