import { Router } from "express";
import { createUserController } from "src/controllers/user/create-user.controller";
import { Role } from "src/entities/role.entity";
import dataSource from "src/utils/database";

const router = Router();
// User
router.post("/users", createUserController);

// Role
router.get("/roles", async (req, res) => {
  const repository = dataSource.getRepository(Role)
  const roles = await repository.find()
  res.send(roles)
});

export default router;