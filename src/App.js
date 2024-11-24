import { createContext, useState } from 'react';
import './App.css';
import { Home } from './pages/homepage/Home';

export const UserContext = createContext();
export const LoggedInContext = createContext();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    roles: []
  });

  return (

    <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Home />
        </div>
      </UserContext.Provider>
    </LoggedInContext.Provider>

  );
}

export default App;
