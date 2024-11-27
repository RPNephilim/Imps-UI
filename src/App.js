import { createContext, useState } from 'react';
import './App.css';
import { Home } from './pages/homepage/Home';

export const UserContext = createContext();
export const LoggedInContext = createContext();
export const AuthContext = createContext();

function App() {

  const [auth, setAuth] = useState({
    username: "",
    password: ""
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    roles: []
  });

  return (

    <AuthContext.Provider value={{ auth, setAuth }}>
      <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <UserContext.Provider value={{ user, setUser }}>
          <div className="App">
            <Home />
          </div>
        </UserContext.Provider>
      </LoggedInContext.Provider>
    </AuthContext.Provider>


  );
}

export default App;
