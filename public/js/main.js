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
