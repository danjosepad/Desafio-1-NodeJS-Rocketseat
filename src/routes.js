import { Router } from "express";
import ProjectsController from "./controllers/ProjectsController";

const routes = new Router();

routes.post("/projects", ProjectsController.store);

routes.get("/projects", ProjectsController.index);

routes.put("projects/:id", ProjectsController.update);

routes.delete("projects/:id", ProjectsController.delete);

routes.post("projects/:id/tasks", ProjectsController.storeTasks);

export default routes;
