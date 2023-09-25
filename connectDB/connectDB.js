import mongoose from "mongoose";

const CONNECT_DB = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE_URL);
    console.log(
      `Database connnected successfully... ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
};
export default CONNECT_DB;
