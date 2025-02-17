import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const { default: dbConnect, dbCollection } = require("@/lib/dbConnect");
const { NextResponse } = require("next/server");

export const GET = async (req) => {
    const url = new URL(req.url)

     const email = url.searchParams.get('email')
      if(email){
        const bookingCollection = dbConnect(dbCollection.bookingType);
        const query = {email:email}
        const result = await bookingCollection.find(query).toArray()
        return NextResponse.json(result)
      } 
 
    return NextResponse.json([]);
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

