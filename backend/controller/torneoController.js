import { bd } from "../bd.js";

export const getTorneos = (_, res) => {
  const q =
    "select t.id_torneo,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as  fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now() order by t.premio desc";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const getDota = (_, res) => {
  const q =
    "select t.id_torneo ,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now() and j.nombre = 'dota 2'";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const getValorant = (_, res) => {
  const q =
    "select t.id_torneo , j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now() and j.nombre = 'valorant'";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const getLol = (_, res) => {
  const q =
    "select t.id_torneo ,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now() and j.nombre = 'league of legend'";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const getCsgo = (_, res) => {
  const q =
    "select t.id_torneo ,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo >now() and j.nombre = 'cs:go'";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const registroT = (req, res) => {
  const q = "insert into user_torneo values(?,?,null)";
  const user = req.body.user;
  const id_torneo = req.body.id_torneo;

  bd.query(q, [user, id_torneo], (err, data) => {
    if (err) {
      return res.json({ message: "Ya participas en el torneo" });
    } else {
      if (data) {
        return res.json(data);
      } else {
        res.json({ message: "Ya participas en el torneo" });
      }
    }
  });
};

export const getTorneosPasados = (_, res) => {
  const q =
    "select t.id_torneo ,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as  fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo < now()";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const getDotaP = (_, res) => {
  const q =
    "select t.id_torneo ,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo <now() and j.nombre = 'dota 2'";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const getValorantP = (_, res) => {
  const q =
    "select t.id_torneo , j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo <now() and j.nombre = 'valorant'";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const getLolP = (_, res) => {
  const q =
    "select t.id_torneo ,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo <now() and j.nombre = 'league of legend'";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const getCsgoP = (_, res) => {
  const q =
    "select t.id_torneo ,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego where t.date_torneo <now() and j.nombre = 'cs:go'";
  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const miTorneoPendiente = (req, res) => {
  const q =
    "select t.id_torneo ,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego inner join user_torneo ut on ut.id_torneo = t.id_torneo where  t.date_torneo > now() and  ut.user=?";

  const users = req.body.user;

  bd.query(q, [users], (err, data) => {
    if (err) {
      return res.json();
    }

    return res.json(data);
  });
};

export const miTorneoPendienteP = (req, res) => {
  const q =
    "select t.id_torneo ,j.imagen ,j.nombre,date_format(date_end,'%d-%m-%Y')  as fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as fecha_torneo, t.hora, t.premio from torneos t inner join juegos j on t.id_juego = j.id_juego inner join user_torneo ut on ut.id_torneo = t.id_torneo where  t.date_torneo < now() and  ut.user=?";

  const user = req.body.user;

  bd.query(q, [user], (err, data) => {
    if (err) {
      return res.json();
    } else {
      if (data) {
        return res.json(data);
      } else {
        return res.json({ message: "Usuario y contraseña no coinciden" });
      }
    }
  });
};

export const mejorTorneo = (_, res) => {
  const q =
    "select t.id_torneo,j.imagen,j.logo ,j.nombre,date_format(date_end,'%d-%m-%Y')  as  fecha_final,date_format(t.date_torneo,'%d-%m-%Y') as  fecha_torneo, t.hora,   t.premio from torneos t inner join juegos j on t.id_juego =   j.id_juego where t.date_torneo >now() AND t.premio = (select max(premio) from torneos where date_torneo >now())";

  bd.query(q, (err, data) => {
    if (err) {
      return res.json();
    }
    return res.json(data);
  });
};


export const deleteMiTorneo = (req, res) => {
  const q = "delete from user_torneo where (user = ? and id_torneo=?)";

  const user = req.body.user;
  const id_torneo = req.body.id_torneo;
  
  bd.query(q, [user, id_torneo], (err, data) => {
    if (err) {
      return res.json();
    }
    return res.json(data);
  });
};
