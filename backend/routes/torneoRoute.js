import express from "express";
import {getTorneos,getDota,getValorant,getLol,getCsgo,registroT,getTorneosPasados, getDotaP,getLolP,getValorantP,getCsgoP,miTorneoPendiente,miTorneoPendienteP,mejorTorneo, deleteMiTorneo} from '../controller/torneoController.js'

const router = express.Router();


//Rutas para consultas
router.get("/torneos",getTorneos)

//Sin vender
router.get("/dota",getDota)
router.get("/lol",getLol)
router.get("/valorant",getValorant)
router.get("/csgo",getCsgo)


//torneos pasados
router.get("/torneospasados",getTorneosPasados)
//Vencidos
router.get("/dotaP",getDotaP)
router.get("/lolP",getLolP)
router.get("/valorantP",getValorantP)
router.get("/csgoP",getCsgoP)

//Inscripcion de torneo
router.post("/inscripcion",registroT)

//Mis torneos
router.post("/pendientes",miTorneoPendiente)
router.post("/pendientesP",miTorneoPendienteP)

//Mejor torneo
router.get("/mejorTorneo",mejorTorneo)
router.post("/deletemitorneo",deleteMiTorneo)

export default router;
