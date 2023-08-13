import { useState } from 'react'
import Login from './login'
import Register from './register'
import { Box } from '@mui/material'

const Auth = () => {

    const [newUser, setNewUser] = useState(false)

    const handleNewUser = () => {
        setNewUser(!newUser)
    }

    return (
        <Box sx={{position:'absolute', left:'50%', top:'50%', transform: "translate(-50%, -50%)" }}>
             {!newUser ? <Login newUserHandler={handleNewUser} /> : <Register newUserHandler={handleNewUser} />}
        </Box>
        

    )
}


export default Auth