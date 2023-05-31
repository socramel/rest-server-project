import { response, request } from "express";

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

const usuariosPost = (req, res = response) => {
  const { nombre, edad, id, apellido } = req.body;

  res.json({
    msg: "post API - usuariosPost",
    nombre,
    edad,
    id,
    apellido,
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
