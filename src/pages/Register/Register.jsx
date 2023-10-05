import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const fullName = firstName + " " + lastName;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    } else if (confirmPassword !== password) {
      toast.error("Password doesn't match.");
      return;
    }

    if (fullName === " ") {
      toast.error("You must provide a name");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User created successfully!");
        updateProfile(result.user, { displayName: fullName });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Navbar />
      <div className=" w-full max-w-xl border mx-auto rounded-sm my-10">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="font-bold text-2xl pb-6">Create an account</h2>
          <div className="form-control">
            <input
              type="text"
              placeholder="First Name"
              className="outline-none border-b py-3 mt-3 text-black placeholder:text-black"
              name="firstName"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last Name"
              className="outline-none border-b py-3 mt-9 text-black placeholder:text-black"
              name="lastName"
            />
          </div>
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
          <div className="form-control">
            <input
              type="password"
              placeholder="Confirm Password"
              className="outline-none border-b py-3 mt-9 placeholder:text-black"
              name="confirmPassword"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="bg-yellow-600 py-[14px] font-medium text-black rounded-md">
              Create an account
            </button>
          </div>
          <p className="text-center font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-500">
              Login
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
  );
};

export default Register;
