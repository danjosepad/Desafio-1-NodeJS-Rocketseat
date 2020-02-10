import { projects } from "../app/models/Projects";
import * as yup from "yup";

class TasksController {
  async store(req, res) {
    const schema = yup.object().shape({
      title: yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Title parameter missing" });
    }

    const { title: newTask } = req.body;

    const index = projects.findIndex(
      Project => Project.id === parseInt(req.id)
    );

    projects[index].tasks = [...projects[index].tasks, newTask];

    return res.json(projects[index]);
  }
}

export default new TasksController();
