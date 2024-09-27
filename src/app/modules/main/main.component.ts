import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('450ms ease-in', style({ opacity: 0.5 }))
      ]),
      transition(':enter', [
        animate('450ms ease-out', style({ opacity: 0.5 }))
      ])
    ])
  ]
})
export class MainComponent {
  receiveValue: string = 'intro';

  receiveValueButton(value: string) {
    this.receiveValue = value;
    console.log(this.receiveValue);
  }


}
