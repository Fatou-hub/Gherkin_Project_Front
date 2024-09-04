// import React, { useState } from "react";
// import "../css/login.css";
// import NewMenu2 from "./newMenu2";

// const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <>
//             <NewMenu2 />
//             <div className="auth-form-container">
//                 <h2>Login</h2>
//                 <form className="login-form" onSubmit={handleSubmit}>
//                     <label htmlFor="email">email</label>
//                     <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                     <label htmlFor="password">password</label>
//                     <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                     <button type="submit">Log In</button>
//                 </form>
//                 {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
//             </div>
//         </>

//     )
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/login.css";
import NewMenu2 from "./newMenu2";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log to check if the handleSubmit is triggered
    console.log("Form submitted");
    console.log("Email:", email);

    // Simulate a successful login process
    if (email && pass) { // You can add more validation or API logic here
      navigate('/home'); // Redirect to the homepage
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <>
      <NewMenu2 />
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
      </div>
    </>
  );
}

export default Login;
