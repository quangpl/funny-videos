const userSchema = require("../schemas/user");
const mongoose = require("mongoose");
const userModel = mongoose.model("User", userSchema);
const bcrypt = require("bcrypt");


userModel.register = async ({ email, password }) => {
  const newUser = new userModel({
    email,
    password: bcrypt.hashSync(password),
  });
  return await newUser.save();
};

userModel.login = async ({ email, password }) => {
const user = await  userModel.findOne({
    email
}).exec();
if(user){
return bcrypt.compareSync(password, user.password) ? user : undefined;
}
else {
    return undefined;
}
};




