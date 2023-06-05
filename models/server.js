import express from "express";
import "dotenv/config.js";
import cors from "cors";
import usuariosRoutes from "../routes/usuarios.js";
import dbConnection from "../db/config.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // Conectar a base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del Body
    this.app.use(express.json());

    // Directorio Público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, usuariosRoutes);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log("Servidor funcionando en el puerto", this.port)
    );
  }
}

export default Server;
