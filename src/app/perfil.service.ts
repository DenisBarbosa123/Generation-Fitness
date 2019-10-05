import { Injectable } from '@angular/core';
import { Aluno } from './model/aluno';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor() { }

  aluno : Aluno = new Aluno('Denis', 'denis@gmail.com', 'abc', '115.357.616-36', '35 9 9987-8502', new Date(1998, 1, 23), 'Hipertrofia');

  getAluno(){
    return this.aluno;
  }

}

