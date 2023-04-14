import express from "express";
import {
  getUser,
  getUserFrinds,
  addRemoveFriend,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// READ
router.get("/:id", verifyToken, getUser);
