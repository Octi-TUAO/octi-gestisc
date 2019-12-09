export class Iscritto{
  codFisc: string;
  nome: string;
  cognome: string;


  constructor(codFisc: string, cognome: string, nome: string){
    this.nome = nome;
    this.codFisc = codFisc;
    this.cognome = cognome;
    
  }
  getNome(){
    return this.nome + " " + this.cognome;
  }

}