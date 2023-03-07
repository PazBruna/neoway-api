import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";

import routes from "./http/routes/index";
import schemaValidator from "./middlewares/schemaValidator";
import errorHandler from "./middlewares/errorHandler";

import { appConfig } from "./config/appConfig";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());


/*
 *
 *  Handler de rotas
 */
for (const group of routes.reverse()) {
  const router = Router();
  for (const route of group.routes) {
    route.middlewares = route.middlewares || [];

    if (route.handler && "schema" in route.handler)
      route.middlewares.unshift(schemaValidator(route.handler.schema));
  
    const defaultHandler = (req, res) => res.status(501).send();

    router[route.method.toLowerCase()](
      route.path,
      ...route.middlewares,
      route.handler || defaultHandler,
    );
  }

  const handlers = [router];
  if (group.prefix) handlers.unshift(group.prefix);

  app.use(...handlers);
}

app.use(errorHandler);

/**
 * START
 */
app.listen(appConfig.PORT, () => {
  console.log("\n");
  console.log(`Sequelize status`)
  console.log(`🚀 ${appConfig.NAME}`);
  console.log(`Running on port: ${appConfig.PORT}`);
  console.log(`Enviroment: ${appConfig.ENV}`);
  console.log(`Version: ${appConfig.VERSION}`);
});
