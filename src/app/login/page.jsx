import loginBanner from "@/assets/images/login/login.svg";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center lg:max-w-[1200px] mx-auto flex-col p-6 lg:p-14 md:flex-row gap-6">
      {/* image */}
      <div className="md:w-1/2">
        <Image src={loginBanner} alt={"login"}></Image>
      </div>
      {/* form */}
      <div className="md:w-1/2 border-2 p-6 rounded-lg">
        <h1 className="text-3xl font-semibold text-center my-8">Sign In</h1>
        <form className="px-4 lg:px-16">
          <div className="flex flex-col mb-10 gap-5">
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
        <p className="text-center">
          Don't have an account?{" "}
          <Link href={"/register"}>
            <span className="text-red-600 cursor-pointer font-semibold">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
