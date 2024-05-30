import Login from './login';
import './App.css';
import SignUp from './signup';
import Home from './home';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
  <Routes>
   <Route index element={<Login />} />
   <Route expact path='signup' element={<SignUp />} />
   <Route path='home' element={<Home />}/>
  </Routes>
  </HashRouter>
  );
}

export default App;
