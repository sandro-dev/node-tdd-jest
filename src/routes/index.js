import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ok: true, message: `this is a default route to test`});
});

export default routes;