export interface ISignIn {
    email: string
    senha: string
}

export interface ISignUp extends ISignIn {
    nome: string
}

export interface IUser extends ISignUp {
    id: string
    saldo: number
    dataCadastro: string
    avatar: string
}