const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// import bcrypt from "bcryptjs";

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, unique: false, required: true, },
    lastName: { type: String, unique: false, required: true, },
    age: { type: Number, unique: false, required: true, },
    address: { type: String, unique: false, required: true, },
    phone: { type: String, unique: true, required: true, },
    username: { type: String, unique: true,required: true, },
    email: { type: String, unique: true, required: true, },
    password: {
      type: String,
      required: true,
      unique: false,
    },

  },
  { timestamps: true }
);

usersSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); //cantidad de rondas que va a dar el encriptado
  return await bcrypt.hash(password, salt);
}; //lo que encripto

usersSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword); //si o no
};

const User = mongoose.model("User", usersSchema);

module.exports = User;
