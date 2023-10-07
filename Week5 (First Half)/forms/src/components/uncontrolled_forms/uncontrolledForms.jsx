import React, { useRef } from "react";

export const UncontrolledForms = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const divRef= useRef(null);
    
  const login = (event) => {
    event.preventDefault();

    // const email = event.target.email.value;
    // const password = event.target.password.value;

    console.log(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div ref={divRef}>
      <form onSubmit={login}>
        <h1>Login Form</h1>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Please enter your Email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Please enter your Password"
          />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
};
