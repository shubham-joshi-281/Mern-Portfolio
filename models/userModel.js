import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, "Name Is Required"],
    },
    email: {
      type: String,
      unique: true,
      require: [true, "Email Is Required"],
    },
    message: {
      type: String,
      trim: true,
      require: [true, "Message Is Required"],
    },
  },
  { timestamps: true }
);
const userModel = mongoose.model("user", userSchema);

export default userModel;
