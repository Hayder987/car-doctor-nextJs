import SectionBanner from "@/components/HomeComonents/SectionBanner";
import StepCard from "@/components/HomeComonents/StepCard";
import SectionDivider from "@/components/SectionDivider";
import dbConnect, { dbCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import logo from "@/assets/icons/logo.png";

const serviceDetails = async ({ params }) => {
  const { id } = await params;
  const data = await dbConnect(dbCollection.serviceType).findOne({
    _id: new ObjectId(id),
  });
  return (
    <div className="container mx-auto">
      <SectionBanner title={"Service Details"}></SectionBanner>
      <SectionDivider></SectionDivider>
      <div className="flex justify-center gap-6">
        {/* details */}
        <div className="lg:w-9/12 relative">
          <div className="relative mb-10 h-[420px] lg:h-[550px] w-full">
            <Image
              src={data.img}
              alt="img"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <h1 className="text-4xl font-bold mb-7">{data?.title}</h1>
          <p className="mb-7">{data?.description}</p>
          <div className="grid gap-4 grid-cols-1 mb-7 md:grid-cols-2">
            {data.facility.map((item, idx) => (
              <div
                key={idx}
                className="p-10 bg-gray-200 border-t-2 border-red-600 rounded-lg"
              >
                <p className="text-xl font-bold mb-2">{item?.name}</p>
                <p className="">{item?.details}</p>
              </div>
            ))}
          </div>
          <p className="mb-7">{data?.description}</p>
          <h1 className="text-4xl font-bold mb-7">3 Simple Steps to Process</h1>
          {/* step-card */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <StepCard
              step={"01"}
              title={"Step One"}
              desc={"It uses a dictionary of over 200 ."}
            ></StepCard>
            <StepCard
              step={"02"}
              title={"Step Two"}
              desc={"It uses a dictionary of over 200 ."}
            ></StepCard>
            <StepCard
              step={"03"}
              title={"Step Three"}
              desc={"It uses a dictionary of over 200 ."}
            ></StepCard>
          </div>
          <div className="sticky flex lg:hidden z-10 bottom-0">
            <button className="w-full text-center py-3 px-6 bg-red-600 text-white font-medium">
              Proceed Checkout
            </button>
          </div>
        </div>
        {/* sidebar */}
        <div className="hidden lg:flex lg:flex-col lg:w-3/12">
          <div className="p-8 flex flex-col mb-12 h-[570px] justify-center items-center bg-[#151515] w-full  text-white">
            <Image src={logo} alt={"logo"} className="w-40 h-36 mb-7"></Image>
            <p className="text-xl font-bold mb-8 text-center">
              Need Help? We Are Here <br />
              To Help You
            </p>
            <div className="bg-gray-100 w-full p-6 h-[150px] rounded-md">
              <h3 className="text-xl font-bold text-center mb-3 text-black">
                <span className="text-red-600">Car Doctor</span> Special
              </h3>
              <p className="text-black text-center font-medium">
                Save up to <span className="text-red-600">60% off</span>
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-8">Price: ${data.price}</h3>
          <button className="w-full text-center py-3 px-6 bg-red-600 text-white font-medium">
            Proceed Checkout
          </button>
        </div>
      </div>
      <SectionDivider></SectionDivider>
    </div>
  );
};

export default serviceDetails;
