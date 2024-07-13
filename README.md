# Gestion de Inventarios

En este proyecto se desarrolló un sistema de gestión de inventarios sencillo utilizando JavaScript. El sistema permite administrar productos y realizar algunas operaciones básicas sobre ellos.  

Los productos se representan como objetos literales con el siguiente formato:
producto = {nombre: "Laptop", categoria: "Electrónica", precio: 1000, cantidad: 10, codigo: "P001"}

Y el inventario como un array de estos objetos. Las funciones implementadas son:

**agregarProducto(producto)**: permite agregar un nuevo producto al inventario, solo si tiene todos los atributos mostrados en el ejemplo anterior. De lo contrario, el objeto no se agregará. Por otro lado, puede tener atributos adicionales a los indicados.

**eliminarProducto(codigoProducto)**: recibe el código de un producto y elimine el producto del array inventario.

**actualizarCantidad(codigo, nuevaCantidad)**: permite modificar la cantidad disponible de un producto.

**buscarProductoPorCategoria(categoria)**: genera y devuelve un array con todos los productos que pertenecen a una determinada categoria. Si la categoria no existe, muestra un mensaje indicando lo sucedido.

**calcularValorTotal()**: devuelve el valor de venta total del inventario.

Para probar el programa, puede acceder al siguiente link:

Una vez ahi, debe presionar F12 (en google chrome) para abrir las herramientas de desarrollador y dirigirse a la pestaña consola, donde se puede invocar a las distintas funciones aquí implementadas.

