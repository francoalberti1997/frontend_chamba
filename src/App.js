import './App.css';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Register from './components/register/Register';
import Profile from './components/profile/Profile';


function App() {
  return (
    <Router>
      <Routes>
   
    <Route path='/' element={<>
      <Nav/>
      </>} />
    
    {/* <Route path='*' element={<Navigate to='/' />} /> */}
        <Route path='/login/' element={<Login />} />
        <Route path='/register/' element={<Register />} />
        <Route path='/profile/' element={<Profile />} />

      </Routes>
    </Router>

  );
}

export default App;
