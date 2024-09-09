import { NextResponse } from "next/server";
import { HOTEL_DATA } from "@/data/hotels";
export async function GET(req) {
  // console.log(HOTEL_DATA);
  const data = NextResponse.json({ HOTEL_DATA });
  console.log(`hi ${data[0]}`);
  return NextResponse.json({ HOTEL_DATA });
}
