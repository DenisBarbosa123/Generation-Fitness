import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtividadeFisicaPage } from './atividade-fisica.page';

const routes: Routes = [
  {
    path: '',
    component: AtividadeFisicaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AtividadeFisicaPage]
})
export class AtividadeFisicaPageModule {}
