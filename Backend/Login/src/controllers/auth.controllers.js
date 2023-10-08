const User = require("../models/User");

const jwt = require("jsonwebtoken");

const signUpHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    //crear un objeto instancia de Usuario
    const newUser = new User({

      email,
      password,
    });

    

    //guardo el usuario en la DB y me genero una constante con el
    const savedUser = newUser.save();

    //Crear un token
    const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
      expiresIn: 86400, //24 hours
    });

    console.log(token);

    return res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const signInHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    //buscar si el mail/usuario existe
    const userFound = await User.findOne({ email: email });
    if (!userFound) {
      res.status(400).json({ error: "User Not Found - Usuario incorrecto" });
    }

    //comparar la contraseña
    const matchedPassword = await User.comparePassword(
      password,
      userFound.password
    );
    if (!matchedPassword) {
      res
        .status(400)
        .json({ error: "Incorrect Password - Contraseña incorrecta" });
    }

    // crear y devolver un token

    const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
      expiresIn: 86400, //24 hours
    });

    res.status(200).send({ token: token,  userFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { signInHandler, signUpHandler };
