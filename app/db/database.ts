import mongoose from "mongoose";

let cachedDB: mongoose.Connection | null = null;

const connectDB = async () => {
  if (cachedDB) {
    console.log("Usando Cache del cliente!");
    return cachedDB;
  }

  console.log("No client found! Creating a new one");
  const uri = process.env.ATLAS_URI_PROD as string;

  try {
    const connection = await mongoose.connect(uri);
    console.log("trying to connect");
    cachedDB = connection.connection;
    console.log(
      "Conexión a la base de datos establecida:",
      connection.connection.host
    );
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    // Salir de la aplicación con un código de error
  }
};

export default connectDB;
