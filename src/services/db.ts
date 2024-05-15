import * as SQLite from 'expo-sqlite';
import { IProduct } from '../interfaces/shop';

export async function initialize() {
    const db = await SQLite.openDatabaseAsync('listraCoinDB')

    await db.execAsync(`
CREATE TABLE IF NOT EXISTS product (
    id TEXT PRIMARY KEY NOT NULL, 
    nome TEXT NOT NULL,
    preco FLOAT,
    imagem TEXT,
    descricao TEXT,
    quantidade INTEGER,
    categoria TEXT,
    dataCadastro TEXT
    comprado BOOLEAN
);
`)
}

export async function insertProduct(item: IProduct) {
    try {
        const db = await SQLite.openDatabaseAsync('listraCoinDB')
        const statement = await db.prepareAsync(
            'INSERT INTO product (id, nome, preco, imagem, descricao, quantidade, categoria, dataCadastro, comprado) VALUES ($id, $nome, $imagem, $descricao, $preco,$quantidade,$categoria,$dataCadastro,$comprado)'
        )
        let result = await statement.executeAsync({ $id: item.id, $nome: item.nome, $imagem: item.imagem, $descricao: item.descricao, $preco: item.preco, $quantidade: item.quantidade, $categoria: item.categoria, $dataCadastro: item.dataCadastro, $comprado: false })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
