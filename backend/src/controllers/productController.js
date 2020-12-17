import Product from '../models/Product'
import productsView from '../views/productsView'

export default {
  async index(req, res) {
    const products = await Product.find().populate("seller").sort({data: "desc"})
     
      
    return res.json(productsView.renderMany(products))

  },

  async store(req, res) {
    const { product_name, description, value } = req.body
    const seller = req.headers.seller

    const imgs = req.files.map(file=>{
      return {path: file.filename
      }
    })



    const item = await Product.create({
      product_name,
      description,
      seller: seller,
      images: imgs,
      value
    })
    return res.json(item)

  }
}
