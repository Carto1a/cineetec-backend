import database from "../repository/connection.js";

async function createDirector(nome, nacionalidade, dt_nascimento, sexo) {
  const sql = `insert into tbl_diretor(nome_diretor,nacionalidade,dt_nascimento,sexo) values(?,?,?,?)`;
  const data = [nome,nacionalidade,dt_nascimento,sexo];

  const conn = await database.connect();
  await conn.query(sql, data);
  conn.end();
}

async function updateDirector(id, nome, nacionalidade, dt_nascimento, sexo) {
  const sql = `update tbl_diretor set nome_diretor = ?, nacionalidade = ?, dt_nascimento = ?, sexo = ? where id_diretor = ?`;
  const data = [nome, nacionalidade, dt_nascimento, sexo, id];

  const conn = await database.connect();
  await conn.query(sql, data);
  conn.end();
}

async function deleteDiretor(id){
	const sql = `delete from tbl_diretor where id_diretor = ?`;

	const conn = await database.connect();
	await conn.query(sql, id);
	conn.end();
}

export default { createDirector, updateDirector, deleteDiretor };