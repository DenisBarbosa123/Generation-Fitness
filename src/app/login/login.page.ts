import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router, private perfilService : PerfilService) { }

  newAluno: Aluno;
  oldAluno: Aluno;
  esconderErroLogin: boolean = true;

  ngOnInit() {
    this.newAluno = new Aluno();
    this.oldAluno = new Aluno();
    this.oldAluno = this.perfilService.getAluno();
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
          if(this.esconderErroLogin==false){
            this.esconderErroLogin = true;
          }
          this.abrirHome();
    }else{
      console.log("erro no login!");
      this.esconderErroLogin = false;
    }
  }

  closeApp(){
    //do it!
  }

}
