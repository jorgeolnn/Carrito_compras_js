// const familias = [
//     { idFamilia: 1, nombreFamilia: 'Familia 1' },
//     { idFamilia: 2, nombreFamilia: 'Familia 2' }
// ];

// const subfamilias = [
//     { idSubFamilia: 101, idFamilia: 1, nombreSubFamilia: 'Subfamilia 1.1' },
//     { idSubFamilia: 102, idFamilia: 1, nombreSubFamilia: 'Subfamilia 1.2' },
//     { idSubFamilia: 103, idFamilia: 2, nombreSubFamilia: 'Subfamilia 2.1' },
//     { idSubFamilia: 104, idFamilia: 2, nombreSubFamilia: 'Subfamilia 2.2' }
// ];

const productos = [
    { idProducto: 1001, idSubFamilia: 101, idFamilia: 1, nombreFamilia: 'Deportes', nombreSubFamilia: 'Bicicletas', nombreProducto: 'Mountain Bike (MTB)', descripcion: 'Es una bicicleta Mountain Bike', precio: 1000, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 1002, idSubFamilia: 101, idFamilia: 1, nombreFamilia: 'Deportes', nombreSubFamilia: 'Bicicletas', nombreProducto: 'Bicicleta BMX', descripcion: 'Es una bicicleta de BMX', precio: 20000, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 1003, idSubFamilia: 102, idFamilia: 1, nombreFamilia: 'Deportes', nombreSubFamilia: 'Monopatines', nombreProducto: 'Longboard', descripcion: 'Monopatin de Longboard', precio: 400000, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 1004, idSubFamilia: 102, idFamilia: 1, nombreFamilia: 'Deportes', nombreSubFamilia: 'Monopatines', nombreProducto: 'Scooter', descripcion: 'Es un Scooter', precio: 4900, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 2001, idSubFamilia: 103, idFamilia: 2, nombreFamilia: 'Electrónica', nombreSubFamilia: 'Teléfonos', nombreProducto: 'Samsung A15 5G', descripcion: 'Celular Samsung A15 5G', precio: 50000, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 2002, idSubFamilia: 103, idFamilia: 2, nombreFamilia: 'Electrónica', nombreSubFamilia: 'Teléfonos', nombreProducto: 'Samsung A16', descripcion: 'Celular Samsung A16', precio: 6900, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 2003, idSubFamilia: 104, idFamilia: 2, nombreFamilia: 'Electrónica', nombreSubFamilia: 'Computadoras', nombreProducto: 'Notebook Asus gaming', descripcion: 'Pc gamer Asus gaming, último modelo de gama alta', precio: 790, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 2004, idSubFamilia: 104, idFamilia: 2, nombreFamilia: 'Electrónica', nombreSubFamilia: 'Computadoras', nombreProducto: 'Notebook Msi gaming', descripcion: 'Pc gamer Notebook Msi gaming, para entusiastas', precio: 890, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 3001, idSubFamilia: 105, idFamilia: 3, nombreFamilia: 'Hogar', nombreSubFamilia: 'Muebles', nombreProducto: 'Armario', descripcion: 'Es un armario para guardar ropa', precio: 15000, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 3002, idSubFamilia: 105, idFamilia: 3, nombreFamilia: 'Hogar', nombreSubFamilia: 'Muebles', nombreProducto: 'Estantería', descripcion: 'Estante adecuado para colocar cosas de utilería o de hogar', precio: 17000, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 4001, idSubFamilia: 106, idFamilia: 4, nombreFamilia: 'Jardinería', nombreSubFamilia: 'Herramientas', nombreProducto: 'Llave', descripcion: 'Es una llave maestra', precio: 2200, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 4002, idSubFamilia: 106, idFamilia: 4, nombreFamilia: 'Jardinería', nombreSubFamilia: 'Herramientas', nombreProducto: 'Sierra', descripcion: 'Descripción del producto 4.1.2', precio: 3000, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 5001, idSubFamilia: 107, idFamilia: 5, nombreFamilia: 'Moda', nombreSubFamilia: 'Calzado', nombreProducto: 'Nike 3000', descripcion: 'último modelo de Nike para jugadores de futbol', precio: 5500, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 5002, idSubFamilia: 107, idFamilia: 5, nombreFamilia: 'Moda', nombreSubFamilia: 'Calzado', nombreProducto: 'Adidas 23h', descripcion: 'Calzado especial para tenistas', precio: 6700, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 6001, idSubFamilia: 108, idFamilia: 6, nombreFamilia: 'Perfumería', nombreSubFamilia: 'Fragancias', nombreProducto: 'Versace 345', descripcion: 'La fragancia más glamurosa de Versace', precio: 12000, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' },
    { idProducto: 6002, idSubFamilia: 108, idFamilia: 6, nombreFamilia: 'Perfumería', nombreSubFamilia: 'Fragancias', nombreProducto: 'Rabanne', descripcion: 'El mejor perfume para citas', precio: 9800, imagen: 'https://static.vecteezy.com/system/resources/previews/010/576/771/non_2x/product-icon-logo-illustration-logistic-label-hands-holding-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' }
];
window.onload = async () => {
    // sub_familia_filtro()
    listar_productos();
    // generarEnlacesSubfamilias();
    filtro_subfamilia();
    // listar_carrito();
    // agregar_carrito_compra()

}


function formatonumero2(precio) {
    let newnumber = new Intl.NumberFormat("CLP").format(precio);
    let valida = 0;
    let respuesta = true;
    do {
        if (valida >= -1) {
            respuesta = false;
            newnumber = newnumber.replace(",", ".");
        }
        newnumber = newnumber.replace(",", ".");
        valida = newnumber.search(",");
    } while (respuesta);
    return newnumber;
}

// var carrito = []
const listar_productos = (nombreSubFamilia = '') => {


    // carrito = productos
    let lista = ``
    // Si hay una subfamilia seleccionada, filtrar los productos; de lo contrario, mostrar todos
    const productosFiltrados = nombreSubFamilia
        ? productos.filter(p => p.nombreSubFamilia === nombreSubFamilia)
        : productos;

    productosFiltrados.forEach(element => {

        lista += `
          <div class="col">
            <div class="card h-100 tarjeta_productos">
                <img class="card-img-top" src="${element.imagen}" alt="imagen" style="width:100%; height: 340px;">
                <div class="card-body">
                    <h5 class="card-title">${element.nombreProducto}</h5>
                    <p class="card-text">${element.descripcion}</p>
                    <p><strong>$</strong>${formatonumero2(element.precio)}.-</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary" onclick="detalle_producto(${element.idProducto})">Ver detalle</button>
                    <button type="button" class="btn btn-sm btn-principal btn_principalito elemento_carrito Boton_carrito" onclick="agregar_carrito_compra(${element.idProducto},  ${element.precio}, '${element.nombreProducto}', '${element.imagen}')" style="left: -1px; position: relative;">carrito</button>
                </div>
            </div>
        </div>
            `

    });

    document.getElementById('carrito_lista').innerHTML = lista
    

}


const detalle_producto = (_id) => {


    let producto_popup = productos.find(p => p.idProducto == _id)

    let listado = `
                <img class="card-img-top" src="${producto_popup.imagen}" alt="imagen" style="width:100%; height: 340px;">
                <div class="card-body">
                    <h5 class="card-title">${producto_popup.nombreProducto}</h5>
                    <p class="card-text">${producto_popup.descripcion}</p>
                    <p><strong>$</strong>${formatonumero2(producto_popup.precio)}.-</p>
                </div>
        `


    document.getElementById('detalle_producto').innerHTML = listado

    $('#mModalcarrito').modal('show');



}



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

const filtro_subfamilia = () => {

    const subfamiliasUnicas = [...new Set(productos.map(p => p.nombreSubFamilia))];

    let listasub = ``;
    subfamiliasUnicas.forEach(sub => {
        listasub += `<a href="#" onclick="aplicarFiltroSubfamilia('${sub}')">${sub}</a>`;
    });


    // Actualizar el DOM con los enlaces de subfamilias y productos filtrados
    document.getElementById('div_subfamilias').innerHTML = listasub;

};



const aplicarFiltroSubfamilia = (nombreSubFamilia) => {
    listar_productos(nombreSubFamilia);
};




var carrito = []; // Arreglo donde se almacenarán los productos

const agregar_carrito_compra = (idProducto, precio, nombreProducto, imagen, cantidad = 1) => {

    // Objeto del producto a agregar
    const carrito_compra = { idProducto, precio, nombreProducto, imagen, cantidad };

    // Busca si el producto ya está en el carrito
    let existe_producto = carrito.find(c=>c.idProducto==carrito_compra.idProducto);

    if (existe_producto == undefined) {
        // Si no existe, agregar al carrito
        carrito.push(carrito_compra);
        alert('Producto agregado al carrito de compras');
    } else {
        // Si ya existe, incrementar la cantidad
        existe_producto.cantidad++;
    }

    // Llama a las funciones para calcular y listar el carrito
    calcular_carrito();
    listar_carrito();
};



var cantidadProductos = null
var totalPrecio = null
const calcular_carrito = () =>{
    
    carrito.forEach(element => {
    
        // Calcula el total para este producto
        element.total = element.precio * element.cantidad;
    });

        // Recalcular la cantidad total de productos y el precio total
        cantidadProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
        totalPrecio = carrito.reduce((total, producto) => total + producto.total, 0);
    // console.log('Cantidad de productos:', cantidadProductos, 'Total:', totalPrecio); 

    document.getElementById('carrito_calculo').textContent = `Contador: ${cantidadProductos}`;
}

const restar_carrito = (idProducto) =>{

    const carrito_productos = carrito.find(producto => producto.idProducto === idProducto)

    if (carrito_productos) {
        // Disminuir la cantidad si hay más de uno
        if (carrito_productos.cantidad > 1) {
            carrito_productos.cantidad--;
        } else {
            // Si la cantidad es 1, eliminar el producto
            carrito = carrito.filter(producto => producto.idProducto !== idProducto);
            alert('Producto quitado del carrito.');
        }
    }

    calcular_carrito();
    listar_carrito();

    if (carrito.length === 0) {
        alert('No hay productos en el carrito.');
        // Aquí puedes agregar más lógica, como deshabilitar el botón de pagar o similar
    }
}

const listar_carrito = () => {
$('#mModalcarritocompra').modal('show');
    // const carritoLista = document.getElementById('carrito_compra');
    const listado_carrito = carrito;
    // carritoLista.innerHTML = ''

    if (listado_carrito.length === 0) {
        document.getElementById('carrito_compra').innerHTML = `<h5>No hay productos agregados</h5>`;
        return; // Salir de la función si no hay productos
    }


    let carritocom = ``
    listado_carrito.forEach(element => {
        // console.log(productos)
        carritocom += `
                <img class="card-img-top" src="${element.imagen}" alt="imagen" style="width:100%; height: 340px;">
                <div class="card-body">
                    <h5 class="card-title">${element.nombreProducto}</h5>
                    <p><strong>$</strong>${formatonumero2(element.precio)}.-</p>
                    <p class="elemento_carrito">${element.cantidad}</p>
                    <button type="button" class="btn btn-sm btn-principal btn_principalito elemento_carrito Boton_agregar" onclick="agregar_carrito_compra(${element.idProducto},  ${element.precio}, '${element.nombreProducto}', '${element.imagen}')" style="left: -1px; position: relative;">+</button>
                    <button type="button" class="btn btn-sm btn-principal btn_principalito elemento_carrito Boton_restar" onclick="restar_carrito(${element.idProducto})" style="left: -1px; position: relative;">-</button>
                </div>
        
        `
    });

    // Mostrar la cantidad de productos y el total
    document.getElementById('carrito_compra').innerHTML = `
        <h5>Cantidad de productos: ${cantidadProductos}</h5>
        <h5>Total: $${formatonumero2(totalPrecio)}.-</h5>
        <ul>${carritocom}</ul>
    `;

    // document.getElementById('carrito_compra').innerHTML=carrito;
    
}