import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CategoriaService } from '../../service/categoria.service';

export interface Categoria {
  nome: string;
  descrição: string;
  id: number;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['nome', 'descricao'];
  dataSource = new MatTableDataSource<Categoria>();
  categorias: Categoria[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private categoriaService: CategoriaService){

  }
  ngOnInit(): void {
    this.categoriaService.getCategorias()
    .subscribe((categorias: Categoria[]) => {
      this.categorias = categorias
      this.dataSource.data = this.categorias
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
