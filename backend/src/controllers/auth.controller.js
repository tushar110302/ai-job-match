import { Blacklist } from "../models/blacklist.model.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const _generateToken = (user) => {
  return jwt.sign(
    {
      id: user?._id,
      username: user?.username,
      email: user?.email,
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
    if (!v.trim()) return "Password is required\n";
    if (v.trim().length < 6)
      return "\nPassword must be at least 6 characters\n";
    return "";
  },
};

const _validateInputs = (data, inputFields) => {
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

  const error = _validateInputs(req.body, inputFields);
  if (error) {
    return res.status(400).json({
      success: false,
      error,
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

  const token = _generateToken(user);

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

  const error = _validateInputs(req.body, inputFields);

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

  const token = _generateToken(user);

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

const logoutController = async (req, res) => {
  const token =
    req.cookies?.token ||
    req.body?.token ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (token) {
    await Blacklist.create({ token });
  }

  return res.clearCookie("token").status(200).json({
    success: true,
    message: "User logged out successfully",
  });
};

const getUser = async (req, res) => {
  const userId = req.user?.id;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({
      success: false,
      error: "User not found.",
    });
  }

  return res.status(200).json({
    success: true,
    user: {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    message: "User Details fetched successfully.",
  });
};

export { signUpController, loginController, logoutController, getUser };
