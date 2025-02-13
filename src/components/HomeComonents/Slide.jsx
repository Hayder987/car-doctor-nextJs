import Image from "next/image";
import Link from "next/link";

const Slide = ({ title, desc, banner, nxtBanner }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
          url(${banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="min-h-[50vh] px-4 lg:px-12 lg:min-h-[80vh] flex items-center gap-4"
    >
      {/* text */}
      <div className="lg:w-1/2 p-10 lg:px-20">
        <h1 className="text-4xl md:text-6xl mb-6 lg:mb-12 font-bold text-white">{title}</h1>
        <p className="text-xl font-medium mb-6 lg:mb-12 text-gray-300">{desc}</p>
        <Link href={'/services'} className="py-3 px-5 hover:duration-300 hover:border-2 hover:border-red-600 hover:text-red-600 hover:bg-transparent bg-red-600 cursor-pointer text-white font-semibold">Discover More</Link>
      </div>
      {/* image */}
      <div className="hidden lg:flex lg:w-1/2">
      <Image src={nxtBanner} alt='photo'></Image>
      </div>
    </div>
  );
};

export default Slide;
