import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/App/Home';
import { ShopScreen } from '../screens/App/Shop';
import { ProfileScreen } from '../screens/App/Profile';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}