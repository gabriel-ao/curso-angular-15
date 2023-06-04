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
    clientes: Pessoas[] = [{
      nome: 'Gabriel',
      sexo: 'M',
      idade: 26,
      salario: 750
    },
    {
      nome: 'Alex',
      sexo: 'M',
      idade: 46,
      salario: 750
    },
    {
      nome: 'Leonardo',
      sexo: 'F',
      idade: 46,
      salario: 750
    },
    {
      nome: 'Primo',
      sexo: 'M',
      idade: 46,
      salario: 75000
    }
  
  ]

  chamarFuncao(){
    console.log("Esse e o um click");
  }

  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario'];
  dataSource = new MatTableDataSource(this.clientes);  
}
