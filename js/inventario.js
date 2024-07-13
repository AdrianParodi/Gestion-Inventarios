// En este proyecto, desarrollarás un sistema de gestión de inventario para una tienda utilizando JavaScript. El sistema permitirá administrar productos y realizar algunas operaciones básicas sobre ellos.


// a. Agregar Producto: Implementa una función agregarProducto que reciba un objeto producto (con las propiedades mencionadas) y lo añada al array inventario.

// b. Eliminar Producto: Implementa una función eliminarProducto que reciba el código de un producto y lo elimine del array inventario.

// c. Actualizar Cantidad: Implementa una función actualizarCantidad que reciba el código de un producto y una nueva cantidad, y actualice la cantidad del producto correspondiente en el array inventario.

// d. Buscar Producto por Categoría: Implementa una función buscarProductoPorCategoria que reciba una categoría (string) y devuelva un array con todos los productos de esa categoría.

// e. Calcular Valor Total del Inventario: Implementa una función calcularValorTotal que calcule y devuelva el valor total del inventario (suma del precio de cada producto multiplicado por su cantidad).


let inventario = [
    {
        nombre: "Laptop",
        categoria: "Electrónica",
        precio: 1000,
        cantidad: 10,
        codigo: "P001"
    },
    {
        nombre: "Smartphone",
        categoria: "Electrónica",
        precio: 700,
        cantidad: 25,
        codigo: "P002"
    },
    {
        nombre: "Teclado",
        categoria: "Accesorios",
        precio: 50,
        cantidad: 50,
        codigo: "P003"
    },
    {
        nombre: "Monitor",
        categoria: "Electrónica",
        precio: 300,
        cantidad: 15,
        codigo: "P004"
    },
    {
        nombre: "Silla de Oficina",
        categoria: "Muebles",
        precio: 150,
        cantidad: 20,
        codigo: "P005"
    }
];


function agregarProducto(producto){
    const product_fields = ["nombre", "categoria", "precio", "cantidad", "codigo"]
    let todosLosCamposEnObjeto = true

    if (typeof(producto)!="object"){
        console.log("Error, deben agregarse elementos con estructura de objeto")
        return -1
    }

    // Validamos que el objeto producto tenga todos los campos requeridos
    // camposFaltantes=[]
    for (element of product_fields){
        if (!(element in producto)){
            todosLosCamposEnObjeto = false
            // camposFaltantes.push(element)
            console.log(`El objeto ingresado no contiene todos los campos requeridos: \n ${product_fields}.\n\n Le falta el campo "${element}"`)
            return -1
        }
    }
 
    inventario.push(producto)
    console.log(`Producto "${producto.nombre}" agregado con exito `)
    return 1
}


function eliminarProducto(codigoProducto){
    eliminado = []
    for (producto of inventario){
        if (producto.codigo == codigoProducto){
            eliminado=inventario.pop(producto)
            console.log(`Producto ${eliminado.nombre} eliminado con exito`)
        }   
    }

    if (eliminado.length==0){
        console.log(`Producto con codigo ${codigoProducto} no encontrado`)
    }
    return eliminado
}


function actualizarCantidad(codigo, nuevaCantidad){
    for (producto of inventario){
        if(codigo == producto.codigo){
            producto.cantidad = nuevaCantidad
            return producto}       
    }
    console.log(`Producto con codigo ${codigo} no encontrado`)
    return -1
}


function buscarProductoPorCategoria(categoria){
    let productosCategoriaBuscada=[]
    for (producto of inventario){
        if (producto.categoria == categoria) {
            productosCategoriaBuscada.push(producto)
        }
    }
    if (productosCategoriaBuscada.length == 0){console.log(`Categoria "${categoria}" no encontrada`)}
    return productosCategoriaBuscada
}


function calcularValorTotal(){
    let montoTotal = 0
    for (element of inventario){
        montoTotal += element.cantidad * element.precio
    }
    console.log(`El valor total del inventario es $ ${montoTotal}`)
    return montoTotal
}


// PRUEBAS DE CADA METODO
let producto1 ={
    nombre: "Nariz plastica",
    categoria: "Juguetes",
    precio: 100,
    cantidad: 1,
    codigo: "M006",
}

let producto2 ={
    nombre: "Perro 3 ojos",
    categoria: "Mascotas",
    cantidad: 1,
    codigo: "M006",
}


console.log(`Pruebe agregar los siguientes productos con el metodo "agregarProducto":
    producto1 ={
        nombre: "Nariz plastica",
        categoria: "Juguetes",
        precio: 100,
        cantidad: 1,
        codigo: "M006",
    } 
    
    producto2 ={
        nombre: "Perro 3 ojos",
        categoria: "Mascotas",
        cantidad: 1,
        codigo: "M006",
    }
        
    Luego puede utilizar los metodos "eliminarProducto", "actualizarCantidad", "buscarProductoPorCategoria" y "calcularValorTotal" `
)
// agregarProducto(producto1)
// agregarProducto(producto2)