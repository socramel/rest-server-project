import { response } from "express";

const usuariosGet = (req, res = response) => {
  res.json({
    msg: "get API - usuariosGet",
  });
};

const usuariosPut = (req, res = response) => {
  res.json({
    msg: "put API, usuariosPut",
  });
};

const usuariosPost = (req, res = response) => {
  res.json({
    msg: "post API - usuariosPost",
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
