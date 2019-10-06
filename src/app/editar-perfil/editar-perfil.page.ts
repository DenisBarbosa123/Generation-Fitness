import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  aluno : Aluno = new Aluno();
  constructor() { }

  ngOnInit() {
  }

  editarPerfil(aluno : Aluno) : Aluno {
    return aluno;
  }
}
