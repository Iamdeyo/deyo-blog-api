"use strict";

import { PrismaClient } from "../../prisma/generated/client/index.js";

const database = new PrismaClient();

export { database };
