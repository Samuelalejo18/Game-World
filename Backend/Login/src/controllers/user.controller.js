const User = require("../models/user");

const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    //logica para crear usuario
    const {name, lastName, age,address, phone, username, email, password, } = req.body; 
    //crear la instancia de el usuario
    const user = new User({
      name:name,
      lastName: lastName, 
       age:age, 
      address:address,
      phone:phone,
      username: username,
      email: email,
      password: password,
     
    });

    ////encriptar la contraseña sin método estatico
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt); // user.encryptPassword(password)

    //encriptar la contraseña CON método estatico
    user.password = await User.encryptPassword(password);

    //guardar usuario en base de datos
    const newUser = await user.save();

    res.status(200).json({
      _id: newUser._id,
      username: newUser.username,
      mail: newUser.email,
     
    });
    
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = { createUser };
