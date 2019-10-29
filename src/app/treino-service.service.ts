import { Injectable } from '@angular/core';
import { grupo_muscular } from './model/grupo_muscular';
import { exercicio } from './model/exercicio';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/';
  private urlTreinoPeitoral = this.url + 'treinoPeito';
  private urlTreinoCostas = this.url + 'treinoCostas';
  private urlTreinoPerna = this.url + 'treinoPerna';
  private urlTreinoOmbro = this.url + 'treinoOmbro';
  private urlTreinoBraco = this.url + 'treinoBraco';

  getTreinoPeitoral(){
    return this.http.get<exercicio[]>(this.urlTreinoPeitoral);
  }

  getTreinoCostas(){
    return this.http.get<exercicio[]>(this.urlTreinoCostas);
  }

  getTreinoOmbro(){
    return this.http.get<exercicio[]>(this.urlTreinoOmbro);
  }

  getTreinoPerna(){
    return this.http.get<exercicio[]>(this.urlTreinoPerna);
  }

  getTreinoBraco(){
    return this.http.get<exercicio[]>(this.urlTreinoBraco);
  }
  

  /*getTreinoPeitoral(){
    this.exerciciosPeitoral.push(new exercicio('Supino Reto',4, 40, 8));
    this.exerciciosPeitoral.push(new exercicio('Supino Inclinado',4, 40, 10));
    this.exerciciosPeitoral.push(new exercicio('Supino Declinado',4, 40, 10));
    this.exerciciosPeitoral.push(new exercicio('Cruxifixo Inclinado',4, 40, 12));
    this.exerciciosPeitoral.push(new exercicio('Cross-Over',4, 40, 12));
    return this.exerciciosPeitoral;
  }

  getTreinoCostas(){
    this.exerciciosCostas.push(new exercicio('Barra Livre',4, 40, 8));
    this.exerciciosCostas.push(new exercicio('Puxador Invertido',4, 40, 10));
    this.exerciciosCostas.push(new exercicio('Remada Curvada',4, 40, 10));
    this.exerciciosCostas.push(new exercicio('Remada Sentada',4, 40, 12));
    this.exerciciosCostas.push(new exercicio('Pull-Over',4, 40, 12));
    return this.exerciciosCostas;
  }

  getTreinoMembrosInferiores(){
    this.exerciciosMembrosInferiores.push(new exercicio('Agachamento Livre',4, 40, 8));
    this.exerciciosMembrosInferiores.push(new exercicio('Leg 45',4, 40, 10));
    this.exerciciosMembrosInferiores.push(new exercicio('Stiff',4, 40, 10));
    this.exerciciosMembrosInferiores.push(new exercicio('Leg 90',4, 40, 12));
    this.exerciciosMembrosInferiores.push(new exercicio('Extensora',4, 40, 12));
    this.exerciciosMembrosInferiores.push(new exercicio('Flexora',4, 40, 12));
    return this.exerciciosMembrosInferiores;
  }

  getTreinoOmbro(){
    this.exerciciosOmbro.push(new exercicio('Desenvolvimento com Halteres',4, 40, 8));
    this.exerciciosOmbro.push(new exercicio('Remada Alta',4, 40, 10));
    this.exerciciosOmbro.push(new exercicio('Cruxifixo Invertido',4, 40, 10));
    this.exerciciosOmbro.push(new exercicio('Desenvolvimento Arnold',4, 40, 12));
    this.exerciciosOmbro.push(new exercicio('Encolhimento',4, 40, 12));
    return this.exerciciosOmbro;
  }

  getTreinoBraco(){
    this.exerciciosBraco.push(new exercicio('Rosca Direta na Barra',4, 40, 8));
    this.exerciciosBraco.push(new exercicio('Triceps Testa',4, 40, 10));
    this.exerciciosBraco.push(new exercicio('Rosca Martelo',4, 40, 10));
    this.exerciciosBraco.push(new exercicio('Extensão de tríceps com pegada neutra',4, 40, 12));
    this.exerciciosBraco.push(new exercicio('Rosca Concentrada',4, 40, 12));
    this.exerciciosBraco.push(new exercicio('Pulley pegada fechada',4, 40, 12));
    return this.exerciciosBraco;
  }*/
}
