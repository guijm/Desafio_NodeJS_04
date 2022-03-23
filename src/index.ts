/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	class Aluno {
		nome:string
		idade:number
		nota:number

		constructor(nome:string,idade:number,nota:number){
			this.nome = nome;
			this.idade = idade;
			this.nota = nota;
		}
	}
	let listaAlunos:{aluno:Aluno}[]=[
		{"aluno": new Aluno ("Aluno1", 20, 7)},
		{"aluno": new Aluno ("Aluno2", 30, 7)},
		{"aluno": new Aluno ("Aluno3", 34, 7)}
	]
     let somaNotas = listaAlunos.map(Aluno => Aluno.aluno.nota).reduce((prev,curr) => prev + curr, 0);
	 console.log("O total das notas dos Alunos é: ",somaNotas);
	 
});
