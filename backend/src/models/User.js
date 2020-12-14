import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    whatsapp: String,
    university: String
})

const User = mongoose.model('user', UserSchema)

export default User