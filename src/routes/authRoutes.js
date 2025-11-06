import express from "express";
import cors from "cors";
import { ApiUrl } from "../utils/urls.js";
import { Login, Register, getUsers } from "../controllers/authControllers.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(cors());

router.post(ApiUrl.auth.LOGIN, Login);
router.post(ApiUrl.auth.REGISTER, Register);
router.get(ApiUrl.auth.GET_USERS, authMiddleware, getUsers);

export default router;