export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    imagemUrl?: string;
    email?: string;
    password: string;
    preco: string;
    estoque: number;
}

export interface Produtos extends Array<Produto>{}