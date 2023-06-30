import database from "../repository/connection.js";

async function createGender(genero) {
  const sql = `insert into tbl_genero(genero) values(?)`;

  const conn = await database.connect();
  await conn.query(sql, genero);
  conn.end();
}

async function updateGender(id, genero) {
  const sql = `update tbl_genero set genero = ? where id_genero = ?`;
  const data = [genero, id];

  const conn = await database.connect();
  await conn.query(sql, data);
  conn.end();
}

async function deleteGender(id){
	const sql = `delete from tbl_genero where id_genero = ?`;

	const conn = await database.connect();
	await conn.query(sql, id);
	conn.end();
}

export default { createGender, updateGender, deleteGender };