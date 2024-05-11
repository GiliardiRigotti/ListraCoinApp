import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export default function App() {
    return (
        <NavigationContainer>
            {
                true ?
                    <AppRoutes />
                    :
                    <AuthRoutes />
            }
        </NavigationContainer>
    );
}