let array = ["harina", "huevo", "queso", "leche", "sal"]

array.push("aceite de girasol")
array.pop()

let peliculas = [
    {
        titulo:"titulo1",
        autor:"autor1",
        fecha: new Date (1997,11,4)
    },
    {
        titulo:"titulo2",
        autor:"autor2",
        fecha: new Date (2001,3,9)
    },
    {
        titulo:"titulo3",
        autor:"autor3",
        fecha: new Date (2011,1,1)
    }
]

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date (2010,1,1))

const directoresPeliculas = peliculas.map(pelicula => pelicula.autor)
const titulosPeliculas = peliculas.map(pelicula => pelicula.titulo)
const listaConcat = directoresPeliculas.concat(titulosPeliculas)
const listaFactor = [...directoresPeliculas , ...titulosPeliculas]


