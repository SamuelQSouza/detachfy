import mongoose, {Schema} from 'mongoose'

const ProductSchema = new Schema({
    product: String,
    description: String,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    value: String,
})

module.exports = mongoose.model('Product', ProductSchema)