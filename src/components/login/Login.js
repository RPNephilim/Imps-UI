import { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import './Login.css'

export default function Login({ render }) {

    const [username, setUsername] = useState("");
    const updateUsername = (e) => {
        setUsername(e.target.value);
        console.log(username);
    }

    const [password, setPassword] = useState("");
    const updatePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }

    const loginUser = () => {
        const user = {
            username : username,
            password : password
        }
    }

    const closeLoginWidget = () => {
        render=false;
    }
    if (render) {
        return (
            <div className="bg-gray-300 w-1/2 md:w-1/4 h-max absolute z-10 widget p-4">
                <input className='w-full my-2 p-2 focus:outline-none' value={username} onChange={updateUsername}/>  
                <input className='w-full my-2 p-2 focus:outline-none' value={password} onChange={updatePassword}/>
                <button className='w-max my-2 p-2 border-4 border-indigo-500 float-right' onClick={loginUser}>LOGIN</button>
                <div className='m-4 w-max hover:cursor-pointer' onClick={closeLoginWidget}><IoArrowBack size={30}/></div>
            </div>
        )
    }
}