export interface IProduct {
    id: string
    nome: string
    descricao: string
    preco: number
    quantidade: number
    categoria: string
    dataCadastro: string
}

export interface IPurchase {
    id: string
    idUsuario: string
    products: { idProduto: string, quantidade: number, preco: number }
    totalPago: number
    dataCompra: string
}