import { Component, OnInit } from '@angular/core';
import{Iscritto}from '../iscritto/iscritto.model';
@Component({
  selector: 'app-iscritti',
  templateUrl: './iscritti.component.html',
  styleUrls: ['./iscritti.component.css']
})
export class IscrittiComponent implements OnInit {
  iscritti : Iscritto[];
  corrente : number;
  constructor() { }

  ngOnInit() {

    this.iscritti = [];
    this.iscritti.push(new Iscritto('FSRCVN02E08H612T', 'Fusari', 'Octavian'));
    this.iscritti.push(new Iscritto('TOMCVN02E08G612T', 'Tomasini', 'Greta'));
    this.iscritti.push(new Iscritto('MAZZCVN02F08H612T', 'Mazzurana', 'Sebastiano'));
    this.iscritti.push(new Iscritto('LORCVN02E08H612T', 'Lorenzini', 'Matteo'));
    this.iscritti.push(new Iscritto('TOGCVN02E18H612L', 'Togni','Chiara'));
    this.corrente = 0;
  }
  nomeClick(indice: number){
    this.corrente = indice;
  }
  nuovoIs(){
    this.iscritti.push(new Iscritto('','',''));
    this.corrente = this.iscritti.length-1;
  }

}