import { projects } from "../models/Projects";

export default (req, res, next) => {
  const { id } = req.params;

  console.log(id);
  const findProject = projects.find(Project => Project.id === parseInt(id));

  if (!findProject) {
    return res.status(400).send({ error: "Project does not exist" });
  }

  req.id = id;

  return next();
};
