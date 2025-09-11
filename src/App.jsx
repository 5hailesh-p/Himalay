import { createContext, useContext, useState } from 'react'

import './App.css'
import Login from './pages/Login'
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);



function App() {
  const [mode, setMode] = useState(true);
  const [login, setLogin] = useState(false);

  const toggleMode = () => setMode((prev) => !prev);
  const value = { mode, toggleMode, login };
  const darkTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
    },
  });

  return (
    <BrowserRouter>
      <AppContext.Provider value={value}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={login ? <Login /> : <Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </AppContext.Provider>
    </BrowserRouter>


  )
}

export default App
