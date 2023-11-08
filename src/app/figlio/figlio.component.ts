import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent {
  @Input() utente: any = [];
  
  @Output() mandaDatiAPadre = new EventEmitter<string>();
  
  visualizzaUtente(){
    console.log(this.utente.dob.age);
  }

  cell: string = '';
  
  mandaDati(){
    
    this.mandaDatiAPadre.emit(this.cell);
  }
}