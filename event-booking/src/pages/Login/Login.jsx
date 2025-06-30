import React, { useContext, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import SinInIcon from '../../assets/Sign in-bro.png'



 
import auth from "../../Firebase/Firebase.Config";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signIn, setLoading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user && user.email) {
      navigate(from, { replace: true }); // Sending to the previous page
    }
  }, [user, navigate, from]);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Google Login Successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate(from, { replace: true }); // Sending to the previous page
        });
      })
      .catch((error) => {
        Swal.fire("Google Login Failed", error.message, "error");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      Swal.fire("Missing Input", "Please enter email and password.", "warning");
      return;
    }

    signIn(email, password)
      .then(() => {
        Swal.fire("Login Success", "", "success").then(() => {
          setLoading(false);
          navigate(from, { replace: true }); // Sending to the previous page
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "Go to Register",
        }).then(() => {
          navigate("/auth/register");
        });
      });
  };

  return (
    <div className="     flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 items-center gap-8 rounded-lg  p-8  ">
        {/* Left Illustration */}
        <div className="hidden md:block">
          <img src={SinInIcon} alt="Login Illustration" className="w-full" />
        </div>

        {/* Right Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Login to your Account
            </h2>
            <p className="text-gray-700 mt-1">
              Don't have an account?
              <Link
                to="/auth/register"
                className="ml-1 text-blue-600 underline font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full bg-white text-black border border-gray-300 flex items-center justify-center gap-3 mb-4 shadow-sm hover:shadow-md"
          >
            <FcGoogle size={24} /> Login with Google
          </button>

          <div className="divider">OR</div>

          {/* Email/Password Login */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="label text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="text-right">
              <a className="text-sm text-gray-600 hover:underline cursor-pointer">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
