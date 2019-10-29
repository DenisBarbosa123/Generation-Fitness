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

  treinoPeitoral : exercicio [] = [];
  treinoCostas : exercicio [] = [];
  treinoMembroInferiores : exercicio [] = [];
  treinoOmbro : exercicio [] = [];
  treinoBraco : exercicio [] = [];
  ngOnInit(){
    this.treinoService.getTreinoPeitoral().subscribe(
      data => this.treinoPeitoral = data
    )

    this.treinoService.getTreinoCostas().subscribe(
      data => this.treinoCostas = data
    )

    this.treinoService.getTreinoOmbro().subscribe(
      data => this.treinoOmbro = data
    )

    this.treinoService.getTreinoPerna().subscribe(
      data => this.treinoMembroInferiores = data
    )

    this.treinoService.getTreinoBraco().subscribe(
      data => this.treinoBraco = data
    )
  }

 

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
