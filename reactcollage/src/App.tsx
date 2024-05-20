import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[userName,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const handleLogin = (userName: string, password: string) => {
    setIsLoggedIn(true);
    setUserName(userName);
    setPassword(password);
  };

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard userName={userName} password={password}/> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
