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
    this.newAluno.nome = aluno.nome;
    console.log(this.newAluno.nome);
    return this.newAluno;
  }
}
