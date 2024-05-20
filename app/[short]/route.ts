import connectDB from "../db/database";
import ShortUrl from "../db/models/ShortUrlModel";

import { NextRequest, NextResponse } from "next/server";

interface shortUrl {
  full: string;
  short: string;
  click: number;
}

export async function GET(req: NextRequest) {
  await connectDB();

  const urlID = req.nextUrl.pathname.split("/")[1];

  const urlData: null | shortUrl = await ShortUrl.findOne({
    short: urlID,
  });

  if (!urlData) {
    return NextResponse.redirect("http://localhost:3000/404");
  }
  await ShortUrl.updateOne({ short: urlID }, { $inc: { click: 1 } });

  return NextResponse.redirect(urlData.full);
}
