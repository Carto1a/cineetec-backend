import express  from "express";
import usuario  from "./controllers/userController.js";
import gender   from "./controllers/genderController.js";
import actor    from "./controllers/actorController.js";
import director from "./controllers/directorController.js";
import login    from "./controllers/loginController.js"

const routes = express();

routes.use("/user", usuario);
routes.use("/gender", gender);
routes.use("/actor", actor);
routes.use("/director", director);
routes.use("/login", login)

export default routes;