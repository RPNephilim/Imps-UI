import { useContext } from "react";
import { LoggedInContext, UserContext, AuthContext } from "../../App";

export function UserDropdown({openDropdown}){
    const { setIsLoggedIn } = useContext(LoggedInContext);
    const { setUser } = useContext(UserContext);
    const {setAuth} = useContext(AuthContext);
    const logoutUser = () => {
        setIsLoggedIn(false);
        setUser({
            name: "",
            username: "",
            roles: []
        });
        setAuth({
            username: "",
            password: ""
        })
        console.log("Logout successful");
    }

    if(openDropdown){
        return(
            <>
                <div className="bg-cyan-600 text-slate-50 pl-6 p-2 rounded-lg mt-2">
                    <ul>
                        <li className="cursor-pointer opacity-100">Profile</li>
                        <li onClick={logoutUser} className="cursor-pointer opacity-100">Logout</li>
                    </ul>
                </div>
            </>
        );
    }

    return(
        <>
        </>
    );
    
}