import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const emailRaf = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleForgetPass = () => {
    const forgetEmail = emailRaf.current.value;

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(forgetEmail)) {
      console.log("Please Provide a Valid Email");
    }
    sendPasswordResetEmail(auth, forgetEmail).then(() => {
      alert("Please Check Your Email");
      return;
    });
  };

  // JSX part
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8"> Log in</h2>
      <form onSubmit={handleLogin}>
        <input ref={emailRaf} type="email" name="email" className="mb-3 w-full py-2 px-4 border-2" placeholder="Your Email" />
        <br />
        <input type="password" name="password" placeholder="Password" className="mb-3 w-full py-2 px-4 border-2" id="" />
        <br />
        <input type="submit" value="Submit" className="btn w-full btn-primary border-2" />
      </form>

      {/* forget Password */}
      <div>
        <div className="flex justify-between items-center">
          <p className="cursor-pointer" onClick={handleForgetPass}>
            Forget Password
          </p>
        </div>
        <div>
          <p>
            New to this Website?{" "}
            <Link to="/register" className="underline font-semibold text-blue-600">
              {" "}
              Please Registration
            </Link>
          </p>
        </div>
      </div>

      {error && <p className="text-red-700 font-bold mt-3">{error}</p>}
    </div>
  );
};

export default Login;
