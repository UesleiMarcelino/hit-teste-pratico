import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent {

  @Output() valueEmitter = new EventEmitter<string>();

  sendValue(value: string) {
    this.valueEmitter.emit(value);
  }
}
