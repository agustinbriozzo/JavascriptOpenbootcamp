let nombre = "Agustin"
let apellido = "Briozzo"
let estudiante = nombre + " " + apellido
let estudianteMayus = estudiante.toLowerCase()
let estudianteMinus = estudiante.toUpperCase()
let numeroLetras = estudiante.length
let firstLeter = nombre.charAt(0)
let lastLeter = apellido.charAt(6)
let borrarEspacios = estudiante.replace(/ /g, "")
let isName = estudiante.includes(nombre)

console.log(borrarEspacios)