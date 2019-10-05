import { Component } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { Aluno } from '../model/aluno';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private perfilService : PerfilService) {}

  hoje : Date = new Date();

  aluno : Aluno = this.perfilService.getAluno();

  idade : number = this.hoje.getFullYear() - this.aluno.getdatanascimento().getFullYear();

  


}
