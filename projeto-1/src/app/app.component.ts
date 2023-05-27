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

  title = 'projeto-1';

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
    this.title = "Site Curso";
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

  mudarTexto(){
    this.title += "a";
  }
}
