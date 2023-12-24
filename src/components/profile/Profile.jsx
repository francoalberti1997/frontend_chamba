import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../nav/Nav';


const Profile = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

        
        useEffect(() => {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/get_user', {
                        headers: {
                            Authorization: `Token ${token}`
                        }
                    });
                    setUserData(response.data);
                    console.log(userData);
                } catch (error) {
                    console.error('Error:', error);
                    // Puedes manejar el error aquí, por ejemplo, redirigir a la página de login
                }
            };
                
            if (!token) {
                navigate('/login'); // Redirige a la página de login si no hay un token
            } else {
                fetchUserData();
            }
        }, [token, navigate]);

        
      return(
              
        <>
            {/* <Nav/> */}
            <div class="grid-container">
                <div class="grid-item1"><Nav/></div>
                
                <div class="grid-item2">
                    {/* Pasar forms dependiendo de grid item 3 seleccionado */}
                </div>

                <div class="grid-item3">
                <ul>
                    <li><a href="#">Personal Information</a></li>
                    <li><a href="#">My Skills</a></li>
                    <li><a href="#">Jobs</a></li>
                </ul>
                </div>
            </div>
        </>
      )
    }
    
    export default Profile
  