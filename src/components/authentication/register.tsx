import { useState } from "react"
import  styles from './register.module.css'
import {emailValidation, passwordValidation , comparePasswords} from './validation/validationUtils'

const Register = ({newUserHandler} : {newUserHandler: () => void} )  => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [password2, setPassword2] = useState<string>('');

    const  registerHandler = ( e : React.MouseEvent) => {
        e.preventDefault();
        setPasswordError(false);
        if(!emailValidation(email)) {
            alert('Email is not valid');
            return;
        }
        if(!passwordValidation(password)) {
            setPasswordError(true);
            return;
        }
        if(!comparePasswords(password, password2)) {
            alert('Passwords do not match');
            return;
        }

        httpRegister();
        
    }

    const httpRegister = async () => {
        const response  = await fetch('http://localhost:5219/auth/registration', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email" : email, "password":password, "confirmPassword": password2})
        })
        const data = await response.text();
        console.log(data);
    }


  return (
    <div className={styles.container}>
        <div>    
        <h1 >Register</h1>
        </div>
        <div>
        <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        </div>
        <div>
        <input className={styles.input}type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        </div>
        <div>
        <input className={styles.input} type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='Confirm Password' />
        </div>
        <div>{passwordError && <span className={styles.error}>Password must contain at least 8 characters, one letter and one number</span>}</div>
        <div>
        <button onClick={(e) => registerHandler(e)} className={styles.button}>Submit</button>
        </div>    
        <span onClick={newUserHandler}> You already have account? Login!</span> 
    </div>  )
}

export default Register