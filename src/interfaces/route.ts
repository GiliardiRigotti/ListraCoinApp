import { StackNavigationProp } from "@react-navigation/stack"

type IRootStack = {
    Login: undefined,
    ResetPassword: undefined,
    Subscribe: undefined
}

export type StackRoutes = StackNavigationProp<IRootStack>