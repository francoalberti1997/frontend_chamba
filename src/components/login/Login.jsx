import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  

const Home = () => {

  const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            username: username,
            password: password,
        };

        axios.post('http://127.0.0.1:8000/login-view/', loginData)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                navigate('/profile/');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        if (token) {
            navigate('/profile');
        }
    }, [token, navigate]);
  console.log(token)

  return (
    <div className='login'>
        <form action="" className='login-form' onSubmit={handleSubmit}>
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Login into your account</div>
                
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

                <button type="text" class="submit">submit</button>
                <p className='form-p'><a href="http://localhost:3000/register/">¿No tienes una cuenta?</a></p>
            </div> 
        </form>
    </div>
  )
}

export default Home
