import { Router } from "express";
import { loginController } from "src/controllers/auth/login.controller";
import { createUserController, findAllUserController, findOneUserController } from "src/controllers/user";

import { Role } from "src/entities/role.entity";
import dataSource from "src/utils/database";
import { AuthVerify } from "../../middleware/jwt-auth.middleware";

const router = Router();
// Auth
router.post("/auth/login", loginController)

// User
router.get("/users", AuthVerify, findAllUserController);
router.get("/users/:id", findOneUserController);
router.post("/users", createUserController);

// Role
router.get("/roles", async (req, res) => {
  const repository = dataSource.getRepository(Role)
  const roles = await repository.find()
  res.send(roles)
});

export default router;