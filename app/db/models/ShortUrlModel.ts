import mongoose from "mongoose";
import { ShortUrlSchema } from "../schema/ShortUrlSchema";

const ShortUrl =
  mongoose.models.ShortUrl || mongoose.model("ShortUrl", ShortUrlSchema);

export default ShortUrl;
