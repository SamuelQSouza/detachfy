import Product from '../models/Product'
import productsView from '../views/productsView'

export default {
  async index(req, res) {
    const products = await Product.find().populate("seller").sort({data: "desc"})
     
      
    return res.json(productsView.renderMany(products))

  },
  async show(req, res) {
    const {id} = req.params
 
    const products = await Product.find({ seller: id }).populate("seller").sort({data: "desc"})

      
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

  },
  async delete(req, res) {
    const {id} = req.query
    console.log({id});
    const seller = req.headers.seller
    console.log({seller});

    const product = await Product.find({ _id: id })
    console.log(product);

    if(product[0].seller == seller) {
      await Product.deleteOne({_id: id })
      console.log({true: true})
      return res.json(true)
    }else{
      return res.status(400).json(false)
    }






  }
}
