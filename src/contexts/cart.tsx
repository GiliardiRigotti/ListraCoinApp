import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from "../services/storage";
import { ISignIn, ISignUp, IUser } from "../interfaces/user";
import { IProduct } from "../interfaces/shop";

interface ICartContext {
    isLoading: boolean
    addItemCart: (item: IProduct) => void
    removeItemCart: (id: string) => void
    listCart: IProduct[]
    purchaseCart: () => Promise<void>
    clearAllItemsCart: () => void
}

const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [listCart, setListCart] = useState<IProduct[]>([])

    const addItemCart = useCallback((item: IProduct) => {
        setIsLoading(true)
        try {
            const listCartTemp = listCart
            listCartTemp.push(item)
            setListCart(listCartTemp)
            store.set('Cart', listCartTemp)
        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }, [])

    const removeItemCart = useCallback((id: string) => {
        setIsLoading(true)
        try {
            const listCartTemp = listCart.filter(item => item.id !== id)
            setListCart(listCartTemp)
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

    const purchaseCart = useCallback(async () => {
        setIsLoading(true)
        try {

        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }, [])

    return (
        <CartContext.Provider value={{ isLoading, addItemCart, removeItemCart, clearAllItemsCart, listCart, purchaseCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    return context
}