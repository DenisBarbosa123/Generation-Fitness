import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from './model/aluno';
const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/aluno';
 
  getAlunoLogin(id : string) : Observable<Aluno> {
    return this.http.get<Aluno>(this.url + "/" + id);
  }


}

