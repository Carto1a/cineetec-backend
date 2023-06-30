import express, { request, response } from "express";
import db from "../services/userService.js";

const route = express.Router();

route.post("/", async (request, response) => {
  const { name, email, password, adm } = request.body;
  try {
    await db.createUser(name, email, password, adm);
    response.status(200).send({ message: "Salvo com sucesso" });
  } catch (error) {
    response.status(500).send({ message: error });
  }
});

route.put("/", async (request, response) => {
  const { id, name, email, password, adm } = request.body;

  try {
    await db.updateUser(id, name, email, password, adm);
    response.status(200).send({ message: "Mudou com sucesso, nice" });
  } catch (error) {
    response.status(500).send({ message: error });
  }
});

// route.delete("/", async (request, response) => {
//   const { id } = request.body;

//   try {
//     await db.deleteUser(id);
//     response.status(200).send({message: "foi apagado"});
//   } catch (error) {
//     response.status(500).send({message: error});

//   }
// });

route.delete("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    await db.deleteUser(id);
    response.status(200).send({message: "foi apagado"});
  } catch (error) {
    response.status(500).send({message: error});

  }
});

route.get("/", (request, response) => {
  response.status(200).send("Entrei no método get user");
});

export default route;
