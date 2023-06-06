import { Router } from "express";
import {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} from "../controllers/usuarios.js";
import { check } from "express-validator";

import validarCampos from "../middlewares/validar-campos.js";
import {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
} from "../helpers/db-validators.js";

const router = Router();

// GET
router.get("/", usuariosGet);

// PUT
router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    check("role").custom(esRoleValido),
    validarCampos,
  ],
  usuariosPut
);

// POST
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser mayor a 6 caracteres").isLength({
      min: 6,
    }),
    check("correo", "El correo no es válido").isEmail(),
    check("correo").custom(emailExiste),
    //check("role", "No es un role válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("role").custom(esRoleValido),
    validarCampos,
  ],
  usuariosPost
);

// DELETE
router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  usuariosDelete
);

// PATCH
router.patch("/", usuariosPatch);

export default router;
