import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useProfile } from '../contexts/profile';
import { CartProvider } from '../contexts/cart';

export default function Routes() {
    const { user } = useProfile()
    return (
        <NavigationContainer>
            {
                !!user ?
                    <CartProvider>
                        <AppRoutes />
                    </CartProvider>
                    :
                    <AuthRoutes />
            }
        </NavigationContainer>
    );
}