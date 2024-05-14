import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/App/Home';
import { ShopScreen } from '../screens/App/Shop';
import { ProfileScreen } from '../screens/App/Profile';
import Icon from '../components/Icon';
import { IconNames } from '../assets/icons';
import { colors } from '../constants/colors';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.purple
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon iconName={IconNames.HOME_ICON} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon iconName={IconNames.BAG_ICON} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon iconName={IconNames.USER_PREFERENCE_ICON} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}