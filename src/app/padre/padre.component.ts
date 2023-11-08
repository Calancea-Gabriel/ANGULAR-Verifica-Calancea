import { Component } from '@angular/core';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  private url = 'https://person.mauroracca.repl.co/';
  
  utenti: any = []; // array di oggetti
  async ngOnInit() {
    let busta = await fetch(this.url)
    this.utenti = await busta.json();
    console.log(this.utenti);
  }  

  // Mando untente al componente figlio
  utente: any = [];
  visualizzaUtente(utente: any) {    
    console.log(utente);
    this.utente = utente;
  }

    // Recupero il cellulare
    cell: string = '';
    recuperaCellDaFiglio(cell: string) {
      this.cell = cell;
      console.log(this.cell);
    }
}
