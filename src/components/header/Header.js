import { useContext } from 'react';
import { User } from '../user/User';
import { OpenLoginContext } from '../../pages/homepage/Home';
import Login from "../../components/login/Login";

export function Header() {

    const {openLogin} = useContext(OpenLoginContext);
    const headerClass = openLogin ? "w-full bg-cyan-700 text-slate-50 p-8 z-0 blur-sm" : "w-full bg-cyan-700 text-slate-50 p-8 z-0";


    return (
        <>
            <div className={headerClass} >
                HOME
                <User />
            </div>
            <Login />
        </>
    );
}