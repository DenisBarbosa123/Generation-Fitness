import { Component } from '@angular/core';
import { TreinoService } from '../treino-service.service';
import { grupo_muscular } from '../model/grupo_muscular';
import { exercicio } from '../model/exercicio';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  btnPeitoral : Boolean = false;
  btnCostas : Boolean = false;
  btnPernas : Boolean = false;
  btnBraco : Boolean = false;
  btnOmbro : Boolean = false;

  constructor(private treinoService : TreinoService) {}

  treinoPeitoral : exercicio [] = this.treinoService.getTreinoPeitoral();
  treinoCostas : exercicio [] = this.treinoService.getTreinoCostas();
  treinoMembroInferiores : exercicio [] = this.treinoService.getTreinoMembrosInferiores();
  treinoOmbro : exercicio [] = this.treinoService.getTreinoOmbro();
  treinoBraco : exercicio [] = this.treinoService.getTreinoBraco();

  mostrarTreinoPeito(){
   this.btnPeitoral == false ? this.btnPeitoral = true : this.btnPeitoral = false;
  }

  mostrarTreinoCostas(){
    this.btnCostas == false ? this.btnCostas = true : this.btnCostas = false;
  }
  mostrarTreinoPerna(){
    this.btnPernas == false ? this.btnPernas = true : this.btnPernas = false;
  }
  mostrarTreinoOmbro(){
    this.btnOmbro == false ? this.btnOmbro = true : this.btnOmbro = false;
  }
  mostrarTreinoBraco(){
    this.btnBraco == false ? this.btnBraco = true : this.btnBraco = false;
  }

  
}
