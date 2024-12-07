import { NextRequest, NextResponse } from "next/server";
import { feedback } from "../../models/user";
import mongoose from "mongoose";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    // Fetch the latest 3 feedbacks based on feedbackID (descending order)
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
