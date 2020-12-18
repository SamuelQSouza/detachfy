import bcrypt from 'bcrypt'
import User from '../models/User'

export default {
  async create(request, response) {
    const { formEmail, formPassword } = request.body;

    try {
      const { id, name, email, whatsapp, password, university } = await User.findOne({ email: formEmail })


      if (!id) {
        return response.status(400).json({ error: 'No user found with this ID' });
      } else {
        bcrypt.compare(formPassword, password, (erro, batem) => {
          if (batem) {
            return response.json({ id, name, email, whatsapp, university })
          } else {
            return response.json({ message: "email ou senha incorretos" })
          }
        })
      }
    } catch (error) {
      return response.status(400).json({ message: "email ou senha incorretos" })
    }



  }
}