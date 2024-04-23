import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const singUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const hashPassword = await bcrypt.hash(password, 8);
    const createUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createUser.save();
    res.status(201).json({
      message: "user created success",
      user: {
        _id: createUser._id,
        fullname: createUser.fullname,
        email: createUser.email,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json("failed");
  }
};
// user login controler
export const login = async (req, res) => {
  try {
    const { email, password } = await req.body;
    const userData = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!userData || !isMatch) {
      res.status(400).json("Invalid password and username!");
    } else {
      res.status(200).json({
        message: "success to Login",
        user: {
          _id: userData._id,
          fullname: userData.fullname,
          email: userData.email,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "internal server error!" });
  }
};
