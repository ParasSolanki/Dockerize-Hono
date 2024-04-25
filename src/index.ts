import dotenv from "dotenv";
dotenv.config();

import { serve } from "@hono/node-server";
import { app } from "./app.js";

const env = {
  PORT: Number(process.env?.PORT ?? 8000),
};

const port = env.PORT;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
