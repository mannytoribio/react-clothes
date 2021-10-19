import { useState } from "react"
import { useHistory } from "react-router-dom"
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAvnYkRACnEQFUoa_Rk06kTPIc56-ZiUAc",
  authDomain: "mt-clothes.firebaseapp.com",
  projectId: "mt-clothes",
  storageBucket: "mt-clothes.appspot.com",
  messagingSenderId: "802443322496",
  appId: "1:802443322496:web:a45d73f6203a87c2a07265"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()
  const auth = getAuth(app)
  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(res => didLogin(res.user))
      .catch(err => alert(err.message))
  }
  const googleLogin = (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then(res => didLogin(res.user))
    .catch(err => alert(err.message))
  }
  const didLogin = (user) => {
    localStorage.setItem('userId', user.id)
    localStorage.setItem('user', JSON.stringify(user))
    history.push('/add')
  }
  return (
    <>
      <h1>Please Login:</h1>
      <form onSubmit={e => {
        e.preventDefault()
        userLogin()
      }}>
        <label htmlFor="email">Email:
          <input type="email" name="email" value={email} 
            onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label htmlFor="password">Password:
          <input type="password" name="password" value={password} 
            onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Login" />
        &nbsp;       
        <button onClick={(e) => googleLogin(e)}>Sign in with Google</button>
      </form>
    </>
  )
}