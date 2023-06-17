import { createContext, useReducer } from 'react';
import React from 'react';
import { ThemeState, darkTheme, lightTheme, themeReducer } from '../../reducers/ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [theme, dispatch] = useReducer(themeReducer, darkTheme);
  const setDarkTheme = () => { dispatch({type: 'set_dark_theme'});};
  const setLightTheme = () => { dispatch({type: 'set_light_theme'});};

  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
