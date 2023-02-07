import mysql from "mysql";

export const bd = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pywperu",
});
