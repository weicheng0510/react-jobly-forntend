import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import UserContext from './UserContext.jsx';
import NavBar from './components/NavBar';
import JoblyApi from './api';
import Companies from './components/company/Companies';
import CompanyDetail from './components/company/CompanyDetail';
import Home from './components/home/Home';
import Jobs from './components/job/Jobs';
import useLocalStorage from './helpers/useLocalStorage.js'
import './styles/App.css';
import LoginForm from './components/auth/LoginForm.jsx';
import Signup from './components/auth/SignupForm.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Profile from './components/auth/Profile.jsx';


function App() {
  const [token, setToken] = useLocalStorage('token');
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobApply, setJobApply] = useState(new Set([]));

  const checkUser = async () => {
    if (token) {
      try {
        const { username } = jwtDecode(token);
        JoblyApi.token = token;
        const user = await JoblyApi.getCurrentUser(username);
        setCurrentUser(user);
        setLoading(false);
        setJobApply(new Set(user.applications))
      } catch (e) {
        console.error('porblem loading user info', e);
        setCurrentUser(null);
        setLoading(false)
      }
    } else {
      setCurrentUser(null);
      setLoading(false);
    }
  }

  useEffect(() => {
    checkUser();
  }, [token]);


  // Handles login
  const login = async (data) => {
    let token = await JoblyApi.login(data);
    setToken(token);
  };

  // handle signup 
  const signup = async (data) => {
    let token = await JoblyApi.signup(data);
    setToken(token);
  };

  // handle logout
  const logout = () => {
    setCurrentUser();
    setLoading(false);
    setToken(null);
  };

  // job apply
  const applyJob = async (id) => {
    if (jobApplied(id)) return;
    await JoblyApi.jobApply(currentUser.username, id);
    setJobApply(new Set([...jobApply, id]));
  };

  // job applied
  const jobApplied = (id) => {
    return jobApply.has(id);
  }


  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, applyJob, jobApplied }}>
      <div className='App'>
        <NavBar logout={logout} />
        {loading ? <div>Loading...</div> :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginForm login={login} />} />
            <Route path='/signup' element={<Signup signup={signup} />} />
            <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path='/companies' element={<ProtectedRoute><Companies /></ProtectedRoute>} />
            <Route path='/companies/:handle' element={<ProtectedRoute><CompanyDetail /></ProtectedRoute>} />
            <Route path='/jobs' element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
          </Routes>
        }
      </div>
    </UserContext.Provider>

  )
}

export default App
