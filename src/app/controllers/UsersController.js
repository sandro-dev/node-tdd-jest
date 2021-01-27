import { v4 as uuid } from "uuid";
import validator from "validator";
import * as Yup from "yup";
import User from "../models/User";

class UsersController {
  // GET list
  async index(request, response) {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    return response.json(users);
  }

  // GET view
  async view(request, response) {
    const { id } = request.params;

    if (!validator.isUUID(id)) {
      return response
        .status(400)
        .json({ ok: false, error: `O ID informado é inválido` });
    }

    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return response
        .status(404)
        .json({ ok: false, error: `O usuário informado não existe` });
    }

    return response.json(user);
  }

  // POST create
  async store(request, response) {
    const { name, email, password, phone } = request.body;

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .email("Informe um email válido")
          .required("O email é obrigatório"),
        password: Yup.string()
          .required("A senha é obrigatória")
          .test(
            "strong-password",
            "Defina uma senha mais forte: Pelo menos 8 caracteres, com pelo menos 1 letra minúscula, 1 maiúscula e pelo menos 1 número",
            (value) => !!validator.isStrongPassword(value, { minSymbols: 0 })
          ),
        phone: Yup.string()
          .notRequired()
          .test(
            "verify-brazilian-phone",
            "Defina o telefone no seguinte formato: (DDD) + Número -- exemplo.: 71 988928742",
            (value) => !!validator.isMobilePhone(value, "pt-BR")
          ),
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

    if (!name || !email || !password) {
      return response.status(400).json({
        ok: false,
        error: `Informe todos os campos obrigatórios`,
      });
    }

    /**
     * Verifica se o email já foi registrado
     */
    const emailExists = await User.findOne({ where: { email } });

    if (emailExists) {
      return response
        .status(400)
        .json({ ok: false, error: `O email informado já está registrado` });
    }

    const customerObj = {
      id: uuid(),
      name,
      email,
      password,
      phone,
    };

    const user = await User.create(customerObj);
    delete user.password;

    return response.json(user);
  }

  // PUT update
  async update(request, response) {
    const { id } = request.params;

    if (!validator.isUUID(id)) {
      return response
        .status(400)
        .json({ ok: false, error: `O ID informado é inválido` });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return response
        .status(404)
        .json({ ok: false, error: `O usuário informado não existe` });
    }

    try {
      const schema = Yup.object().shape({
        name: Yup.string(),
        email: Yup.string().email("Informe um email válido"),
        password: Yup.string()
          .required("A senha é obrigatória")
          .test(
            "strong-password",
            "Defina uma senha mais forte: Pelo menos 8 caracteres, com pelo menos 1 letra minúscula, 1 maiúscula e pelo menos 1 número",
            (value) => !!validator.isStrongPassword(value, { minSymbols: 0 })
          ),
        phone: Yup.string()
          .notRequired()
          .test(
            "verify-brazilian-phone",
            "Defina o telefone no seguinte formato: (DDD) + Número | ex.: 71 988928742",
            (value) => !!validator.isMobilePhone(value, "pt-BR")
          ),
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

    const { email } = request.body;

    /**
     * Verificação de duplicidade de email
     */
    if (email) {
      const emailExists = await User.findOne({
        where: { email },
      });

      if (emailExists && emailExists.id !== id) {
        return response.status(400).json({
          ok: false,
          error: `O email informado já está registrado em outra conta`,
        });
      }
    }

    const customerUpdated = await user.update(request.body);

    return response.json(customerUpdated);
  }

  // Delete
  async delete(request, response) {
    const { id } = request.params;

    if (!validator.isUUID(id)) {
      return response
        .status(400)
        .json({ ok: false, error: `O ID informado é inválido` });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return response
        .status(404)
        .json({ ok: false, error: `O usuário informado não existe` });
    }

    await User.destroy({ where: { id } });

    return response.status(204).send();
  }
}

export default new UsersController();
