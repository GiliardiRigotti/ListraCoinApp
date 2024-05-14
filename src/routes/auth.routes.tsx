import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/Auth/Login';
import { SubscribeScreen } from '../screens/Auth/Subscribe';
import { ForgetScreen } from '../screens/Auth/Forget';

const Stack = createStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Subscribe" component={SubscribeScreen} />
            <Stack.Screen name="Forget" component={ForgetScreen} />
        </Stack.Navigator>
    );
}