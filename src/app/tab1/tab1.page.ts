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
    private router : Router) {}

    alunos : Aluno [];
    hoje : Date;
    aluno : Aluno;
    idade : number;
    id : string = "1";

    ngOnInit() {
      this.aluno = new Aluno();
      this.hoje = new Date();
      this.getAluno(this.id);
      
    }

    getAluno(idAluno : string){
      this.perfilService.getAlunoLogin(idAluno).subscribe(
        data => this.aluno = data
      );
    }

    editarPerfil(){
      this.router.navigate(['editar-perfil']);
    }

    doRefresh(event) {
      this.getAluno(this.id);
  
      setTimeout(() => {
        event.target.complete();
      }, 1000);
    }
  


}
