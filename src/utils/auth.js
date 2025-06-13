import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {hash,hashCompare } from "keyhasher"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_SECRET ,
    }),
    CredentialsProvider({
        name: "credentials",
        credentials: {
            email: {label: "Email", type: "text", placeholder: "Email"},
            password: {label: "Password", type: "password", placeholder: "Password"},
            async authorize(credentials){
                if(!credentials.email || !credentials.password){
                    throw new Error("Email and password are required");
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })
                if(!user || !user?.hashedPassword) throw new Error("User Not Found");

                const isCorrectPassword = await  hashCompare(
                    user.hashedPassword,
                    hash(credentials.password)
                )
                if(!isCorrectPassword) throw new Error("Invalid Credentials");
            }
        }
    }),
    ]
}