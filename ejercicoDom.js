const lista = document.querySelector("#listaId")
const fragment = document.createDocumentFragment()

const estados = ["merida", "tachira", "yaracuy", "maracaibo", "trujillo"]

estados.forEach((estado) => {
    // const li = document.querySelector(".list")
    const template = document.querySelector("#templateId")
    const clone = template.content.cloneNode(true)
    clone.querySelector(".text-primary").textContent = estado

    fragment.appendChild(clone)
})
lista.appendChild(fragment)










// const fragment = new DocumentFragment();
// 
// estados.forEach((estado) => {
// const li = document.createElement("li")
// li.className = "list"
// 
// const blacki = document.createElement('b')
// blacki.textContent = "pais:"
// 
// const text = document.createElement('span')
// text.className = "text-primary"
// text.textContent = estado
// 
// li.appendChild(blacki)
// li.appendChild(text)
// fragment.appendChild(li)
// 
// })

// lista.appendChild(fragment)


















//** ejercicio de inputColor*/
// const inputColor = document.querySelector("#inputColor")
// const boton = document.querySelector("#boton")
// const cardColor = document.querySelector("#cardColor")
// const textoHexa = document.querySelector("#textoHexa")
// 
// 
// 
// 
// boton.addEventListener("click", () => {
// 
// textoHexa.textContent = inputColor.value;
// 
// cardColor.style.backgroundColor = inputColor.value;
// })