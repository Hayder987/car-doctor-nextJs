import loginBanner from "@/assets/images/login/login.svg";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./components/LoginForm";

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
        <LoginForm></LoginForm>
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
