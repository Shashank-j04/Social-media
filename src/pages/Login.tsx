import {auth, provider} from '../config/firebase.ts'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import "./Login.css";
export default function Login(){

    const navigate = useNavigate();

    const signInWithGoggle = async () => {
        const result = await signInWithPopup(auth,provider);
        //console.log(result)
        navigate("/")
        }


    return(
        <div className="login-container">
      <div className="login-content">
        <p className="login-text">Sign In with Google</p>
        <button onClick={signInWithGoggle} className="login-button">
          Sign in with Google
        </button>
      </div>
    </div>
    )
}