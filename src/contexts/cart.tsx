import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from "../services/storage";
import { ISignIn, ISignUp, IUser } from "../interfaces/user";
import { IProduct } from "../interfaces/shop";
import { useProfile } from "./profile";
import { useNotification } from "./notification";

interface ICartContext {
    isLoading: boolean
    addItemCart: (item: IProduct) => void
    removeItemCart: (id: string) => void
    listCart: IProduct[]
    clearAllItemsCart: () => void
}

const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const { user, updateUser } = useProfile()
    const { showNotification } = useNotification()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [listCart, setListCart] = useState<IProduct[]>([])

    const addItemCart = async (item: IProduct) => {
        setIsLoading(true)
        try {
            if (!user) return
            if (user?.saldo < item.preco) {
                showNotification('Aviso', 'Não possui saldo suficiente')
                return
            }
            const userTemp: IUser = {
                ...user,
                saldo: user?.saldo - item.preco
            }
            updateUser(userTemp)
            const listCartTemp = listCart
            listCartTemp.push(item)
            setListCart(listCartTemp)
            console.log('Cart add:')
            console.log(listCartTemp)
            await store.set('Cart', listCartTemp)
        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }

    const removeItemCart = useCallback((id: string) => {
        setIsLoading(true)
        try {
            const listCartTemp = listCart.filter(item => item.id !== id)
            setListCart(listCartTemp)
            console.log('Cart remove:')
            console.log(listCartTemp)
            store.set('Cart', listCartTemp)
        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }, [])

    const clearAllItemsCart = useCallback(() => {
        setIsLoading(true)
        try {
            setListCart([])
            store.set('Cart', '')
        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        (async () => {
            const storeList = await store.get('Cart')
            setListCart(storeList)
        })()
    }, [])

    return (
        <CartContext.Provider value={{ isLoading, addItemCart, removeItemCart, clearAllItemsCart, listCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    return context
}