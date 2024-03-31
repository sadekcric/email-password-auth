import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [passType, setPassType] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    if (!accepted) {
      setError("Please Accept Our terms and condition");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        sendEmailVerification(result.user)
          .then(() => {
            alert("Please verify Your Account.");
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        setError(err.message);
      });
    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className="relative">
                <input
                  name="password"
                  type={passType ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />{" "}
                <button className="absolute top-4 right-3 " onClick={() => setPassType(!passType)}>
                  {passType ? <IoMdEye /> : <IoEyeOff />}
                </button>
              </div>

              <div className="my-2">
                <input type="checkbox" name="terms" id="terms" />
                <label className="ml-2" htmlFor="terms">
                  Accept our Terms and Condition.
                </label>
              </div>

              <label className="label">
                <input type="submit" value="submit" className="w-full link link-hover btn btn-primary" />
              </label>
            </div>
            {error && <p className="text-red-700 font-bold">{error}</p>}
            <p>
              Already have an Account?{" "}
              <Link to="/login" className="underline font-semibold text-blue-600">
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
