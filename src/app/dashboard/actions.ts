"use server";
import { db } from "@/src/db"
import { OrderStatus } from "@prisma/client"

export const ChangeOrderStatus = async({
    id,
    newStatus
}: {
    id: string,
    newStatus: OrderStatus
}) => {
    await db.order.update({
        where: { id },
        data: { status: newStatus}
    }) 
}