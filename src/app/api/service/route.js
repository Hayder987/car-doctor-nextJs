import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";

const { default: dbConnect, dbCollection } = require("@/lib/dbConnect");
const { NextResponse } = require("next/server");

export const GET = async (req) => {
    const session = await getServerSession(authOptions);
    if (session) {
      const email = session?.user?.email;
      const bookingCollection = dbConnect(dbCollection.bookingType);
      const result = await bookingCollection.find({ email }).toArray()
      console.log(result)
      return NextResponse.json(result) 
    }
  
    return NextResponse.json({});
  };

  
export const POST = async (req) => {
  const body = await req.json();

  const serviceCollection = dbConnect(dbCollection.bookingType);
  const result = await serviceCollection.insertOne({
    ...body,
    status: "pending",
  });
  return NextResponse.json(result);
};

