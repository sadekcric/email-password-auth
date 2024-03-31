import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8"> Sign up</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" className="mb-3 w-full py-2 px-4 border-2" placeholder="Your Email" />
        <br />
        <input type="password" name="password" placeholder="Password" className="mb-3 w-full py-2 px-4 border-2" id="" />
        <br />
        <input type="submit" value="Submit" className="btn w-full btn-primary border-2" />
      </form>
    </div>
  );
};

export default SignUp;
