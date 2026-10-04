// ==========================
// CARRITO DE COMPRAS
// ==========================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    guardarCarrito();

    alert("✅ " + nombre + " fue agregado al carrito.");

}

function mostrarCarrito() {

    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("total");

    if (!lista || !total) return;

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach((producto, indice) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${producto.nombre}</span>
            <span>$${producto.precio.toLocaleString()}</span>
            <button onclick="eliminarProducto(${indice})">
                Eliminar
            </button>
        `;

        lista.appendChild(li);

        suma += producto.precio;

    });

    total.textContent = "Total: $" + suma.toLocaleString();

}

function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    guardarCarrito();

    mostrarCarrito();

}

function vaciarCarrito() {

    if (confirm("¿Deseas vaciar el carrito?")) {

        carrito = [];

        guardarCarrito();

        mostrarCarrito();

    }

}

function finalizarCompra() {

    if (carrito.length === 0) {

        alert("⚠ El carrito está vacío.");

        return;

    }

    alert("🎉 ¡Gracias por tu compra en STEP STYLE!");

    carrito = [];

    guardarCarrito();

    mostrarCarrito();

}

window.onload = mostrarCarrito;