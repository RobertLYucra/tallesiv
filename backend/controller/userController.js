import { bd } from "../bd.js";

export const getUSers = (_, res) => {
  const q = "SELECT * FROM usuario";

  bd.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const loginUser = (req, res) => {
  const q =
    "select id,user, lastname from usuario where(user=? and password=?)";

  const user = req.body.user;
  const password = req.body.password;

  bd.query(q, [user, password], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};


export const registerUSer = (req, res) => {
  const q = "insert into usuario values (?)";

  const values = [
    req.body.id,
    req.body.user,
    req.body.name,
    req.body.lastname,
    req.body.password,
  ];

  bd.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
