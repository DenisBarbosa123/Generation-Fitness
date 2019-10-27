import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';
import { LoadingController } from '@ionic/angular';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router : Router, 
    private perfilService : PerfilService,
    private loadingCtrl : LoadingController,
    private loginService : LoginService) { }

  newAluno: Aluno;
  aluno : Aluno;
  oldAluno : Aluno [];
  esconderErroLogin: boolean = true;
  undefined : any;

  ngOnInit() {
    this.newAluno = new Aluno();
    this.loginService.getAlunoLogin().subscribe(
      data => this.oldAluno = data
    );
    this.aluno = new Aluno();
  }

  openLoading(){
    this.loadingCtrl.create({
      message: 'Loading...',
      duration: 300
    }).then(loader => loader.present());
  
  }

  abrirHome(){
    this.router.navigate(['tabs']);
  }

  makeLogin(){
     if(this.newAluno.email === this.undefined|| this.newAluno.senha === this.undefined){
      console.log("erro no login!");
      this.esconderErroLogin = false;
     }else{
      if(this.newAluno.email === this.oldAluno[0].email &&
        this.newAluno.senha === this.oldAluno[0].senha){
          if(this.esconderErroLogin==false){
            this.esconderErroLogin = true;
          }
            this.openLoading();
            this.abrirHome();
          }else{
            console.log("erro no login!");
            this.esconderErroLogin = false;
          }
     }
    
  }

  closeApp(){
    //do it!
  }

}
