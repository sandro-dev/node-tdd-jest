import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "../../config/auth";

export default async (request, response, next) => {
  /**
   * Verificar a existência do token
   */
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response
      .status(401)
      .json({ error: "Authentication Error - O token não existe!" });
  }

  /**
   * split para pegar apenas o token
   */
  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // request.userId = decoded.id;
    request.userEmail = decoded.email;
    console.log(
      "[authorization microservice] ###",
      request.userId,
      request.userEmail
    );
    return next();
  } catch (err) {
    return response.status(401).json({ error: "Token inválido" });
  }
};
