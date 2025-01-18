import React from "react";
import styles from "./SignUp.module.scss";

const SignUp: React.FC = () => {
  return (
    <>
      <div className={styles.root}>
        <h1>Create an account</h1>
        <h2>Enter your details below</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="button">Create Account</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
