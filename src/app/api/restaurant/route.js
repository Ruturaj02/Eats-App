import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionStr);
    const data = await restaurantSchema.find()
    // console.log(data);
    return NextResponse.json({ result: data })
}

export async function POST(request) {
    let payload = await request.json()
    await mongoose.connect(connectionStr);
    const restaurant = new restaurantSchema(payload);
    const result = await restaurant.save();
    console.log(payload);
    return NextResponse.json({ result , success:true });

}

