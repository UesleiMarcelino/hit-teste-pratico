import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  sendForm: boolean = false;


  sendContatc() {
    this.sendForm = true
  }
}
