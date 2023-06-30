import express from "express";
import routes from "./routes.js";
import cors from "cors";

const api = express();
const port = 3333

api.use(cors());

//Comunicação front e back
api.use(express.json());

api.use("/", routes);

api.listen(port, () => {
  console.log(`Server is Running... on port ${port}`);
});
