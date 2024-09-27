import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { IntroducaoComponent } from './components/introducao/introducao.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'intro',
    component: IntroducaoComponent
  },
  {
    path: 'contact',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
