import { connectionStr } from "@/app/lib/db";
import { foodsSchema } from "@/app/lib/foodsModel";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, context) {
    console.log(context.params.id);
    const id = context.params.id
    await mongoose.connect(connectionStr);
    const details = await restaurantSchema.findOne({ _id:id });
    const foodItems = await foodsSchema.find({resto_id:id})
    return NextResponse.json({success:true,details,foodItems});
}