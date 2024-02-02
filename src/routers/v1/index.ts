import { Router } from "express";
import { Role } from "entities/role.entity";
import dataSource from "utils/database";

const router = Router();
// User
router.get("/users", (req, res) => { });

// Role
router.get("/roles", async (req, res) => {
  const repository = dataSource.getRepository(Role)
  const roles = await repository.find()
  res.send(roles)
});

export default router;