import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
     
  )
}

export default App
