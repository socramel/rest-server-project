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

const router = Router();

router.get("/", usuariosGet);
router.put("/:id", usuariosPut);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser mayor a 6 caracteres").isLength({
      min: 6,
    }),
    check("correo", "El correo no es válido").isEmail(),
    check("role", "No es un role válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validarCampos,
  ],
  usuariosPost
);
router.delete("/", usuariosDelete);
router.patch("/", usuariosPatch);

export default router;
