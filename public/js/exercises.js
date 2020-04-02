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
    'camilo',
    'nahed'
]

const clickButton = document.getElementById("makeit-btn")
const list = document.getElementById("listaNoSe")

const copiaNombres = [].concat(nombres)

const addName = (event) => {
    console.log('TCL: addName -> nombres', nombres)
    if (nombres.length) {
        let number = Math.floor(Math.random() * nombres.length)
        const elementList = document.createElement('li')
        const spanElement = document.createElement('span')
        const buttonElement = document.createElement('button')
        buttonElement.classList.add("waves-effect", "waves-light", "btn-small")
        elementList.classList.add("list")
        
        spanElement.textContent = nombres.splice(number, 1) //Codigo Calidoso: Splice retorna el nombre y lo quita de la lista
        buttonElement.textContent = 'Eliminame' //Codigo Calidoso: Splice retorna el nombre y lo quita de la lista

        buttonElement.onclick = removeElement

        elementList.appendChild(spanElement)
        elementList.appendChild(buttonElement)
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

function removeElement(e) {
    const buttonElement = e.currentTarget
    const parent = buttonElement.parentElement
    const removedElement = parent.remove()
    console.log("TLC: removeElement -> parent", parent)
    console.log('TCL: removeParragraph -> removedElement', removedElement)


        swal({
            title: "¿Restaurarlo?",
            text: "¿Deseas volverlo a insertar?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                swal("Aquí lo tienes de vuelta!",{icon: "success"});
                list.appendChild(parent)
            } else {
                swal("Poof! Ya perdio");
                nombres.push(parent.firstChild.textContent)
            }
          });
   
}


// function onDeleteCallback(e) {
//     const buttonPressed = e.currentTarget
//     const parent = buttonPressed.parentElement
//     const r = confirm('¿Do you want remove ' + parent.firstChild.textContent + ' ?')
//     if (r == true) {
//         nombres.push(parent.firstChild.textContent)
//         const removedElement = parent.parentElement.removeChild(parent)
//         console.log(nombres)
//     }
// }

// Cuando le click al btn agregen a a lista uno de los nombres y se muestre
// aleatoria.click al btn agregen a a lista uno de los nombres y se muestre
// aleatoria.


/**
 * Crear dos elementos Hermanos un 
 * SPAN y Button
 * donde el span contenga el nombre y el button 
 * remueva el documento del DOM
 * 
 * una vez removido debe aparecer un modal que 
 * verifique si quiere restaurarlo en el DOM 
 * o simplemente lo elimine.
 */