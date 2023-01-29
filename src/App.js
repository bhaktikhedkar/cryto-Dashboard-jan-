
import './App.css';
import {BrowserRouter, Route ,Routes} from "react-router-dom" ;  //install react-router-dom
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material';
import Coin from './Pages/Coin';

function App() {
   //If you wish to customize the theme(in MUI), 
 //you need to use the ThemeProvider component in order to inject a theme into your application. 
 //However, this is optional; MUI components come with a default theme.
 //For this install createTheme and ThemeProvider from @mui/material
 const theme = createTheme({
  palette :{
      primary :{
          main : "#3a80e9",
      },
  },
});
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route> 
        {/* dynamic routing - " /:id "  - this is the ID - this is url parameter - hence we imported useParams hook*/}
        {/* <Route path="/coin/:id" element={<Coin />}></Route> */}
        <Route path="/coin/:abc" element={<Coin />}></Route>
      </Routes>
      </BrowserRouter>
   </ThemeProvider>
   </div>
  );
}

export default App;
