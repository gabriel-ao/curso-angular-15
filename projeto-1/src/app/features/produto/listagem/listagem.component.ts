import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor(private produtoService: ProdutoService){

  }

  // RXJS
  // Javascript axios axios.get() - requisição assincrona
  // async return await === Promisse
  // Angular usar RJS e o RXJS não usa Promisse
  // Angular usa Observable  == cano

  ngOnInit(): void {

    console.log('NgOnIniti do componente listagem');
    this.produtoService.getCidadePeloCep().subscribe(resposta => {
      console.log("response ->>> ", resposta);
    });
  }

  // getDoJavacript(){
  //   console.log('getDoJavacript do componente listagem');

  //   this.produtoService.getCidadePeloCep().subscribe(resposta => {
  //     console.log("response ->>> ", resposta);
  //   })
  // }

}
