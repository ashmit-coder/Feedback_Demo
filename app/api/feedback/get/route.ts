"use server"

import { NextRequest, NextResponse } from "next/server";
import { feedback } from "../../models/user";
import mongoose from "mongoose";

export async function GET(req: NextRequest) {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    
    let data = await feedback.find().sort({ feedbackID: -1 }).limit(3);

    return NextResponse.json({
      data: data,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
