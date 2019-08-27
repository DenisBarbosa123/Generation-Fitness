import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  newAluno: Aluno;
  oldAluno: Aluno;

  ngOnInit() {
    this.newAluno = new Aluno();
    this.oldAluno = new Aluno();
    this.oldAluno.email = "denis@gmail.com";
    this.oldAluno.senha = "12345678";
  }

  makeLogin(){
    console.log("fazendo login...");
    console.log(this.newAluno.email);
    console.log(this.newAluno.senha);

    if(this.newAluno.email === this.oldAluno.email &&
        this.newAluno.senha === this.oldAluno.senha){
          console.log("login feito com sucesso!");
    }else{
      console.log("erro no login!");
    }
  }

  closeApp(){
    //do it!
  }

}
