"use client";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import SocialLogin from "../../socialLogin/SocialLogin";


const LoginForm = () => {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   try{
    const res = await signIn("credentials", {
      email,
      password,
      redirect:false,
    });
    if(res.ok){
     router.push('/')
    }
    else{
      Swal.fire(`Authenction Failed`);
    }
   }
   catch(err){
    
   }
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="px-4 lg:px-16">
        <div className="flex flex-col mb-10 gap-5">
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
          value="Sign In"
          className="py-3 cursor-pointer w-full px-6 font-semibold bg-red-600 text-white"
        />
      </form>
      <p className="text-center my-6">Or Sign Up with</p>
     {/* social Login */}
     <SocialLogin></SocialLogin>
    </div>
  );
};

export default LoginForm;
