import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements 
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
  {

  // title = 'Bem-vindo ao treinamento de Angular';
  title = '';


  // 
  imgUrl = "https://appito.com/assets/img/logo-termos.png";

  // ng for 
  clientes = [{
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
    salario: 750
  }

]
  
  constructor (){
    console.log("Component constructor");
  }

  ngAfterContentChecked(): void {
    console.log("Component Content Checked");
  }
  
  ngAfterViewChecked(): void {
    console.log("Component View Checked");
  }

  ngAfterViewInit(): void {
    console.log("Component View Init");
  }

  ngOnInit(): void {
    console.log("Component ngOnInit");
    // this.title = "Site Curso";
  }

  ngOnChanges(): void {
    console.log("Component ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("Component ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Component Content Init");
  }

  chamarFuncao(){
    console.log("Esse [e o um click");
  }
}
