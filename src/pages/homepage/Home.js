import { useState } from "react";
import Login from "../../components/login/Login";
import './Home.css'

function Home() {
    const [loginWidget, setLoginWidget] = useState(false);

    const revertLoginWidget = (e) => {
        setLoginWidget(!loginWidget)
    }

    const blurred = loginWidget?"w-full bg-sky-700 text-slate-50 p-8 z-0 blur-sm":"w-full bg-sky-700 text-slate-50 p-8 z-0 blur-none";
    return (
        <div>
            <Login render={loginWidget}/>
            <div className={blurred} >
                HOME
                <button onClick={revertLoginWidget} className="float-right">Login</button>
            </div>
            <div className="h-screen">
                hell
            </div>
        </div>

    );
}

export default Home;