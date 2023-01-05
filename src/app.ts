require("dotenv").config();

import connect from "./utils/connect";
import logger from "./utils/logger";
import createServer from "./utils/server";

const host =
  process.env.STATUS === "production"
    ? process.env.HOST
    : process.env.DEV_HOST || "localhost";
const port =
  process.env.STATUS === "production"
    ? process.env.PORT
    : process.env.DEV_PORT || 5000;

const app = createServer();

app.listen(port, async () => {
  logger.info(`Server is listening at http://${host}:${port}/...`);

  await connect();
});
