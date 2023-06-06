import { Component } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface Pessoas {
  nome: string;
  idade: number;
  sexo: string;
  salario: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    // title = 'Bem-vindo ao treinamento de Angular';
    title = '';

    // 
    imgUrl = "https://appito.com/assets/img/logo-termos.png";
  
    // ng for 
    clientes!: Pessoas;

  chamarFuncao(){
    console.log("Esse e o um click");
  }

  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario'];
  dataSource = new MatTableDataSource(this.clientes);  
}
