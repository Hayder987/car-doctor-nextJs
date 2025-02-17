import { loginUser } from "@/app/action/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect, { dbCollection } from "./dbConnect";

export const authOptions = {
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "Enter Email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            
            const user = await loginUser(credentials)
            if (user) {
              console.log("user Data",user)
              return user
            } else {
             
              return null           
            }
          }
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        })
      ], 
      pages: {
        signIn:'/login',
      },
      callbacks: {
        async signIn({ user, account }) {

            if(account){
                const {providerAccountId, provider} = account
                const {email, image, name} = user
                const userCollection = dbConnect(dbCollection.userType)
                const isExist = await userCollection.findOne({providerAccountId})
                if(!isExist){
                    const payload = {email:email, image, name, provider, providerAccountId}
                    await userCollection.insertOne(payload)
                }
            }
          return true
        },
        
      }
  }