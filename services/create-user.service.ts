'use server'

import { CreateUserDto } from "@/interfaces";
import { prisma } from "@/libs";

export const createUser = async (user: CreateUserDto) => {

   const newUser = await prisma.user.create({
      data: { ...user }
   })

   return newUser

}