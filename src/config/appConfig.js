import dotenv from "dotenv";

import {
  version as appVersion,
  name as appName,
  contributors as appContributors,
} from "../../package.json";

dotenv.config({
  path: {
    production: ".env",
    development: ".env.dev",
  }[process.env.NODE_ENV || "production"],
});

export const appConfig = {
  NAME: appName,
  VERSION: appVersion,
  CONTRIBUTORS: appContributors,
  HOST: process.env.APP_HOST,
  PORT: process.env.APP_PORT,
  ENV: process.env.NODE_ENV,
};
