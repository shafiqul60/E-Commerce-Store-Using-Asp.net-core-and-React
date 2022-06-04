import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../../features/about/aboutpage";
import Catalog from "../../features/catalog/catalog";
import ProductDetail from "../../features/catalog/productdetail";
import ContactPage from "../../features/contact/contactpage";
import HomePage from "../../features/home/homepage";
import LoginPage from "../../features/login/loginpage";
import RegisterPage from "../../features/login/registerpage";
import Header from "./header";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../Error/ServerError";
import NotFound from "../Error/NotFound";
import { ToastContainer } from "react-toastify";
import Basket from "../../features/basket/basket";
import BasketPage from "../../features/basket/basket";

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
     <ToastContainer position='top-right' hideProgressBar/>
    <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/> 
      <Container>
        <Switch>
        <Route exact path='/' component={HomePage} />          
        <Route exact path='/catalog' component={Catalog} />
        <Route path='/catalog/:id' component={ProductDetail} />          
        <Route path='/about' component={AboutPage} />          
        <Route path='/contact' component={ContactPage} />          
        <Route path='/login' component={LoginPage} />          
        <Route path='/register' component={RegisterPage} />          
        <Route path='/server-error' component={ServerError} />  
        <Route path='/basket' component={BasketPage} />  
        <Route component={NotFound} />  
        </Switch>     
      </Container>     
    </ThemeProvider>
  );
}
export default App;
