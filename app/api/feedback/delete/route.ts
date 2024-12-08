"use server"

import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import {feedback,UpdateFeedback }from "../../models/user";

export async function POST(req: NextRequest) {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    const { id } = await req.json();

    const result = await feedback.deleteOne({ _id: id });
    return NextResponse.json({ message: 'Feedback deleted successfully!', status: 200 });
  } catch (error: any) {
    console.error('Error deleting feedback:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
