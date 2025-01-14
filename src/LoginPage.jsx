import axios from 'axios'
import { useState } from 'react'


const jwt = localStorage.getItem('jwt');
if (jwt) { 
  axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}


export function LoginPage () { 
  const [ errors, setErrors ] = useState([]);

  const handleSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("/sessions.json", params).then((response) => { 
      console.log(response.data);
      axios.deafults.headers.common['Authorization'] `Bearer ` + response.data.jwt;
      event.taget.reset();
      window.location.href = '/jobs';
    }).catch((error) => { 
      console.log(error.response);
      setErrors(["Invalid email or password."]);
    });
  };

  return (
    <div id='login'>
      <h1>Login</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            Email: <input name='email' type='email' required />
          </div>
          <div>
            Password: <input type='password' name='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
    </div>
  );
}