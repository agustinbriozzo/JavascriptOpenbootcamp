/* Crea un nuevo fichero JS que contenga las siguientes líneas

- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

- Ejecuta la depuración de VSCode para visualizar la ejecución de la función */

function generaFibonacci(num) {
    let fibonacci = [1, 1]

    for (let i = 2; i < num; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    }

    return fibonacci
}

console.log(generaFibonacci(3))


