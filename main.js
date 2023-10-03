// Crear un objeto con productos y sus precios
const productos = {
    producto1: 10.0,
    producto2: 20.0,
    producto3: 30.0,
    producto4: 40.0,
};

// Inicializar el costo total a cero
let costoTotal = 0.0;

// Pedir al usuario que seleccione productos hasta que decida terminar
while (true) {
    const seleccion = prompt("Ingrese el nombre del producto (o escriba 'fin' para terminar): ");

    // Verificar si el usuario quiere salir del bucle
    if (seleccion.toLowerCase() === 'fin') {
        break;
    }

    // Verificar si el producto está en la lista
    if (productos[seleccion]) {
        costoTotal += productos[seleccion];
        alert(`${seleccion} agregado al carrito.`);
    } else {
        alert("Producto no válido. Por favor, elija un producto válido.");
    }
}

// Mostrar el costo total
alert(`El costo total de los productos seleccionados es: $${costoTotal.toFixed(2)}`);
