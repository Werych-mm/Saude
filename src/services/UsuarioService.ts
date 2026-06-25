import { db } from "@/database/database";

export class UsuarioService {

    static cadastrar(
        nome: string,
        email: string,
        cpf: string,
        senha: string,
        dataNascimento: string
    ) {

    db.runSync(
      `
      INSERT INTO usuarios
      (nome, email, cpf, senha, dataNascimento)
      VALUES (?, ?, ?, ?, ?)
      `,
      [nome, email, cpf, senha, dataNascimento]
    );
  }

}