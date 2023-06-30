import jwt from 'jsonwebtoken'

function generateToken(id_login, user_name, email_user){
	const secret = "dsdasdas"
	return jwt.sign({infoUser: { id_login, userName: user_name, email: email_user }
									}, secret, {expiresIn: 60 * 60 * 5})
}

export { generateToken }