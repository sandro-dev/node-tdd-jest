import { Router } from "express";

import sessionRoutes from "./session.routes";
import usersRoutes from "./users.routes";

import authMiddleware from "../app/middlewares/auth";

const routes = Router();

routes.get("/", (request, response) =>
  response.json({
    ok: true,
    message: "[server] - This is a default route to test! 😉",
  })
);

routes.use("/session", sessionRoutes);
routes.use("/dashboard", (request, response) =>
  response.json({ ok: true, message: `the future dashboard route 😉` })
);

routes.use(authMiddleware);

routes.use("/settings", (request, response) =>
  response.json({ ok: true, message: `the future settings route 😉` })
);
routes.use("/users", usersRoutes);

export default routes;
