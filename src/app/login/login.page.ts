import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router) { }

  newAluno: Aluno;
  oldAluno: Aluno;

  ngOnInit() {
    this.newAluno = new Aluno();
    this.oldAluno = new Aluno();
    this.oldAluno.email = "denis@gmail.com";
    this.oldAluno.senha = "12345678";
  }

  abrirHome(){
    this.router.navigate(['tabs']);
  }

  makeLogin(){
    console.log("fazendo login...");
    console.log(this.newAluno.email);
    console.log(this.newAluno.senha);

    if(this.newAluno.email === this.oldAluno.email &&
        this.newAluno.senha === this.oldAluno.senha){
          console.log("login feito com sucesso!");
          this.abrirHome();
    }else{
      console.log("erro no login!");
    }
  }

  closeApp(){
    //do it!
  }

}
