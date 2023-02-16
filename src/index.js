import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Register from "./Components/Register"
import { BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import Userpage from './Components/Userpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path='/' element={<App />}  />
  <Route path='register' element={<Register/>}/>
  <Route path="login" element={<Userpage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


