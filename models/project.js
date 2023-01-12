import dbConnect from "../dbConnect.js";

// initialize collections ref
let projectCollection;

setTimeout(() => {
  projectCollection = dbConnect.client.db().collection("Whales");
}, 2000);

// get projects
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

// insert / create project
const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

export default { getProjects, insertProjects };
