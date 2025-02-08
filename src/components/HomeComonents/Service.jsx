import dbConnect, { dbCollection } from "@/lib/dbConnect";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Service = async () => {
  const data = await dbConnect(dbCollection.serviceType).find({}).toArray();

  return (
    <div>
      <SectionTitle
        heading={"Service"}
        title={"Our Service Area"}
        desc={`the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.`}
      ></SectionTitle>
      {/* card */}
      <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <div key={item._id} className="p-4 group border rounded-lg">
            <div className="relative mb-4 rounded-md overflow-hidden h-[320px] w-full">
              <Image
                src={item.img}
                alt="img"
                layout="fill"
                objectFit="cover"
                className="rounded-md group-hover:scale-110 duration-500"
              />
            </div>
            <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
            <Link href={`/services/${item._id}`}>
              <div className="flex justify-between items-center text-xl font-bold text-red-600">
                <p className="">
                  <span className="">Price: </span>
                  <span className="">{item.price}$</span>
                </p>
                <p className="">
                  <FaArrowRightLong />
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
