import React from 'react'
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const res = await axios.post("http://localhost:5000/api/auth/login", {)
    }
  return (
    <div className='Login '>

      <form onSubmit={handleSubmit}>
              <h1>Sign In</h1>
     
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder='Johndeo' name="username" required  onChange={e=>setUsername(e.target.value)}/>

     
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder='password' name="password" required onChange={e=>setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>
    </div>
  );

}
export default Login;