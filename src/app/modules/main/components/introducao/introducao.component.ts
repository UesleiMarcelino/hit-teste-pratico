import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.scss']
})
export class IntroducaoComponent implements OnInit {
  mainText: string = '';
  mainTitle: string = '';

  constructor(private mainService: MainService) {

  }
  ngOnInit(): void {
    this.getDataText();
  }
  getDataText() {
    this.mainService.getData().subscribe({
      next: (res: any) => {
        this.mainText = res.data.text
        this.mainTitle = res.data.title
        console.log(this.mainText, this.mainTitle)
      }
    })
  }

}
