/* Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */


const objeto = {
    nombre : "agustin",
    apellido : "briozzo",
    edad : 25,
    altura : 185,
    developer : true
}

const age = objeto.edad

const nuevo = [
    {...objeto},
    {
        nombre : "nombre2",
        apellido : "apellido2",
        edad : 26,
        altura : 186,
        developer : true
    },
    {
        nombre : "nombre3",
        apellido : "apellido3",
        edad : 24,
        altura : 187,
        developer : true
    }
]

nuevo.sort((a,b) => a.edad - b.edad)


