import {useState} from 'react'
import styles from './register.module.css'
import {emailValidation, passwordValidation} from './validation/validationUtils'
import jwtDecode from 'jwt-decode'

const Login = ({newUserHandler}: { newUserHandler: () => void}) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginHandler = (e : React.MouseEvent) => {
    e.preventDefault();

    if (emailValidation(email) && passwordValidation(password)) {
      httpLogin();
      return;
    }
    alert('Email or password is not valid');
  }

  const httpLogin = async () => {
    try {
      const response = await fetch('http://localhost:5219/auth/login', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      });
  
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', "Bearer " + data.token);
        const decodedToken : {Name: string, Id: string} = jwtDecode(data.token);
        localStorage.setItem("name", decodedToken.Name)
        localStorage.setItem("id" ,decodedToken.Id)
        window.location.href = '/';
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please check the console.");
    }
  };
  
    
  return (
    <div className={styles.container}>
        <div>    
        <h1>Login</h1>
        </div>
        <div>
        <input
         className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        </div>
        <div>
        <input className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
        </div>
        <div>
        <button className={styles.button} onClick={(e) => loginHandler(e)}>Submit</button>
        </div>    
        <span onClick={newUserHandler}> You don't have account? Register!</span> 
    </div>

  )
}

export default Login