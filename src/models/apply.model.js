import { Schema, model, models } from "mongoose";

const ApplySchema = new Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
}, { timestamps: true });

const Applies = models.applies || model("applies", ApplySchema);

export default Applies;
