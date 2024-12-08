"use server"

import { NextRequest,NextResponse } from "next/server";
import {feedback,IFeedback }from "../models/user";
import mongoose from "mongoose";
export  async function POST(req: NextRequest) {
    try {
        let db = await mongoose.connect((process.env.MONGO_URI as string))
        let data =  await req.json();
      const reqBody: IFeedback = data
      
      let exist  = await feedback.find();
      let id = exist.length

      const newfeed = new feedback({...reqBody, feedbackID: id+1});
      let a = await newfeed.save();

      return NextResponse.json({
        message: "Feedback saved successfully!",
        status: 200,
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
  