import express from "express";
import {loginUser,getUSers} from '../controller/userController.js'

const router = express.Router();


//Rutas para consultas
router.post("/login",loginUser)
router.get("/user",getUSers)
export default router;
