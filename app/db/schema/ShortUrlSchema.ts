import mongoose from "mongoose";
import { nanoid } from "nanoid";

const ShortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: () => nanoid(8),
  },
  click: {
    type: Number,
    required: true,
    default: 0,
  },
});

export { ShortUrlSchema };
