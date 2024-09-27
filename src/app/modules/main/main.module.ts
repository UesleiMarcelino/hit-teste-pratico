import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from './shared/shared.module';
import { IntroducaoComponent } from './components/introducao/introducao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MainComponent, IntroducaoComponent, ContatoComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class MainModule { }
