import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router : Router, 
    private perfilService : PerfilService,
    private loadingCtrl : LoadingController) { }

  newAluno: Aluno;
  oldAluno: Aluno;
  esconderErroLogin: boolean = true;

  ngOnInit() {
    this.newAluno = new Aluno();
    this.oldAluno = new Aluno();
    this.oldAluno = this.perfilService.getAluno();
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
    
    if(this.newAluno.email === this.oldAluno.email &&
        this.newAluno.senha === this.oldAluno.senha){
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

  closeApp(){
    //do it!
  }

}
