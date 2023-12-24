import React, { useState } from 'react'
import logo_pala from '../nav/logo_pala.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Nav = () => {

  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem('token'));

  const logout = () =>{
    
      axios.post('http://127.0.0.1:8000/logout-view/', null, {
          headers: {
          Authorization: `Token ${token}` // Agrega el token a la cabecera de Authorization
          }
      })
          .then(response => {
          console.log(response.data)
          localStorage.clear();
          setToken(null);
          navigate("/login/");
          })
          .catch(error => {
          console.error('Error:', error);
          });
    }

  return (
    <nav>
        <div className='nav-logo'><img src={logo_pala} alt="" width={"75px"} height={"75px"}/></div>
        <div className='wrapper'>
            <div><i class="fa fa-solid fa-envelope"></i></div>
            <div><i class="fa fa-solid fa-bell"></i></div>
            <div><i class="fa fa-solid fa-user"></i></div>
            <div onClick={toggleMenu}>
              {!clicked ? <i class="fas fa-sign-out-alt"></i> : <i class="fa fas fa-times"></i>}
            </div>
        </div>
        
        {clicked ? 
        <div className='logout'>
            <div onClick={logout}>Logout</div>
        </div> : <></>} 

    </nav>
      
  )
}

export default Nav
