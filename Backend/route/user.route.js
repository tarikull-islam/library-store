import express from "express";
import {singUp,login} from "../controller/user.controller.js"
const router = express.Router()

router.post("/singup",singUp);
router.post("/login",login);

export default router;

