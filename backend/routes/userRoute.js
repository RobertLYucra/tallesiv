import express from "express";
import {loginUser,getUSers,registerUSer} from '../controller/userController.js'

const router = express.Router();


//Rutas para consultas
router.post("/login",loginUser)
router.post("/Register",registerUSer)
router.get("/user",getUSers)
export default router;
