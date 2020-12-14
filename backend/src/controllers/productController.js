import Product from '../models/Product'

export default {
  async index(req, res) {
    const product = await Product.find().populate("seller").sort({data: "desc"})
     
      
    return res.json(product)

  },

  async store(req, res) {
    const { product, description, value } = req.body
    const seller = req.headers.seller


    const item = await Product.create({
      product,
      description,
      seller: seller,
      value
    })
    return res.json(item)

  }
}
