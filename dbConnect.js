// installed imports
import mongodb from "mongodb";
import dotenv from "dotenv";

// custom module imports
import enc from "./public/js/enc.js";

dotenv.config();

// connection to mongodb
const uri = enc.dec(enc.sec);
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true });

// creating collection object
client.connect((err, db) => {
  if (!err) {
    console.log("MongoDb Connected Successfully");
  } else {
    console.log("DB Error: ", err);
    process.exit(1);
  }
});

export default { client };
