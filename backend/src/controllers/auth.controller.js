import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
};

const inputValidator = {
  username: (v = "") => {
    if (!v.trim()) return "Username is required\n";
    if (v.trim().length < 3 || v.trim().length > 40)
      return "Username must be at least 3 characters\n";
    return "";
  },
  email: (v = "") => {
    if (!v.trim()) return "\nEmail is required\n";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return "Enter a valid email address\n";
    return "";
  },
  password: (v = "") => {
    if (v.length < 6) {
      return "\nPassword must be at least 6 characters\n";
    }
    return "";
  },
};

const validateInputs = (data, inputFields) => {
  let error = "";
  inputFields.forEach((field) => {
    const e = inputValidator[field](data[field]);
    error = error + e;
  });

  return error;
};

const signUpController = async (req, res) => {
  const { username, email, password } = req.body;

  // if (!username || !email || !password) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "All fields are required",
  //   });
  // }

  const inputFields = ["username", "email", "password"];

  const error = validateInputs(req.body, inputFields);
  // inputFields.forEach((field) => {
  //   const e = inputValidator[field](req.body[field]);
  //   e && (error[field] = e);
  // });

  if (error) {
    return res.status(400).json({
      success: false,
      error
    });
  }

  const isPresent = await User.findOne({ $or: [{ username }, { email }] });

  if (isPresent) {
    return res.status(400).json({
      success: false,
      error: "Username or email already exists",
    });
  }

  const user = await User.create({
    username,
    email,
    password,
  });
  const token = generateToken(user);

  return res
    .cookie("token", token, { httpOnly: true })
    .status(201)
    .json({
      success: true,
      message: "User created successfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  // if (!email || !password) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "All fields are required",
  //   });
  // }

  const inputFields = ["email", "password"];

  const error = validateInputs(req.body, inputFields);
  // inputFields.forEach((field) => {
  //   const e = inputValidator[field](req.body[field]);
  //   e && (error[field] = e);
  // });

  if (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      success: false,
      error: "User not found with this email.",
    });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      error: "Invalid Password",
    });
  }

  const token = generateToken(user);

  return res
    .cookie("token", token, { httpOnly: true })
    .status(200)
    .json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
};

export { signUpController, loginController };
