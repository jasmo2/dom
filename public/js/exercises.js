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
// lastP.innerHTML = `${lastP.innerText} <strong>Con nuevo texto</strong>`

// const bodyID = document.querySelector('#bodyID')
// const parrafo = document.createElement('p')
// parrafo.classList.add('added-class')
// parrafo.textContent = 'Texto Interno del nuevo parrafo'
// setTimeout(() => {
//   bodyID.appendChild(parrafo)
// }, 2000)

let nombres = [
  'juan',
  'rogger',
  'mateo',
  'jorge',
  'daniel',
  'alejandro',
  'david',
  'camilo'
]

const clickButton = document.getElementById("makeit-btn")
const list = document.getElementById("listaNoSe")

const copiaNombres = [].concat(nombres)

const addName = (event) => {
  console.log('TCL: addName -> nombres', nombres)
  if (nombres.length) {
    let number = Math.floor(Math.random() * nombres.length)
    const elementList = document.createElement('li')
    elementList.textContent = nombres.splice(number, 1) //Codigo Calidoso: Splice retorna el nombre y lo quita de la lista
    list.appendChild(elementList)
  } else {

    swal({
      title: "Pailas",
      text: "No hay más makers",
      icon: "error",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {

        const resetList = () => {
          nombres = [].concat(copiaNombres)
          list.innerHTML = `<li>Futuros makers</li>`
        }

        if (willDelete) {
          resetList()
        }
      });

  }
}






clickButton.addEventListener('click', addName)
    // Cuando le click al btn agregen a a lista uno de los nombres y se muestre
    // aleatoria.click al btn agregen a a lista uno de los nombres y se muestre
    // aleatoria.