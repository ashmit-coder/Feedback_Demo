import { NextRequest,NextResponse } from "next/server";
import {feedback,IFeedback }from "../../models/user";
import mongoose from "mongoose";

export  async function GET(req: NextRequest, res: NextResponse) {
    try {
        let db = await mongoose.connect((process.env.MONGO_URI as string));

        let data = await feedback.find();

      return NextResponse.json({
        data:data
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

  
  

