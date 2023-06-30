import express, { request, response } from "express";
import db from "../services/directorService.js";

const route = express.Router();

route.post("/", async (request, response) => {
  const { nome, nacionalidade, dt_nascimento, sexo } = request.body;
  try {
    await db.createDirector(nome, nacionalidade, dt_nascimento, sexo);
    response.status(200).send({ message: "Salvo com sucesso" });
  } catch (error) {
    response.status(500).send({ message: error });
  }
});

route.put("/", async (request, response) => {
  const { id, nome, nacionalidade, dt_nascimento, sexo } = request.body;

  try {
    await db.updateDirector(id, nome, nacionalidade, dt_nascimento, sexo);
    response.status(200).send({ message: "Mudou com sucesso, nice" });
  } catch (error) {
    response.status(500).send({ message: error });
  }
});

// route.delete("/", async (request, response) => {
//   const { id } = request.body;

//   try {
//     await db.deleteDiretor(id);
//     response.status(200).send({message: "foi apagado"});
//   } catch (error) {
//     response.status(500).send({message: error});

//   }
// });

route.delete("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    await db.deleteDiretor(id);
    response.status(200).send({message: "foi apagado"});
  } catch (error) {
    response.status(500).send({message: error});

  }
});

route.get("/", (request, response) => {
	console.log(request.body);
  response.status(200).send("Entrei no método get director");
});

export default route;
