const { default: dbConnect, dbCollection } = require("@/lib/dbConnect")
const { NextResponse } = require("next/server")

export const POST = async (req)=>{
    const body = await req.json()

    const serviceCollection = dbConnect(dbCollection.bookingType)
    const result = await serviceCollection.insertOne(body)
    return NextResponse.json(result)
}