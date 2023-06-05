import { response, request } from "express";
import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs";

const usuariosGet = (req = request, res = response) => {
  const { query, nombre, apikey } = req.query;

  res.json({
    msg: "get API - usuariosGet",
    query,
    nombre,
    apikey,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API, usuariosPut",
    id,
  });
};

const usuariosPost = async (req, res = response) => {
  const { nombre, correo, password, role } = req.body;
  const usuario = new Usuario({ nombre, correo, password, role });

  // Verificar si el correo existe
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "Ese correo ya está registrado",
    });
  }

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  // Grabar en DB
  await usuario.save();

  res.json({
    usuario,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - usuariosDelete",
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - usuariosPatch",
  });
};

export {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
