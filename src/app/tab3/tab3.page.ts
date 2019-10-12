import { Component } from '@angular/core';
import { TreinoService } from '../treino-service.service';
import { grupo_muscular } from '../model/grupo_muscular';
import { exercicio } from '../model/exercicio';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private treinoService : TreinoService) {}

  treinoPeitoral : exercicio [] = this.treinoService.getTreinoPeitoral();
  treinoCostas : exercicio [] = this.treinoService.getTreinoCostas();
  treinoMembroInferiores : exercicio [] = this.treinoService.getTreinoMembrosInferiores();
  treinoOmbro : exercicio [] = this.treinoService.getTreinoOmbro();
  treinoBraco : exercicio [] = this.treinoService.getTreinoBraco();
  

  ngOnInit(){
    console.log(this.treinoPeitoral[0].nome);
    console.log(this.treinoCostas[0].nome);
    console.log(this.treinoMembroInferiores[0].nome);
  }
  
  

  

  
}
