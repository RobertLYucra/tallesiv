import { bd } from "../bd.js";

export const getTorneos = (_, res) => {
  const q = "select t.id_torneo ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as  fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now()"
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


export const getDota = (_, res) => {
  const q = "select t.id_torneo ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now() and j.nombre = 'dota 2'"
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

export const getValorant = (_, res) => {
  const q = "select t.id_torneo ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now() and j.nombre = 'valorant'"
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

export const getLol = (_, res) => {
  const q = "select t.id_torneo ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now() and j.nombre = 'league of legend'"
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


export const getCsgo = (_, res) => {
  const q = "select t.id_torneo ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now() and j.nombre = 'cs:go'"
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

export const registroT = (req, res) =>{
 const q = "insert into user_torneo values(?,?,null)"
  const user = req.body.user;
  const id_torneo = req.body.id_torneo;

  bd.query(q, [user, id_torneo], (err, data) => {
    if (err) {return res.json({message: "Ya participas en el torneo"})}
    else{
      if(data){return res.json(data)}
      else{res.json({message: "Ya participas en el torneo"})}
    }
    
  });
}

export const getTorneosPasados = (_, res) => {
  const q = "select t.id_torneo ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as  fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo < now()"
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
