/* Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos) */

const fechaHoy = new Date()
const fechaNacimiento = new Date(1997,11,4)
const tarde = fechaHoy > fechaNacimiento
const dia = fechaNacimiento.getDay()
const mes = fechaNacimiento.getMonth()
const anio = fechaNacimiento.getFullYear()

console.log(tarde)
console.log(fechaHoy)
console.log(fechaHoy.toLocaleDateString())