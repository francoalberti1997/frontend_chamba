import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Login from "../login/Login"
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [Password2, setPassword2] = useState()
    const [Nombre, setNombre] = useState()
    const [Apellido, setApellido] = useState()
    const [Email, setEmail] = useState()
    const [registro, setRegistro] = useState(false)



    useEffect(() => {
        if (token) {
            navigate('/profile');
        }
    }, [token, navigate]);
  console.log(token)

  
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        const loginData = {
          username: username,
          password: password,
          password2: Password2,
          first_name: Nombre,
          last_name: Apellido,
          email: Email,
          };
  
        axios.post('http://127.0.0.1:8000/register', loginData)
        .then(response => {
            if (response.status == 201){
                setRegistro(!registro)
                navigate('/login/');

            }
        })
        .catch(error => {
          console.error('Error:', error.request.response);
          // Aquí puedes manejar el error en caso de que ocurra
        }); 
        
        }

  return (
    <>
    <div className='register'>
      <form action="" className='login-form' onSubmit={handleSubmit}>
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Create a New Account</div>
                
                <div class="input-container ic1">
                    <input id="usuario" class="input" type="text" placeholder=" "  value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">Usuario</label>
                </div>
                
                <div class="input-container ic2">
                    <input id="password" class="input" type="password" placeholder=" "  value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Password</label>
                </div>

                <div class="input-container ic2">
                    <input id="password" class="input" type="password" placeholder=""  value={Password2} onChange={(e) => setPassword2(e.target.value)}/>
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Password2</label>
                </div>


                <div class="input-container ic2">
                    <input id="password" class="input" type="text" placeholder=" "  value={Nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Nombre/s</label>
                </div>

                <div class="input-container ic2">
                    <input id="password" class="input" type="text" placeholder=" "  value={Apellido} onChange={(e) => setApellido(e.target.value)}/>
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Apellido</label>
                </div>

                <div class="input-container ic2">
                    <input id="password" class="input" type="mail" placeholder=" "  value={Email} onChange={(e) => setEmail(e.target.value)}/>
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Email</label>
                </div>

                <button type="text" class="submit">submit</button>
                <p className='form-p'><a href="http://localhost:3000/login/">¿Ya tienes una cuenta?</a></p>
            </div> 
        </form>
    </div> 

    </>
    
  )
}

export default Register
