/** Agarrando Selector por ID y clases */
const parrafoID = document.querySelector('#parrafoID')
console.log('parrafoID', parrafoID)

const claseCssParrafo = document.querySelectorAll('.clase-css-parrafo')
console.log('claseCssParrafo', claseCssParrafo)
const lastPIdx = claseCssParrafo.length - 1
const lastP = claseCssParrafo[lastPIdx]
/**
 * Delegando funciones
 * Agregando clases y removiendolas
 */
const clickDiv = document.querySelectorAll('.click-class')[0]
clickDiv.addEventListener('click', function(event) {
  // se usa function para
  // poder usar el 'this' que del contexto.
  // this.classList.toggle('color')

  /**
   * Aquí verificamos como añadir o remover clases.
   */
  if (this.classList.contains('color')) {
    this.classList.remove('color')
  } else {
    this.classList.add('color')
  }
})
lastP.classList.replace('clase-css-parrafo', 'clase-css-nuevo')

/**
 * Insertando al DOM
 */

// Insertando teto
// con innerHTML
lastP.innerHTML = 'Esto es un párrafo II Con nuevo texto'

const bodyID = document.querySelector('#bodyID')
const parrafo = document.createElement('p')
parrafo.classList.add('added-class')
parrafo.textContent = 'Texto Interno del nuevo parrafo'
bodyID.appendChild(parrafo)

/**
 * Remover Elemento
 */

// setTimeout(() => {
//   console.log('Remove Element')
//   bodyID.removeChild(parrafo)
//   //  parrafo.parentElement.removeChild(parrafo)
// }, 3000)

function removeParragraph(e) {
  const parrafo = e.currentTarget
  const parent = parrafo.parentElement
  const removedElement = parent.removeChild(parrafo)
  console.log('TCL: removeParragraph -> removedElement', removedElement)
  setTimeout(() => {
    const r = confirm('¿Deseas volverlo a insertar?')
    if (r == true) {
      parent.appendChild(removedElement)
    }
  }, 1600)
}

parrafo.onclick = removeParragraph

/**
 * Ajax request
 */

const form = document.querySelector('#formID')
const lastInput = document.querySelector('#last-input')
form.addEventListener('submit', serverSendHandler)

async function serverSendHandler(e) {
  e.preventDefault()
  let body = {}
  const formEl = event.currentTarget
  for (const key in formEl.elements) {
    if (formEl.elements.hasOwnProperty(key)) {
      body[formEl.elements[key].name] = formEl.elements[key].value
    }
  }
  body = JSON.stringify(body)
  console.log('TCL: serverSendHandler -> body', body)
  const res = await fetch(`/form`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body
  })
  const data = await res.json()
  console.log('TCL: serverSendHandler -> data', data)
}

async function formHandler(event) {
  event.preventDefault()

  const parrafo = document.createElement('p')
  parrafo.classList.add('added-class')

  let username = ''
  const formEl = event.currentTarget
  debugger
  for (const key in formEl.elements) {
    if (
      formEl.elements.hasOwnProperty(key) &&
      formEl.elements[key].name === 'username'
    ) {
      username = formEl.elements[key].value
      break
    }
  }
  console.log('TCL: FORM username', username)
  formEl.reset()
  try {
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()

    parrafo.textContent = `user: ${data.login}, name: ${data.name}`
  } catch (error) {
    parrafo.textContent = `Ha ocurrido un error`
  }
  bodyID.appendChild(parrafo)
  debugger
}
