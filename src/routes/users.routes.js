import { Router } from "express";

import UsersController from "../app/controllers/UsersController";

const usersRoutes = Router();

// Lista todos os usuarios
usersRoutes.get("/", UsersController.index);

// Retorna informações do usuário correspondente ao ID
usersRoutes.get("/:id", UsersController.view);

// Cria um novo usuário
usersRoutes.post("/", UsersController.store);

// Atualiza informações do usuário correspondente ao ID
usersRoutes.put("/:id", UsersController.update);

// Deleta o usuário correspondente ao ID
usersRoutes.delete("/:id", UsersController.delete);

export default usersRoutes;
