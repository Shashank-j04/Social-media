import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import "./Navbar.css"; // Make sure to import your CSS file
import { signOut } from "firebase/auth";
export default function Navbar() {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="nav-link">Home</Link>
        {!user ? (<Link to="/login" className="nav-link">Login</Link>) :
        (<Link to="/createpost" className="nav-link"> Create Post</Link>)}
        <div className="user-info">
        {user && (<>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ""} alt="user-avatar" width="50" height="50" />
          <button className="logout-button" onClick={signUserOut}>Log Out</button>
        </>)}
        </div>
        
      </div>
    </>
  );
}
