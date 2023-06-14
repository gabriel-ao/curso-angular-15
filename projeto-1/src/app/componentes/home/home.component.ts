import { Component } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { filter, map, of, tap } from 'rxjs';
import { HomeService } from '../services/home.service';

export interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  salario: number;
}

export interface Pessoas extends Array<Pessoa>{}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    // title = 'Bem-vindo ao treinamento de Angular';
    title = '';

    // frutas: string[] = [];

    // frutas$ = of('mamão', 'melão', 'abacaxi', 'pero', 'tomate');

    constructor(private homeService: HomeService) {
      // this.frutas$.pipe(
      //   tap(console.log),
      //   map(fruta => fruta.toUpperCase()),
      //   tap(console.log),
      //   filter(fruta => fruta.startsWith('M') || fruta.startsWith('T'))
      // ).subscribe(result => {
      //   this.frutas.push(result);
      // });

    }

    imgUrl = "https://appito.com/assets/img/logo-termos.png";
  
    // ng for 
    clientes!: Pessoas;

  chamarFuncao(){
    console.log("Esse e o um click");
  }

  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario'];
  dataSource !: MatTableDataSource<any>;
  ngOnInit() {
    this.homeService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
        this.dataSource = new MatTableDataSource(this.clientes)
      }
    );  
    
  }
}
