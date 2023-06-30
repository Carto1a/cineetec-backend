import database from "../repository/connection.js";

async function createActor(nome, sexo, dt_nascimento) {
  const sql = `insert into tbl_ator(nome_ator,sexo,dt_nascimento) values(?,?,?)`;
  const data = [nome, sexo, dt_nascimento];

  const conn = await database.connect();
  await conn.query(sql, data);
  conn.end();
}

async function updateActor(id, nome, sexo, dt_nascimento) {
  const sql = `update tbl_ator set nome_ator = ?, sexo = ?, dt_nascimento = ? where id_ator = ?`;
  const data = [nome, sexo, dt_nascimento, id];

  const conn = await database.connect();
  await conn.query(sql, data);
  conn.end();
}

async function deleteActor(id){
	const sql = `delete from tbl_ator where id_ator = ?`;

	const conn = await database.connect();
	await conn.query(sql, id);
	conn.end();
}

export default { createActor, updateActor, deleteActor };