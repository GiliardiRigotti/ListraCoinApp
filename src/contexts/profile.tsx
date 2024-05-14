import React, { createContext, useContext, useEffect, useState } from "react";
import { store } from "../services/storage";
import { ISignIn, ISignUp, IUser } from "../interfaces/user";
import { api, urls } from "../services/api";
import { useToastNotification } from "./toastSheet";
import { useNavigation } from "@react-navigation/native";

interface IProfileContext {
    isLoading: boolean
    user: IUser | null
    signIn: (form: ISignIn) => Promise<void>
    signUp: (form: ISignUp) => Promise<boolean>
    signOut: () => void
}

const ProfileContext = createContext({} as IProfileContext)

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
    const { showNotification } = useToastNotification()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [user, setUser] = useState<IUser | null>(null)


    const signIn = async (form: ISignIn) => {
        setIsLoading(true)
        try {
            const { data } = await api.get<IUser[]>(urls.user)
            const findUser = data.find(item => item.email === form.email)
            if (!findUser) throw new Error('Verificar e-mail ou senha se foram digitados corretamente')
            if (findUser?.senha == form.senha) {
                setUser(findUser)
                store.set('User', findUser)
                return
            }
            throw new Error('Verificar e-mail ou senha se foram digitados corretamente')
        } catch (error) {
            showNotification('Aviso', error as string)
        } finally {
            setIsLoading(false)
        }
    }

    const signUp = async (form: ISignUp) => {
        setIsLoading(true)
        try {
            const newUser: IUser = {
                dataCadastro: new Date().toISOString(),
                saldo: 10000.00,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3W3oppN7sdVCsUWwwnPIn9pX6E6G2UW70w&usqp=CAU',
                ...form
            }
            const { data } = await api.post(urls.user, newUser)
            console.log(data)
            showNotification('Aviso', 'Cadastrado com sucesso!')
            return true
        } catch (error) {
            return false
        } finally {
            setIsLoading(false)
        }
    }

    const signOut = () => {
        store.clear()
        setUser(null)
    }

    useEffect(() => {
        const storeUser: IUser = store.get('User')
        storeUser && setUser(storeUser)
    }, [])

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