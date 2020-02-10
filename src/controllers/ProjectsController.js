const projects = {};

class ProjectsController {
  async index(res) {
    return res.json(projects);
  }

  async store(req, res) {
    const { id, title } = req.body;

    const newProject = {
      id,
      title,
      tasks: []
    };

    const projects = [...projects, newProject];

    return res.json(newProject);
  }

  async update(req, res) {
    const { title } = req.body;

    const findUser = users.find(User => User.id === parseInt(req.id));

    return res.json(findUser);
  }

  async delete(req, res) {
    const findUser = users.find(User => User.id === parseInt(req.id));

    projects.splice(findUser, 1);

    return res.json({ message: "Deletado com sucesso!" });
  }

  async storeTasks(req, res) {}
}

export default new ProjectsController();
