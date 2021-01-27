import { Router } from "express";

import SessionController from "../app/controllers/SessionController";

const sessionsRoutes = Router();

// Cria uma sessão para o usuário
sessionsRoutes.post("/", SessionController.store);

export default sessionsRoutes;
