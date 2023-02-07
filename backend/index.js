import express from 'express';
import cors from 'cors';
import useRouter from './routes/userRoute.js'


const app = express();
app.use(express.json())
app.listen(8801);
app.use(cors())

console.log("Se ejecuta en el puerto 8801")
//Rutas de consultas
app.use('/',useRouter)

//Permite leer datos de base de datos



