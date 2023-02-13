import express from "express";
import {getTorneos,getDota,getValorant,getLol,getCsgo,registroT,getTorneosPasados} from '../controller/torneoController.js'

const router = express.Router();


//Rutas para consultas
router.get("/torneos",getTorneos)
router.get("/dota",getDota)
router.get("/lol",getLol)
router.get("/valorant",getValorant)
router.get("/csgo",getCsgo)

//torneos pasados
router.get("/torneospasados",getTorneosPasados)


//Inscripcion de torneo
router.post("/inscripcion",registroT)

export default router;
