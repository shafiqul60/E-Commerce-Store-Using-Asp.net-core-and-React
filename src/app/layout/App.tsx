import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/about/aboutpage";
import Catalog from "../../features/catalog/catalog";
import ProductDetail from "../../features/catalog/productdetail";
import ContactPage from "../../features/contact/contactpage";
import HomePage from "../../features/home/homepage";
import LoginPage from "../../features/login/loginpage";
import RegisterPage from "../../features/login/registerpage";
import Header from "./header";


function App() {

  const [darkMode, setdarkMode]= useState(false);

  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode:paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea': '#121212'
      }
    }
  });

  function handleThemeChange (){
   setdarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/> 
      <Container>
        <Routes>
        <Route path='/' element={<HomePage/>} />          
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/catalog/:id' element={<ProductDetail/>} />          
        <Route path='/about' element={<AboutPage/>} />          
        <Route path='/contact' element={<ContactPage/>} />          
        <Route path='/login' element={<LoginPage/>} />          
        <Route path='/register' element={<RegisterPage/>} />          

        </Routes>
      </Container>     
    </ThemeProvider>
  );
}
export default App;
