import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import usuariosRoutes from "../routes/usuarios.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

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
