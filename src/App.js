import React, {useContext, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import "./css/style.css";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./Context";
function App() {
  const [isAuth, setAuth] = useState(false)
  return (
    <AuthContext.Provider value = {{isAuth, setAuth}}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
