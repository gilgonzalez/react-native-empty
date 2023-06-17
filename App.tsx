import 'react-native-gesture-handler';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import { ThemeProvider } from './src/context/Theme/ThemeContext';


const App = () => {
  return (
    <AppState>
        <StackNavigation/>
    </AppState>
  );
};

const AppState = ({ children }: {children : JSX.Element | JSX.Element[]}) => {

  return (
    <ThemeProvider >
      { children}
    </ThemeProvider>
  );
};

export default App;
