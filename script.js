document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        { 
            nombre: "Producto 1", 
            precio: 20, 
            imagen: "https://i.postimg.cc/FzqGyJDp/Whats-App-Image-2024-09-24-at-2-48-35-PM.jpg",
            tallas: ["S","M", "L", "XL"] // Agrega las tallas disponibles
        },
        { 
            nombre: "Producto 2", 
            precio: 30, 
            imagen: "https://i.postimg.cc/zDbBcT6p/Whats-App-Image-2024-09-24-at-1-01-49-PM-2.jpg",
            tallas: ["S","M", "L", "XL"] 
        },
        { 
            nombre: "Producto 3", 
            precio: 40, 
            imagen: "https://i.postimg.cc/FzqGyJDp/Whats-App-Image-2024-09-24-at-2-48-35-PM.jpg",
            tallas: ["S","Q", "L", "Xl"] 
        }
    ];

    const catalogo = document.getElementById("catalogo");

    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.className = "producto";
        
        // Agregar botones de tallas
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div class="tallas-container">
                ${producto.tallas.map(talla => `
                    <button class="talla-btn" data-talla="${talla}">${talla}</button>
                `).join("")}
            </div>
            <button class="comprar-btn">Comprar</button>
        `;
        
        catalogo.appendChild(divProducto);

        // Lógica para selección de tallas
        const tallasBtns = divProducto.querySelectorAll(".talla-btn");
        let tallaSeleccionada = null;

        tallasBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Remover selección anterior
                tallasBtns.forEach(t => t.classList.remove("seleccionada"));
                // Seleccionar nueva talla
                btn.classList.add("seleccionada");
                tallaSeleccionada = btn.dataset.talla;
            });
        });

        // Evento para comprar
        const botonComprar = divProducto.querySelector(".comprar-btn");
        botonComprar.addEventListener("click", () => {
            if (!tallaSeleccionada) {
                alert("¡Selecciona una talla primero!");
                return;
            }

            const mensaje = `¡Hola! Quiero comprar:
Producto: ${producto.nombre}
Talla: ${tallaSeleccionada}
Imagen: ${producto.imagen}`;

            const urlWhatsApp = `https://wa.me/50257442084?text=${encodeURIComponent(mensaje)}`;
            window.open(urlWhatsApp, "_blank");
        });
    });
});