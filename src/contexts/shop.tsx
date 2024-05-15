import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import NetInfo from '@react-native-community/netinfo';
import { IProduct } from "../interfaces/shop";
import { api, urls } from "../services/api";
import { store } from "../services/storage";

interface IShopContext {
    isLoading: boolean
    listProducts: IProduct[]
}

const ShopContext = createContext({} as IShopContext)

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [listProducts, setListProducts] = useState<IProduct[]>([])

    const getListProducts = async () => {
        setIsLoading(true)
        try {
            NetInfo.fetch().then(async (state) => {
                if (state.isConnected) {
                    const { data } = await api.get<IProduct[]>(urls.products)
                    await store.set('Products', data)
                    setListProducts(data)
                } else {
                    getStoreProducts()
                }
            });

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const getStoreProducts = async () => {
        const storeProducts = await store.get('Products')
        setListProducts(storeProducts)
    }

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