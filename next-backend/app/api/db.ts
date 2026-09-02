import mysql from "mysql2/promise";

const isProduction = process.env.NODE_ENV === "production";

export const db = mysql.createPool({
  host: isProduction ? process.env.DB_HOST_LIVE : process.env.DB_HOST,
  user: isProduction ? process.env.DB_USER_LIVE : process.env.DB_USER,
  password: isProduction ? process.env.DB_PASS_LIVE : process.env.DB_PASS,
  database: isProduction ? process.env.DB_NAME_LIVE : process.env.DB_NAME,
});
