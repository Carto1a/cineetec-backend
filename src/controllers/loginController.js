import express from "express"
import db from "../services/loginService.js"
import { generateToken } from "../helpers/userfeatures.js";

const route = express.Router();

route.post('/', async(request, response) => {
	const {email, password} = request.body;

	try {
		const users = await db.login(email, password);
		if(users){
			const id = users.id_user;
			const email = users.email;
			const nome = users.nome;
			const token = generateToken(id, nome, email)

			response.status(200).send({message: 'Login efetuado com sucesso', token});
		} else {
			response.status(401).send({message: 'Login incorreto'})
		}
	} catch (error) {
		response.status(500).send({message: err})
	}
})

route.get("/", (request, response) => {
  response.status(200).send("Entrei no método get login");
});

export default route