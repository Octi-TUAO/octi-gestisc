import { Component, OnInit, Input } from '@angular/core';
import{Iscritto} from './iscritto.model';

@Component({
  selector: 'app-iscritto',
  templateUrl: './iscritto.component.html',
  styleUrls: ['./iscritto.component.css']
})
export class IscrittoComponent implements OnInit {
@Input() iscritto : Iscritto;
  constructor() { }

  ngOnInit() {
  }

}