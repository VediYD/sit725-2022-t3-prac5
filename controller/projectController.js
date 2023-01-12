import project from "../models/project.js";

// renaming as the use of `as` is typscript specific
const projectModule = project;

// get existing project
const retrieveProject = (req, res) => {
  projectModule.getProjects((err, result) => {
    if (err) {
      res.json({
        statusCode: 400,
        message: err,
      });
    } else {
      res.json({
        statusCode: 200,
        message: "Success",
        data: result,
      });
    }
  });
};

// create new projects
const createProject = (req, res) => {
  console.log("New project added", req.body);
  var newProject = req.body;
  projectModule.insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({
        statusCode: 400,
        message: err,
      });
    } else {
      res.json({
        statusCode: 200,
        message: "project added successfully",
        data: result,
      });
    }
  });
};

export default { retrieveProject, createProject };
