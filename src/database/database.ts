import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("saude.db");

export function initializeDatabase() {
db.execSync(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        cpf TEXT NOT NULL,
        senha TEXT NOT NULL,
        dataNascimento TEXT
        );
    `);

  console.log("Banco criado!");
}