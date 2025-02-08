"use server";

import dbConnect, { dbCollection } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(dbCollection.userType);
  const { email, password } = payload;
  if (!email || !password) {
    throw new Error("Email and password are required!");
  }
  const isUser = await userCollection.findOne({ email: payload.email });
  if (isUser) {
    throw new Error("User already exists!");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  payload.password = hashPassword;
  const result = await userCollection.insertOne(payload);
  if (!result.acknowledged) {
    throw new Error("User registration failed!");
  }
  const { acknowledged, insertedId } = result;
  return { acknowledged, insertedId };
};
