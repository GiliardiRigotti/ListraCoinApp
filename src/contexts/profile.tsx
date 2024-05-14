import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from "../services/storage";
import { ISignIn, ISignUp, IUser } from "../interfaces/user";

interface IProfileContext {
    isLoading: boolean
    user: IUser | null
    signIn: (form: ISignIn) => Promise<void>
    signUp: (form: ISignUp) => Promise<void>
    signOut: () => void
}

const ProfileContext = createContext({} as IProfileContext)

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [user, setUser] = useState<IUser | null>(null)


    const signIn = async (form: ISignIn) => {
        setIsLoading(true)
        try {
            setUser({
                avatar: 'https://www.rbsdirect.com.br/filestore/5/6/3/2/4/1/1_be403567a91f164/1142365_f1683261841dd35.jpg?version=1575255600',
                nome: 'Giliardi',
                saldo: 10000,
                dataCadastro: '26/10/2023',
                id: 'asdasd156+156asd',
                ...form
            })
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }

    const signUp = async (form: ISignUp) => {
        setIsLoading(true)
        try {
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }

    const signOut = () => {
        store.clear()
        setUser(null)
    }

    return (
        <ProfileContext.Provider value={{ isLoading, user, signIn, signUp, signOut }}>
            {children}
        </ProfileContext.Provider>
    )
}

export function useProfile() {
    const context = useContext(ProfileContext)
    return context
}