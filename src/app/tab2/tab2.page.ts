import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  route : any;
  constructor(router:Router) {
  this.route = router;
  }

  abrirAgua(){
    this.route.navigate(['/agua']);
  }

  abrirAtividade(){
    this.route.navigate(['/atividade-fisica']);
  }
  abrirDieta(){
    this.route.navigate(['/dieta']);
  }
  abrirSuplementacao(){
    this.route.navigate(['/suplementacao']);
  }
  abrirTreino(){
    this.route.navigate(['/treino']);
  }

}
