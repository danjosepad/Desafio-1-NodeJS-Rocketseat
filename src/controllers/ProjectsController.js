import { projects } from "../app/models/Projects";
import * as yup from "yup";

class ProjectsController {
  async index(req, res) {
    return res.json(projects);
  }

  async store(req, res) {
    const schema = yup.object().shape({
      id: yup.number().required(),
      title: yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { id, title } = req.body;

    const newProject = {
      id,
      title,
      tasks: []
    };

    projects = [...projects, newProject];

    return res.json(newProject);
  }

  async update(req, res) {
    const schema = yup.object().shape({
      title: yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Title parameter missing" });
    }

    const { title } = req.body;

    const index = projects.findIndex(
      Project => Project.id === parseInt(req.id)
    );

    projects[index].title = title;

    return res.json(projects[index]);
  }

  async delete(req, res) {
    const findProject = projects.find(
      Project => Project.id === parseInt(req.id)
    );

    projects.splice(findProject, 1);

    return res.json({ message: "Deletado com sucesso!" });
  }
}

export default new ProjectsController();
