"use client"
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { registerUser } from "@/app/action/auth/registerUser";
import Swal from "sweetalert2";

const RegisterForm = () => {
    const handleSubmit = async (e)=>{
      e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
   try{
    await registerUser({name, email, password})
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Registration Success!",
        showConfirmButton: false,
        timer: 1500
      });
      form.reset()
     
    }
    catch(err){
        Swal.fire(`${err.message}`);
       }
   }
  

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="px-4 lg:px-16">
        <div className="flex flex-col mb-10 gap-5">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="Sign Up"
          className="py-3 cursor-pointer w-full px-6 font-semibold bg-red-600 text-white"
        />
      </form>
      <p className="text-center my-6">Or Sign Up with</p>
      <div className="flex justify-center mb-10 items-center gap-8 text-3xl">
        <button className="">
          <FcGoogle />
        </button>
        <button className="text-blue-600">
          <FaFacebook />
        </button>
        <button className="text-blue-800">
          <FaLinkedinIn />
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
