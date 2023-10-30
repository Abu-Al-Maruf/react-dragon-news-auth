import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(email, name, photo, password);

    createUser(email, password)
    .then(res => {
        console.log(res.user)
    })
    .catch(err => {
        console.error(err)
    })
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center text-2xl font-semibold mt-5">
        Please Register
      </h1>

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto mt-12">
        <form onSubmit={handleRegister} className="card-body">
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
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
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
          <div className="flex justify-between gap-2 ">
            <button className="btn capitalize text-white hover:bg-slate-700 bg-[#403F3F] w-3/4">
              Register
            </button>
            <Link
              to={"/login"}
              className="btn capitalize text-white hover:bg-orange-700 bg-orange-500 w-1/4"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
