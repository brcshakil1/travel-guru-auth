import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Navbar />
      <div className="my-10 md:my-14">
        <div className=" w-full max-w-xl border mx-auto rounded-sm">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="font-bold text-2xl pb-6">Login</h2>
            <div className="form-control">
              <input
                type="email"
                placeholder="username or Email"
                className="outline-none border-b py-3 mt-9 text-black placeholder:text-black"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="outline-none border-b py-3 mt-9 placeholder:text-black"
                name="password"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="py-2 flex items-center gap-2">
                <input type="checkbox" name="checkBox" id="checkBox" />
                <label htmlFor="checkBox">Remember Me</label>
              </div>
              <label className="text-base hover:underline text-yellow-500">
                <a href="#" className="">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="bg-yellow-600 py-[14px] font-medium text-black rounded-md">
                Login
              </button>
            </div>
            <p className="text-center font-medium">
              Don{`'`}t you have an account?{" "}
              <Link to="/register" className="text-yellow-500">
                Create an account
              </Link>
            </p>
          </form>
        </div>
        <div className="flex justify-center items-center gap-1 mt-8">
          <div className="w-24 md:w-[200px] h-[1px] bg-[#AAA]" />
          <p>Or</p>
          <div className="w-24 md:w-[200px] h-[1px] bg-[#AAA]" />
        </div>
        {/* facebook and google */}
        <div className="py-7 space-y-2">
          <div className="border rounded-3xl flex items-center max-w-[400px] mx-auto cursor-pointer">
            <FaFacebook className="text-3xl m-1 text-blue-500 justify-self-start" />
            <p className=" mx-auto">Continue with Facebook</p>
          </div>
          <div className="border rounded-3xl flex items-center max-w-[400px] mx-auto cursor-pointer">
            <FcGoogle className="text-3xl m-1" />
            <p className="mx-auto">Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
