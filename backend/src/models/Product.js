import mongoose, {Schema} from 'mongoose'

const ProductSchema = new Schema({
    product_name: String,
    description: String,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    images: [
        {path: String}
    ],

    value: String,
})

module.exports = mongoose.model('Product', ProductSchema)