const products = [
    {
        id: '1',
        title: 'Mermelada de arándanos',
        price: 790,
        category: 'mermeladas',
        pictureUrl: '/images/mermelada-arandanos.jpg',
        stock: 7,
        description: '...'
    },

    {
        id: '2',
        title: 'Mermelada de ciruela',
        price: 680,
        category: 'mermeladas',
        pictureUrl: '/images/mermelada-ciruela.jpg',
        stock: 10,
        description: '...'
    },

    {
        id: '3',
        title: 'Mermelada de mandarina',
        price: 680,
        category: 'mermeladas',
        pictureUrl: '/images/mermelada-mandarina.jpg',
        stock: 9,
        description: '...'
    },

    {
        id: '4',
        title: 'Mermelada de naranja',
        price: 750,
        category: 'mermeladas',
        pictureUrl: '/images/mermelada-naranja.jpg',
        stock: 12,
        description: '...'
    },

    {
        id: '5',
        title: 'Berenjenas en escabeche',
        price: 750,
        category: 'conservas',
        pictureUrl: '/images/berenjenas.jpg',
        stock: 6,
        description: '...'
    },

    {
        id: '6',
        title: 'Champiñones en escabeche',
        price: 750,
        category: 'conservas',
        pictureUrl: '/images/champignones.jpg',
        stock: 10,
        description: '...'
    },

    {
        id: '7',
        title: 'Morrones en aceite',
        price: 790,
        category: 'conservas',
        pictureUrl: '/images/morrones.jpg',
        stock: 5,
        description: '...'
    },

    {
        id: '8',
        title: 'Repollitos de bruselas',
        price: 790,
        category: 'conservas',
        pictureUrl: '/images/repollitos.jpg',
        stock: 6,
        description: '...'
    },

    {
        id: '9',
        title: 'Limoncello',
        price: 990,
        category: 'licores',
        pictureUrl: '/images/limoncello.jpg',
        stock: 10,
        description: '...'
    },

    {
        id: '10',
        title: 'Desayuno de otoño',
        price: 1800,
        category: 'desayunos',
        pictureUrl: '/images/desayuno.jpg',
        stock: 10,
        description: '...'
    }
]



export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}