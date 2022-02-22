// App.tsx

import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const App = () => {
//   return <LoginScreen />;
//   return <TermsScreen/>
    return <QueryClientProvider client={queryClient}><StarshipFeedScreen/></QueryClientProvider>
};

export default App;