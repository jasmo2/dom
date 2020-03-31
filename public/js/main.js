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
const clickClass = (event) => {
  // se usa function para
  // poder usar el 'this' que del contexto.
  // this.classList.toggle('color')

  /**
   * Aquí verificamos como añadir o remover clases.
   */

  console.log('TCL: clickClass -> event', event)
  console.log('TCL: clickClass -> event.currentTarget', event.currentTarget)
  if (event.currentTarget.classList.contains('color')) {
    event.currentTarget.classList.remove('color')
  } else {
    event.currentTarget.classList.add('color')
  }
}
const clickDivs = document.querySelectorAll('.click-class')
clickDivs.forEach(clickDiv => clickDiv.addEventListener("click", clickClass))

// const clickDiv = document.querySelector('.click-class')


lastP.classList.replace('clase-css-parrafo', 'clase-css-nuevo'), 2
