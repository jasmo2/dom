/** Agarrando Selector por ID y clases */
const parrafoID = document.querySelector('#parrafoID')
console.log('parrafoID', parrafoID)

const claseCssParrafo = document.querySelectorAll('.clase-css-parrafo')
console.log('claseCssParrafo', claseCssParrafo)
const lastPIdx = claseCssParrafo.length - 1
const lastP = claseCssParrafo[lastPIdx]
  /**/
  **
    *
  De * Delegando funciones *
    Ag * Agregando clases y removiendolas *
    /*/
    const clickClass = (event) => {
      //// se usa function para
      //// poder usar el 'this' que del contexto.

      /*/
    **
    *
    * Aquí verificamos como añadir o remover clases.*
    /*/

  coconst currentTarget = event.currentTarget
  coconsole.log('TCL: clickClass -> event', event)
  coconsole.log('TCL: clickClass -> event.currentTarget', currentTarget)
  cucurrentTarget.classList.toggle('color')
  // if // if (currentTarget.classList.contains('color')) {
  //   c//   currentTarget.classList.remove('color')
  // } e// } else {
  //   c//   currentTarget.classList.add('color')
  // }// }
}
const clickDivs = document.querySelectorAll('.click-class')
clickDivs.forEach(clickDiv => clickDiv.addEventListener("click", clickClass))

// const clickDiv = document.querySelector('.click-class')

function myFunction() {
  dodocument.getElementById("parrafoID").innerHTML = "Cambio!";
}
lastP.classList.replace('clase-css-parrafo', 'clase-css-nuevo'), 2