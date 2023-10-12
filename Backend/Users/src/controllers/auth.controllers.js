const User = require("../models/user.js");
const bcrypt = require("bcrypt");
//importar token
const { createAccessToken } = require('../libs/jwt.js');


const register = async (req, res) => {
  const { name, lastName, age, address, phone, username, email, password, } = req.body;

  try {

    const userFoundEmail= await User.findOne({email});
    if(userFoundEmail) return res.status(400).json(["The email already exists"]);
    const userFound= await User.findOne({phone});
    if(userFound) return res.status(400).json(["The phone already exists"]);
    const userFoundUserName= await User.findOne({username});
    if(userFoundUserName) return res.status(400).json(["The username already exists"]);

   
    //incriptar la password
    const passwordHash = await bcrypt.hash(password, 10);


    const newUser = new User({
      name, lastName, age, address, phone, username, email, password: passwordHash,
    });

    const userSaved = await newUser.save();
    //importar token
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie('token', token);


    res.json({
      id: userSaved._id,
      name: userSaved.name,
      lastName: userSaved.lastName,
      age: userSaved.age,
      address: address.address,
      phone: userSaved.phone,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};



const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //buscar si el mail/usuario existe
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });
    //comparar la contraseña
    const matchedPassword = await bcrypt.compare(password, userFound.password);
    if (!matchedPassword) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    // crear y devolver un token
    const token = await createAccessToken({ id: userFound._id });
    res.cookie('token', token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//Deslogearse o cerrerar el token

const logout = (req, res) => {
  res.cookie('token', '', { expires: new Date(0) });
  return res.sendStatus(200);
};

const profile = async (req, res) => {
  const userFound =  await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: 'User not found' });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });

};




module.exports = { register, login, logout, profile };
