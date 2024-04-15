import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details} from './pages/Details'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import { MyContext } from "./mycontext";
import theme from "./styles/theme";


import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme = { theme } >
      <GlobalStyles />
      <MyContext.Provider value= {{ email: "name: dantas ferreira, dantas@email.com"}}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,  
)
