import { Component, OnInit } from '@angular/core';
import { IProdutos } from 'src/app/model/iprodutos';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  public nome: string | undefined;
  public descricao: string | undefined;
  public preco: number | undefined;

  public listaProdutos: Array<IProdutos> = [];

  public enviaProduto() {

  }

  public adicionaProduto() {
    if(this.nome && this.descricao && this.preco) {
      let novoProduto: any = {
        id: this.listaProdutos.length + 1,
        nome: this.nome,
        descricão: this.descricao,
        preco: this.preco
      }
      this.listaProdutos.push(novoProduto);
      this.nome = undefined
      this.descricao = undefined
      this.preco = undefined
    }

  }

  public deleteProduto(event: number) {
    this.listaProdutos.splice(event, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
