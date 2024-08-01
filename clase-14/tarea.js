

const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    },
]

function buscarProducto(busqueda) {
    const ProductoBuscado = []
    for(const producto of productos){
        if (producto.title.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){
            ProductoBuscado.push(producto)
        }
    }
    return ProductoBuscado
}

console.log (buscarProducto('celular'))

