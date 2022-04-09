import {getAuth} from 'firebase/auth';
import {useState, useEffect} from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';

function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const nvigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    Navigate('/');
  }
  
  return <div className='profile'>
    <header className="profileHeader">
      <p className="pageHeader">My profile</p>
      <button className="logOut"
      onClick={onLogout}>
        Logout
      </button>
    </header>
  </div>
}

export default Profile