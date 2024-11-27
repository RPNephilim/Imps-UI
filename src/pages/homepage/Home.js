import { createContext, useState } from 'react';
import './Home.css'
import { Header } from '../../components/header/Header';
import background from '../../assets/thousand_sunny_go.jpg';

export const OpenLoginContext = createContext();

export function Home() {

    const [openLogin, setOpenLogin] = useState(false);
    const bodyClass = openLogin ? "h-screen bg-cover blur-sm" : "h-screen bg-cover bg-center blur-none";

    return (
        <>
            <OpenLoginContext.Provider value={{openLogin, setOpenLogin}}>
                <Header />
                <div className={bodyClass} style={{backgroundImage: `url(${background})`}}>
                    
                </div>
            </OpenLoginContext.Provider>
        </>

    );
}
