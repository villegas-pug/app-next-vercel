'use server'

import { prisma } from "@/libs"
import { CreateUserDto } from "@/interfaces"

export const createUserAction = async (prevState: CreateUserDto, payload: FormData) => {
   const { name, password } = Object.fromEntries(payload) as CreateUserDto
   const newUser = await prisma.user.create({
         data: { name, password }
      })
   return newUser
}