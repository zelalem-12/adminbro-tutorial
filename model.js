const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar_url: { type: String },
  bio: { type: String },
});

module.exports = User = mongoose.model("User", userSchema)

