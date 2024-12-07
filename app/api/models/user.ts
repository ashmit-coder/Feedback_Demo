import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const feedbackSchema = new mongoose.Schema({
    feedbackID:{
        required:true,
        type:String,
        unique:true
    },
    user: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    communication: {
        required: true,
        type: Number,
        min: 0,
        max: 5,
    },
    teamwork: {
        required: true,
        type: Number,
        min: 0,
        max: 5,
    },
    leadership: {
        required: true,
        type: Number,
        min: 0,
        max: 5,
    },
    problem: {
        required: true,
        type: Number,
        min: 0,
        max: 5,
    },
    creativity: {
        required: true,
        type: Number,
        min: 0,
        max: 5,
    }

});

const feedback = mongoose.models.feedback || mongoose.model("feedback", feedbackSchema);

interface IFeedback {
    user: string;
    feedback: string;
    communication: Number;
    teamwork: Number;
    leadership: Number;
    problem: Number;
    creativity: Number;
}

interface UpdateFeedback {
    id:Number;
    user: string;
    feedback: string;
    communication: Number;
    teamwork: Number;
    leadership: Number;
    problem: Number;
    creativity: Number;
}

export { feedback };
export type { IFeedback ,UpdateFeedback};
