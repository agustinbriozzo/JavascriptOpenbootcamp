/* Crea un nuevo proyecto de Node

- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)

- Duplica el archivo del ejercicio de la sesión 04-Textos

- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)

- Crea el fichero .eslintrc.json

- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"

- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles

- Crea un script en el package.json para corregir automáticamente todos los errores

- Ejecuta el script a través del terminal */

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