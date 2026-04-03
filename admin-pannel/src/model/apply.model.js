import { Schema, model, models } from "mongoose";

const ApplySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }, 
    phonenumber: { type: String, required: true },
    course: { type: String, required: true }
}, { timestamps: true });

export const Applies = models.applies || model("applies", ApplySchema);
