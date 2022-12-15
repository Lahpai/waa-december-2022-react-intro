import { useState } from 'react';

export default function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your username:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your password:
        <input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}