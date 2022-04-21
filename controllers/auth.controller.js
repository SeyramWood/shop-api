const bcrypt = require('bcryptjs/dist/bcrypt')
const User = require('../models/user.model')
const {registerSchema, loginSchema} = require('../utils/validation')

const register = async (req, res) =>{
  
    const {value, error} = registerSchema.validate(req.body)
    if (error) {
        return res.status(400).json(error)
    }
    let user =  await User.findOne({email:value.email});
    if (user) {
        return res.status(409).json({msg: 'Email already in use.'})
    }
    const hashedPass = await bcrypt.hash(value.password, 10)
    console.log(hashedPass)
    res.send(hashedPass)
}
const login = async (req, res) =>{

    const {value, error} = loginSchema.validate(req.body)
    if (error) {
        return res.status(400).json(error)
    }
    let user =  await User.findOne({email:value.email});
    if (!user) {
        return res.status(400).json({msg: 'Invalid credentials.'})
    }
    const isMatched = await bcrypt.compare(value.password, user.password)
    if (!isMatched) {
        return res.status(400).json({msg: 'Invalid credentials.'})
    }
    res.status(200).json(user)
    
}

module.exports = {register, login}