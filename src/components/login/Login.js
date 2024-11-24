import { useState, useContext } from 'react'
import { IoArrowBack } from "react-icons/io5";
import './Login.css';
import { baseUrl, testUrl, prisonUserEndpoint } from "../imps-service/ImpsService";
import axios from 'axios';
import { OpenLoginContext } from "../../pages/homepage/Home";
import { LoggedInContext, UserContext } from '../../App';

export default function Login() {

    const { openLogin, setOpenLogin } = useContext(OpenLoginContext);

    const { setIsLoggedIn } = useContext(LoggedInContext);

    const {user, setUser} = useContext(UserContext);

    const [username, setUsername] = useState("");
    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const [password, setPassword] = useState("");
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const LoginUser = () => {
        const url = baseUrl + testUrl;
        axios.get(url, {
            auth: {
                username: username,
                password: password
            }
        })
        .catch((err) => {
            console.log("Unable to login to due error"+err);
        })
        .then((response) => {
            getUser();
            setIsLoggedIn(true);
            setOpenLogin(false);
            console.log("TestUrl: "+response.data);
        });

    }

    const getUser = () => {
        const url = baseUrl + prisonUserEndpoint.context + prisonUserEndpoint.getUser + username;
        axios.get(url)
        .catch((err) => {
            console.log("Unable to get User error"+err);
        })
        .then((response) => {
            console.log("Fetch prisonUser: "+response.data.name);
            setUser(response.data);
            console.log(user.name);
        });
    }

    const closeLoginWidget = () => {
        setOpenLogin(!openLogin);
    }

    const loginWindowClass = openLogin ? "blur-none bg-gray-300 w-1/2 md:w-1/4 h-max absolute z-10 widget p-4 flex flex-col" :
        "blur-none bg-gray-300 w-1/2 md:w-1/4 h-max absolute z-10 widget p-4 flex flex-col hidden";

    return (
        <div className={loginWindowClass}>
            <input className='w-full my-2 p-2 focus:outline-none' value={username} placeholder='Username' onChange={updateUsername} />
            <input type='password' className='w-full my-2 p-2 focus:outline-none' value={password} placeholder='Password' onChange={updatePassword} />
            <div>
                <button className='w-max my-2 p-2 border-2 border-indigo-500 float-right' onClick={LoginUser}>LOGIN</button>
                <div className='m-4 w-max hover:cursor-pointer' onClick={closeLoginWidget}><IoArrowBack size={30} /></div>
            </div>

            <div className='w-max place-self-end text-blue-600'><a href='/prison-user'>New User?</a></div>
        </div>
    )

}