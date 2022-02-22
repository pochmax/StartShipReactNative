// App.tsx

import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { NetworkProvider } from 'react-native-offline';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Offline } from './src/components/Offline';

const queryClient = new QueryClient()

const App = () => {
//   return <LoginScreen />;
//   return <TermsScreen/>
    return <NetworkProvider>
        <QueryClientProvider client={queryClient}><Offline/><StarshipFeedScreen/></QueryClientProvider>
    </NetworkProvider>
};

export default App;