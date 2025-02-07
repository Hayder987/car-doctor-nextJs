import React from "react";
import aboutImg1 from "@/assets/images/about_us/person.jpg";
import aboutImg2 from "@/assets/images/about_us/parts.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col mb-48 lg:flex-row gap-8">
      {/* image */}
      <div className="lg:w-1/2 relative">
        <Image src={aboutImg1} alt={"person image"}></Image>
        <div className="absolute hidden lg:flex bg-white z-10 rounded-lg p-3 min-h-[370px] w-[430px] -right-[80px] top-[160px]">
          <Image src={aboutImg2} alt={"parts"} className="rounded-md"></Image>
        </div>
      </div>
      {/* text */}
      <div className="lg:w-1/2 px-4 lg:px-24">
        <p className="text-2xl font-bold mb-6 text-red-600">About Us</p>
        <h3 className="text-4xl font-bold mb-8">We are qualified & of experience in this field</h3>
        <p className="mb-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="mb-12">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <Link href={'/about'} className="text-white font-semibold duration-300 border-2 hover:border-red-600 hover:text-red-600 hover:bg-transparent bg-red-600 py-3 px-5">Get More Info</Link>
      </div>
    </div>
  );
};

export default About;
