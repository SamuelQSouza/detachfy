import imageView from './imageView'

export default {
  render(product) {
    return {
      id: product.id,
      product_name: product.product_name,
      description: product.description,
      seller: {
        id: product.seller.id,
        name: product.seller.name,
        email: product.seller.email,
        whatsapp: product.seller.whatsapp,
        university: product.seller.university
      },
      images: imageView.renderMany(product.images),
      value: product.value,


    }
  },
  renderMany(products){
    return products.map(product=> this.render(product))
  }

}