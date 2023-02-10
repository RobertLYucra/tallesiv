import express from "express";
import {getTorneos} from '../controller/torneoController.js'

const router = express.Router();


//Rutas para consultas
router.get("/torneos",getTorneos)

export default router;
