import jwt from "jsonwebtoken";
import * as Yup from "yup";
import authConfig from "../../config/auth";
import User from "../models/User";

class SessionController {
  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Informe um email válido")
          .required("O email é obrigatório"),
        password: Yup.string().required("A senha é obrigatória"),
      });

      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        return response
          .status(405)
          .json({ error: "Falha na validação dos dados", validationErrors });
      }
    }

    const { email, password } = request.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.status(400).json({ error: "Usuário não foi encontrado" });
    }

    if (!(await user.checkPassword(password))) {
      return response
        .status(401)
        .json({ error: "O usuário e senha informados não correspondem " });
    }

    const { id, name, phone } = user;

    const token = `Bearer ${jwt.sign({ id, email }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    })}`;

    return response.json({
      user: { id, name, email, phone },
      token,
    });
  }
}
export default new SessionController();
