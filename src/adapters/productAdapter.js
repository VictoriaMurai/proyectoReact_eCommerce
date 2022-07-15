export const createAdaptedProductFromFirestore = (doc) => {

    const data = doc.data()

    const productFormatted = {
        id: doc.id,
        title: data.title,
        category: data.category,
        pictureUrl: data.pictureUrl,
        price: data.price,
        description: data.description
    }

    return productFormatted
}