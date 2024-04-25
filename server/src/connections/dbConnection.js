import pg from "pg";

const pgPool = new pg.Pool({
  user: "postgres", host: "localhost", port: 5432, database: "postgres", password: "psql"
});

export default pgPool;
