import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la inicialización de la base de datos");
  }
};

export default dbConnection;
