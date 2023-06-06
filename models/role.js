import { Schema, model } from "mongoose";

const RoleSchema = Schema({
  role: {
    type: String,
    required: [true, "El role es obligatorio"],
  },
});

export default model("Role", RoleSchema);
