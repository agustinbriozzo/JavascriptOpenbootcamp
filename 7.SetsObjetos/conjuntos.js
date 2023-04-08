/* Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */

const arrayf = ["nombre1", "nombre2", "nombre3", "nombre4"]

const miSet = new Set(arrayf)

miSet.add("nombre1")
miSet.add("Javascript")

console.log(miSet)

