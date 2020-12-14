import User from '../models/User'
import bcrypt from 'bcrypt'

export default {
  async store(req, res) {
    const { name, email, whatsapp, university, password } = req.body
    const userExists = await User.findOne({ email: email })
    if (userExists) {
      return res.json(userExists)
    }
    else {
      const user = await User.create({
        name,
        email,
        whatsapp,
        password: await bcrypt.hash(password, 10),
        university,
      })
      return res.json(user)
    }
  }
}
