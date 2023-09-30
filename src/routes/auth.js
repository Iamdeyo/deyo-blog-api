"use strict";
import express from "express";
import { database } from "../libs/Prisma.js";
import { login, me, register } from "../controllers/auth.js";
import { tokenAuth } from "../middleware/auth.js";
import {
  validateRegisterAuth,
  validateAuth,
  validateLoginAuth,
} from "../middleware/authValidator.js";
const router = express.Router();

router.post("/register", validateRegisterAuth, validateAuth, register);
router.post("/login", validateLoginAuth, validateAuth, login);
router.get("/me", tokenAuth, me);

export default router;
