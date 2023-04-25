import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "restapi",
    user: "root",
    password: "password",
  });

  res.status(200).json({ name: "Azim" });
}
