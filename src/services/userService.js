import database from "../repository/connection.js";

async function createUser(name, email, password, adm) {
  const sql = `insert into tbl_user(nome, email, senha, adm) values(?,?,?,?)`;
  const data = [name, email, password, adm];

  const conn = await database.connect();
  await conn.query(sql, data);
  conn.end();
}

async function updateUser(id, name, email, password, adm) {
  const sql = `update tbl_user set nome = ?, email = ?, senha = ?, adm = ? where id_user = ?`;
  const data = [name,email,password,adm,id];

  const conn = await database.connect();
  await conn.query(sql, data);
  conn.end();
}

async function deleteUser(id){
	const sql = `delete from tbl_user where id_user = ?`;

	const conn = await database.connect();
	await conn.query(sql, id);
	conn.end();
}

export default { createUser, updateUser, deleteUser };