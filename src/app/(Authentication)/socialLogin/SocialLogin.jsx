"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const router = useRouter()
    const session = useSession()

    const socialLogin = (providerName)=>{
        signIn(providerName)
    }

    useEffect(()=>{
      if(session.status === "authenticated"){
        router.push('/')
      }
    }, [session.status])

  return (
    <div className="flex justify-center mb-10 items-center gap-8 text-3xl">
      <button 
      onClick={()=>socialLogin('google')}
      className="">
        <FcGoogle />
      </button>
      <button
      onClick={()=>socialLogin('github')}
       className="text-gray-800">
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialLogin;
