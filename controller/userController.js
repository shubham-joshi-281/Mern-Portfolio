import userModel from "../models/userModel.js";

const registerController = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name) {
      return res.status(404).send({
        success: false,
        message: "User Name Is Required",
      });
    }
    if (!email) {
      return res.status(404).send({
        success: false,
        message: "User Email Is Required",
      });
    }
    if (!message) {
      return res.status(404).send({
        success: false,
        message: "User Message Is Required",
      });
    }
    const user = new userModel({ name, email, message });
    await user.save();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in User Conroller",
      error,
    });
  }
};

export default registerController;
