import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { criarSenhaForte } from '../validacoes/criarSenhaForte';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  id!: string;
  produto!: Produto;
  rota: string = '';
  isNovoProduto: boolean = false;
  tituloPagina: string = '';

  formCadastroProduto!: FormGroup;

  // nome: string = '';
  // descricao: string = '';
  // preco: string = '';
  // estoque: number = 0;

  constructor(private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private formBuilder: FormBuilder){

  }

  ngOnInit(): void {

    this.rota = this.activatedRoute.snapshot.url[0].path;
    this.criarFormulario();

    if(this.rota === 'editar-produto') {
      // recuperar o produto pelo ID
      this.id = this.activatedRoute.snapshot.url[1].path; // todo - pegando Id da URL
  
      this.produtoService.getProdutoPeloId(this.id).subscribe(
        (produto: Produto) => {
          this.produto = produto;
          this.formCadastroProduto.controls['nome'].setValue(this.produto.nome)
          this.formCadastroProduto.controls['descricao'].setValue(this.produto.descricao)
          this.formCadastroProduto.controls['email'].setValue(this.produto.email)
          this.formCadastroProduto.controls['password'].setValue(this.produto.password)
          this.formCadastroProduto.controls['estoque'].setValue(this.produto.estoque)
          this.formCadastroProduto.controls['preco'].setValue(this.produto.preco)
          this.tituloPagina =`Editar produto`;

        }
      );
    } else {
      this.isNovoProduto = true;

      this.tituloPagina = 'Novo Produto';
    }


  }

  criarFormulario(){
    this.formCadastroProduto = this.formBuilder.group({
          nome: ['', Validators.required],
          descricao: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          // email: ['', [Validators.required, Validators.pattern("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.")]],
          password: ['', [Validators.required, Validators.minLength(4), criarSenhaForte()]],
          preco: ['', Validators.required],
          estoque: [0, Validators.required]
    })
  }

  salvarProduto() {

    if(this.formCadastroProduto.touched) {
      // verificar se o form foi tocado
    }

    const produtoParaSalvar: Produto = {
      id: parseInt(this.id),
      nome: this.formCadastroProduto.controls['nome'].value,
      descricao: this.formCadastroProduto.controls['descricao'].value,
      email: this.formCadastroProduto.controls['email'].value,
      password: this.formCadastroProduto.controls['password'].value,
      estoque: this.formCadastroProduto.controls['estoque'].value,
      preco: this.formCadastroProduto.controls['preco'].value
    }

    console.log(this.formCadastroProduto);

    if(this.isNovoProduto) {
      this.criarProduto(produtoParaSalvar);
    } else {
      produtoParaSalvar.imagemUrl = this.produto.imagemUrl;
      this.atualizarProduto(produtoParaSalvar);
    }

  }

  atualizarProduto(produtoParaSalvar: Produto){
    this.produtoService.atualizarProduto(produtoParaSalvar).subscribe(response => {
      this.router.navigate(['produto', 'listagem']);
    })
  }

  criarProduto(produtoParaSalvar: Produto){
    this.produtoService.criarProduto(produtoParaSalvar).subscribe(response => {
      this.router.navigate(['produto', 'listagem']);
    })
  }
}
