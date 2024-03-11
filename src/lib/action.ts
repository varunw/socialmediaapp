"use server"

import { getServerSession } from "next-auth"
import { db } from "./db"
import { authOptions } from "./auth"

export async function addUserName(formData: FormData) {
    const session = await getServerSession(authOptions)
    const data = {
        username: formData.get("username"),
        address: formData.get("address")
    }
    try {
        await db.user.update({
            where: {
                id: session?.user.id as string
            },
            data: {
                username: data.username as string,
                address: data.address as string,
            }
        })
        
    }
    catch (e) {
        return e
    }
}