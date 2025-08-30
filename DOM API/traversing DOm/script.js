

const container = document.querySelector(".container")
const element3 = document.createElement("p")

element3.textContent = "element 3"

console.log(container.children.item(0).textContent)
console.log(container.parentElement.appendChild(element3))

container.appendChild(element3)




