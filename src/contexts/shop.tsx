import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from "../services/storage";
import { ISignIn, ISignUp, IUser } from "../interfaces/user";
import { IProduct } from "../interfaces/shop";
import { api, urls } from "../services/api";

interface IShopContext {
    isLoading: boolean
    listProducts: IProduct[]
}

const ShopContext = createContext({} as IShopContext)

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [listProducts, setListProducts] = useState<IProduct[]>([])

    const getListProducts = useCallback(async () => {
        setIsLoading(true)
        try {
            const { data } = await api.get<IProduct[]>(urls.products)
            setListProducts(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        getListProducts()
    }, [])


    return (
        <ShopContext.Provider value={{ isLoading, listProducts }}>
            {children}
        </ShopContext.Provider>
    )
}

export function useShop() {
    const context = useContext(ShopContext)
    return context
}