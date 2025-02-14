const { NextResponse } = require("next/server");
import dbConnect, { dbCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const GET = async(req, {params})=>{
    const { id } = await params;
    const data = await dbConnect(dbCollection.serviceType).findOne({
      _id: new ObjectId(id),
    })

    return NextResponse.json(data)
}

