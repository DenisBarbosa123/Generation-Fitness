import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';
import { PerfilService } from '../perfil.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  newAluno : Aluno;
  constructor(private perfilService : PerfilService,
              private alertController : AlertController,
              private router :  Router) { }

  ngOnInit() {
    this.newAluno = new Aluno();
    this.getAluno();
  }

  editarAluno(){
    this.perfilService.editarAluno(this.newAluno).subscribe(
      data => {
          this.getAluno()
          this.presentAlert();
        }
    );
  }

  cancelarEditar(){
    this.abrirHome();
  }

  getAluno(){
    this.perfilService.getAlunoLogin("1").subscribe(
      data => this.newAluno = data
        
     );
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Perfil editado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
    this.abrirHome();
  }

  abrirHome(){
    this.router.navigate(['tabs']);
  }

  
}
