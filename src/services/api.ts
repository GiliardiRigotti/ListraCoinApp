import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const urls = {
    user: 'usuarios',
    products: 'produtos',
    purchase: 'compras'
}