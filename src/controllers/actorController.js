import express, { request, response } from "express";
import db from "../services/actorService.js";

const route = express.Router();

route.post("/", async (request, response) => {
  const { nome, sexo, dt_nascimento } = request.body;
  try {
    await db.createActor(nome, sexo, dt_nascimento);
    response.status(200).send({ message: "Salvo com sucesso" });
  } catch (error) {
    response.status(500).send({ message: error });
  }
});

route.put("/", async (request, response) => {
  const { id, nome, sexo, dt_nascimento } = request.body;

  try {
    await db.updateActor(id, nome, sexo, dt_nascimento);
    response.status(200).send({ message: "Mudou com sucesso, nice" });
  } catch (error) {
    response.status(500).send({ message: error });
  }
});

// route.delete("/", async (request, response) => {
//   const { id } = request.body;

//   try {
//     await db.deleteActor(id);
//     response.status(200).send({message: "foi apagado"});
//   } catch (error) {
//     response.status(500).send({message: error});

//   }
// });

route.delete("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    await db.deleteActor(id);
    response.status(200).send({message: "foi apagado"});
  } catch (error) {
    response.status(500).send({message: error});

  }
});

route.get("/", (request, response) => {
  response.status(200).send("Entrei no método get actor");
});

export default route;