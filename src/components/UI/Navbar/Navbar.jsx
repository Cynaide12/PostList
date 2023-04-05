import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context";
import cl from './Navbar.module.css'
const Navbar = () => {
	const {isAuth, setAuth} = useContext(AuthContext)
	const unAuth = (event) => {
	event.preventDefault()
	setAuth(false)
	}
return(
  <div className={cl.navbar}>
	{isAuth && 
	<>
		<div>
				<button className="remBtn" onClick={(e) => unAuth(e)}>Выход</button>
			</div>
		 <div className = {cl.navbar__links}>
			<Link to = '/about'>О сайте</Link>
			<Link to = '/pages'>Посты</Link>
		 </div>
		 </>
		 }
		</div>
		)
}
export default Navbar