import express, { request, response } from "express";
import db from "../services/genderService.js";

const route = express.Router();

route.post("/", async (request, response) => {
  const { gender } = request.body;
  try {
    await db.createGender(gender);
    response.status(200).send({ message: "Salvo com sucesso" });
  } catch (error) {
    response.status(500).send({ message: error });
  }
});

route.put("/", async (request, response) => {
  const { id, gender } = request.body;

  try {
    await db.updateGender(id, gender);
    response.status(200).send({ message: "Mudou com sucesso, nice" });
  } catch (error) {
    response.status(500).send({ message: error });
  }
});

// route.delete("/", async (request, response) => {
//   const { id } = request.body;

//   try {
//     await db.deleteGender(id);
//     response.status(200).send({message: "foi apagado"});
//   } catch (error) {
//     response.status(500).send({message: error});

//   }
// });

route.delete("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    await db.deleteGender(id);
    response.status(200).send({message: "foi apagado"});
  } catch (error) {
    response.status(500).send({message: error});

  }
});

route.get("/", (request, response) => {
  response.status(200).send("Entrei no método get do gender");
});

export default route;
