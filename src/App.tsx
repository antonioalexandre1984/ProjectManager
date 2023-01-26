import React from 'react';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/contexts/AuthContext';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { AppLayout } from './components/AppLayout';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactNotifications />
      <AuthContextProvider>
        <AppLayout>
          <Router />
        </AppLayout>
        <GlobalStyle />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
