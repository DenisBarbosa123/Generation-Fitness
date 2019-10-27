import { Component } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { Aluno } from '../model/aluno';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil.page';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private perfilService : PerfilService, 
    private router : Router,
    private loginService : LoginService) {}

    alunos : Aluno [];
    hoje : Date;
    aluno : Aluno;

    ngOnInit() {
      this.aluno = new Aluno();
      this.hoje = new Date();
      this.alunos = [];
      console.log("oi");
      this.loginService.getAlunoLogin().subscribe(
        data => this.alunos = data
      );
      console.log("feito get perfil");
      console.log(this.alunos[0].nome);
      //this.aluno = this.alunos[0];
    }

  //idade : number = this.hoje.getFullYear() - this.aluno.getdatanascimento().getFullYear();


  


}
