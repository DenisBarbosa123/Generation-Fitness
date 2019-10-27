import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from './model/aluno';


const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/aluno';

  getAlunoLogin() : Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.url);
  }

}
