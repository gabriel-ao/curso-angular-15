import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  

  id!: string;
  produto!: Produto;

  nome: string = '';
  descricao: string = '';
  preco: string = '';
  estoque: number = 0;

  constructor(private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(): void {
    // recuperar o produto pelo ID
    this.id = this.activatedRoute.snapshot.url[1].path; // todo - pegando Id da URL

    this.produtoService.getProdutoPeloId(this.id).subscribe(
      (produto: Produto) => {
        this.produto = produto;
        this.nome = this.produto.nome;
        this.descricao = this.produto.descricao;
        this.preco = this.produto.preco;
        this.estoque = this.produto.estoque;
      }
    );

  }

  salvarProduto() {
    const produtoParaSalvar = {
      id: parseInt(this.id),
      nome: this.nome,
      preco: this.preco,
      imagemUrl: this.produto.imagemUrl,
      descricao: this.descricao,
      estoque: this.estoque
    }

    console.log("produto => ", produtoParaSalvar);

    this.produtoService.atualizarProduto(produtoParaSalvar).subscribe(response => {
      this.router.navigate(['produto', 'listagem']);
    })
  }

}
