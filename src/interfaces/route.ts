import { StackNavigationProp } from "@react-navigation/stack"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"

type IRootStack = {
    Login: undefined,
    ResetPassword: undefined,
    Subscribe: undefined
}

export type StackRoutes = StackNavigationProp<IRootStack>

type IRootTab = {
    HomeScreen: undefined,
    ShopScreen: undefined,
    ProfileScreen: undefined
}

export type TabRoutes = BottomTabNavigationProp<IRootTab>