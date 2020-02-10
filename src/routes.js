import { Router } from "express";
import ProjectsController from "./controllers/ProjectsController";
import TasksController from "./controllers/TasksController";

import validateId from "./app/middlewares/validateId";

const routes = new Router();

routes.get("/projects", ProjectsController.index);
routes.post("/projects", ProjectsController.store);

routes.put("/projects/:id", validateId, ProjectsController.update);
routes.delete("/projects/:id", validateId, ProjectsController.delete);

routes.post("/projects/:id/tasks", validateId, TasksController.store);

export default routes;
