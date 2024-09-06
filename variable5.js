
const verificarNumero = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero === 6) {
            resolve("El número es 5");
        } else {
            reject("El número no es 5");
        }
    });
};


verificarNumero(5)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
