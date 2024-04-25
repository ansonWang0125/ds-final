/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    roles VARCHAR(255) NOT NULL
  );

    CREATE TABLE IF NOT EXISTS available_gpu (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      rent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      usage VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS existing_task (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      sent_date TIMESTAMP NOT NULL,
      progress_percent INTEGER NOT NULL
    );
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE IF EXISTS existing_task;
    DROP TABLE IF EXISTS available_gpu;
    DROP TABLE IF EXISTS users;
  `);
};
