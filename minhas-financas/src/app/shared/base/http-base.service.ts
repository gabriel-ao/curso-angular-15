import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  public readonly httpClient!: HttpClient;
  
  private apitBase = 'http://localhost:3000/';

  constructor(private readonly injector: Injector) { 
    if(injector == null || injector == undefined){
      throw new Error('Injector não ser nulo');
    }

    this.httpClient = injector.get(HttpClient);
  }

  public httpGet(endpoint: string): Observable<any>{
    return this.httpClient.get(`${this.apitBase}${endpoint}`);
  }

  public httpPost(endpoint: string, dados: any): Observable<any>{
    return this.httpClient.post(`${this.apitBase}${endpoint}`, dados);
  }
  
  public httpPut(endpoint: string, dados: any): Observable<any>{
    return this.httpClient.put(`${this.apitBase}${endpoint}`, dados);
  }

  public httpDelete(endpoint: string): Observable<any>{
    return this.httpClient.delete(`${this.apitBase}${endpoint}`);
  }
  
  
  // TRATAMENTO ERRO E EXCESSÃO
  
}
