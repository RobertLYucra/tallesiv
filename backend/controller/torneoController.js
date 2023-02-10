import { bd } from "../bd.js";

export const getTorneos = (_, res) => {
  const q = "SELECT * FROM torneos";

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