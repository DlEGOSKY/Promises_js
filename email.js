
const enviarCorreo = (direccion) => {
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            if (direccion) {
                resolve(`Correo enviado a ${direccion}`);
            } else {
                reject("Dirección de correo no proporcionada");
            }
        }, 2000);
    });
};


enviarCorreo("")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
