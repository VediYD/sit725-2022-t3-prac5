// installed imports
import express from "express";

// custom module imports
import controller from "../controller/index.js";

// initializing router obj
var router = express.Router();

router.get("/", (req, res) => {
  controller.projectController.retrieveProject(req, res);
});

router.post("/", (req, res) => {
  controller.projectController.createProject(req, res);
});

export default router;
