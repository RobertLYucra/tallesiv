import { bd } from "../bd.js";

export const getTorneos = (_, res) => {
  const q = "select t.id_torneo ,j.nombre,date_format(date_end,'%d-%m-%Y') as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo from torneos t inner join juegos j on t.id_juego = j.id_juego"
  bd.query(q, (err, data) => {
    if (err) {return res.json()}
    else{
      if(data){
        return res.json(data);
      }else{
        return res.json({message:"Usuario y contraseña no coinciden"})
      }
  }
});
};