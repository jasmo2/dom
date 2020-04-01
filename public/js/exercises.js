/**
 * Exercises File
 */

const variable = document.querySelectorAll('.divclass')

console.log('TCL: variable', variable)

console.log('TCL: urra')

/**
 * Insertando al DOM
 */

// Insertando teto
// con innerHTML
lastP.innerHTML = `${lastP.innerText} <strong>Con nuevo texto</strong>`

const bodyID = document.querySelector('#bodyID')
const parrafo = document.createElement('p')
parrafo.classList.add('added-class')
parrafo.textContent = 'Texto Interno del nuevo parrafo'
setTimeout(() => {
  bodyID.appendChild(parrafo)
}, 2000)
