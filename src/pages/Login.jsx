import React, {useContext, useState, useRef} from "react";
import { AuthContext } from "../Context";
import MyInput from "../components/MyInput/MyInput";
import '../css/style.css'
const Login = () => {
  const {isAuth, setAuth} = useContext(AuthContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setVisible] = useState(false)
  const login = (event) => {
  event.preventDefault();
  if(name !== '' && password !== ''){
  setAuth(true)
  setName('')
  setPassword('')
  setVisible(false)
}
  setVisible(true)
  }
  return (
    <div>
      <h1>Авторизация</h1>
      <form>
        {isVisible && 
        <h2 className="errorLogin">Введите данные</h2>
        }
        <MyInput value = {name} onChange = {e => setName(e.target.value)}type = 'text' placeholder = 'введите логин' />
        <MyInput value = {password} onChange = {e => setPassword(e.target.value)} type = 'password' placeholder = 'введите пароль' style = {{marginTop: '10px'}} />
        <button style = {{background: 'transparent', border: '1px solid teal', marginTop: '10px', cursor: 'pointer'}} onClick={(event) => login(event)}>Войти</button>
      </form>
    </div>
  );
};
export default Login;
