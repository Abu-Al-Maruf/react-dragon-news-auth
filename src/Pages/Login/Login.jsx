import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center text-2xl font-semibold mt-5">Please Log In</h1>

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto mt-12">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="flex justify-between">
            <button className="btn capitalize text-white hover:bg-orange-700 bg-orange-500 w-1/3">
              Login
            </button>
            <Link
              to={"/register"}
              className="btn capitalize text-white hover:bg-slate-700 bg-[#403F3F] w-2/4"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
