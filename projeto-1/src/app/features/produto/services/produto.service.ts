import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // Injeção de dependências

  private cep = '13185000';
  private baseUrl= 'https://viacep.com.br/ws/'+ this.cep +'/json/';

  constructor(private http: HttpClient) { 
    
  }

  getCidadePeloCep() {
    return this.http.get(this.baseUrl);
  }
}
