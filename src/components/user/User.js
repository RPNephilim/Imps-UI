import { useContext, useState } from "react";

import { OpenLoginContext } from "../../pages/homepage/Home";
import { LoggedInContext, UserContext } from "../../App";
import { FaRegUserCircle } from "react-icons/fa";
import { UserDropdown } from "../user-dropdown/UserDropdown";

export function User() {

    const { openLogin, setOpenLogin } = useContext(OpenLoginContext);
    const { isLoggedIn } = useContext(LoggedInContext);
    const { user } = useContext(UserContext);

    const [openDropdown, setOpenDropdown] = useState(false);

    const openLoginWidget = (e) => {
        console.log("user: " + user.name);
        setOpenLogin(!openLogin);
    }

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
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
                <div className="inline cursor-pointer" onClick={toggleDropdown}>
                    <FaRegUserCircle className="inline"/> {user.name}
                </div>
                <UserDropdown openDropdown={openDropdown}/>
            </div>

        </>
    );

}