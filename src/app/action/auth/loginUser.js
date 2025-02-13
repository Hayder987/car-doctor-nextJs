"use server"
import dbConnect, { dbCollection } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser =async (payload)=>{
    const {email, password} = payload;

    const userCollection = dbConnect(dbCollection.userType)
    const user = await userCollection.findOne({email: email})

    if(!user) return null;
    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword) return null

    return user
}