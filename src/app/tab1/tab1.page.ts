import { Component } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { Aluno } from '../model/aluno';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private perfilService : PerfilService, 
    private router : Router) {}

  hoje : Date = new Date();

  aluno : Aluno = this.perfilService.getAluno();

  idade : number = this.hoje.getFullYear() - this.aluno.getdatanascimento().getFullYear();


  


}
