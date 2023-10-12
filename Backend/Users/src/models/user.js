const mongoose = require("mongoose");


const usersSchema = new mongoose.Schema(
  {
    name: { type: String, unique: false, required: true},
    lastName: { type: String, unique: false, required: true},
    age: { type: Number, unique: false, required: true},
    address: { type: String, unique: false, required: true},
    phone: { type:Number, unique: true, required: true},
    username: { type: String, unique: true, required: true},
    email: { type: String, unique: true, required: true},
    password: {
      type: String,
      required: true,
      unique: false
    },

  },
  { timestamps: true }
);

const User = mongoose.model("User", usersSchema);

module.exports = User;
