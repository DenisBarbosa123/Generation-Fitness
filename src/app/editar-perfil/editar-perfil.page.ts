import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  newAluno : Aluno = new Aluno();
  constructor() { }

  ngOnInit() {
  }

  editarPerfil(aluno : Aluno) : Aluno {
    console.log('editando');
    this.newAluno = new Aluno(aluno.nome, aluno.email, aluno.cpf, aluno.celular, aluno.objetivo);
    console.log(this.newAluno.nome);
    return this.newAluno;
  }
}
