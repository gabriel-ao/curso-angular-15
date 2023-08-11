import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Entrada } from '../../models/entrada.model';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { EntradasService } from '../../service/entradas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  displayedColumns: string[] = ['nome', 'pago', 'data', 'valor', 'tipo', 'editar',  'excluir'];
  dataSource = new MatTableDataSource<Entrada>();
  categorias: Entrada[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private entradaService: EntradasService,
    private router: Router){

  }
  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  chamarEdicao(entrada: Entrada){
    this.router.navigate(['entrada', 'editar', entrada.id]);
  }

  excluir(id: number){
    
  }

  novaEntrada(){
    this.router.navigate(['entradas', 'nova-entrada']);
  }


}
