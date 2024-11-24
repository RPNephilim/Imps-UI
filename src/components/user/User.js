import { useContext } from "react";

import { OpenLoginContext } from "../../pages/homepage/Home";
import { LoggedInContext, UserContext } from "../../App";
import { FaRegUserCircle } from "react-icons/fa";

export function User() {

    const { openLogin, setOpenLogin } = useContext(OpenLoginContext);

    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
    const { user, setUser } = useContext(UserContext);

    const openLoginWidget = (e) => {
        console.log("user: " + user.name);
        setOpenLogin(!openLogin);
    }

    const logoutUser = () => {
        setIsLoggedIn(false);
        setUser({
            name: "",
            username: "",
            roles: []
        });
        console.log("Logout successful");
    }

    if (!isLoggedIn) {
        return (
            <>
                <button onClick={openLoginWidget} className="float-right">Login</button>
            </>
        );
    }
    return (
        <>
            <div className="float-right">
                <FaRegUserCircle className="inline" /> {user.name}
                <button onClick={logoutUser} className="block">Logout</button>
            </div>

        </>
    );

}