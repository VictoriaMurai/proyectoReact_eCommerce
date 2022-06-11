const products = [
    {
        id: '1',
        title: 'Mermelada de arándanos',
        price: 790,
        category: 'mermeladas',
        pictureUrl: '/images/mermelada-arandanos.jpg',
        stock: 7,
        description: 'Ingredientes: arándanos, azúcar morena, jugo de limón.'
    },

    {
        id: '2',
        title: 'Mermelada de ciruela',
        price: 680,
        category: 'mermeladas',
        pictureUrl: '/images/mermelada-ciruela.jpg',
        stock: 10,
        description: 'Ingredientes: ciruelas, azúcar morena, jugo de limón.'
    },

    {
        id: '3',
        title: 'Mermelada de mandarina',
        price: 680,
        category: 'mermeladas',
        pictureUrl: '/images/mermelada-mandarina.jpg',
        stock: 9,
        description: 'Ingredientes: mandarinas, azúcar morena, jugo de limón.'
    },

    {
        id: '4',
        title: 'Mermelada de naranja',
        price: 750,
        category: 'mermeladas',
        pictureUrl: '/images/mermelada-naranja.jpg',
        stock: 12,
        description: 'Ingredientes: naranjas orgánicas 70% y azúcar morena orgánica.'
    },

    {
        id: '5',
        title: 'Berenjenas en escabeche',
        price: 750,
        category: 'conservas',
        pictureUrl: '/images/berenjenas.jpg',
        stock: 6,
        description: 'Ingredientes: berenjenas, aceite, vinagre, ajo, orégano, romero, laurel.'
    },

    {
        id: '6',
        title: 'Champiñones en escabeche',
        price: 750,
        category: 'conservas',
        pictureUrl: '/images/champignones.jpg',
        stock: 10,
        description: 'Ingredientes: champiñones, aceite, vinagre, ajo, orégano, romero.'
    },

    {
        id: '7',
        title: 'Morrones en aceite',
        price: 790,
        category: 'conservas',
        pictureUrl: '/images/morrones.jpg',
        stock: 5,
        description: 'Ingredientes: morrones rojos, morrones amarillos, morrones verdes, aceite, ajo, orégano.'
    },

    {
        id: '8',
        title: 'Repollitos de bruselas',
        price: 790,
        category: 'conservas',
        pictureUrl: '/images/repollitos.jpg',
        stock: 6,
        description: 'Ingredientes: repollitos de bruselas, aceite, ajo, orégano.'
    },

    {
        id: '9',
        title: 'Limoncello',
        price: 990,
        category: 'licores',
        pictureUrl: '/images/limoncello.jpg',
        stock: 10,
        description: 'Ingredientes: alcohol alimenticio, azúcar blanca, limón.'
    },

    {
        id: '10',
        title: 'Desayuno de otoño',
        price: 1800,
        category: 'desayunos',
        pictureUrl: '/images/desayuno.jpg',
        stock: 10,
        description: '2 mermeladas y 2 conservas a elección. Pan casero, té y café. Opcional: taza de té.'
    }
]



export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}