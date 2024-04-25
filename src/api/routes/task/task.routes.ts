import TaskController from "@/api/controllers/task/task.controller";
import authMiddleware from "@/api/middlewares/auth.middleware";
import { Router } from "express";

const taskRoutes = Router();

taskRoutes.get("/", authMiddleware, TaskController.index);
taskRoutes.get("/:id", authMiddleware, TaskController.show);
taskRoutes.post("/", authMiddleware, TaskController.store);
taskRoutes.put("/:id", authMiddleware, TaskController.update);
taskRoutes.delete("/:id", authMiddleware, TaskController.delete);

export default taskRoutes;
