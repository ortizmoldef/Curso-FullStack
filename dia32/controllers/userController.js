exports.userRegister = async (req,res) =>{
  const { username, password} = req.body
  try{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser= new User({
        username,
        password: hashedPassword
    })

    await newUser.save()
    res.status(201).send('Usuario Registrado')
  } catch(error){
    res.status(500).json({message: 'Error al registrar el usuario' , error})
  }
}

exports.userLogin = async (req,res) =>{
    const {username , password} = req.body
    try{
        const user = await User.findOne({ username })
        if(!user) {
            return res.status(400).json({ message: 'Usuario no encontrado'})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(400).json({ message: 'Contraseña incorrecta'})
        }
        const token = jwt.sign({userID: user._id}, process.env.JWT_SECRET, { expiresIn: '1h'})
        res.json({token})
    }catch(error){
        res.status(500).son({message: 'Error en el inicio de sesion', error})
    }
}