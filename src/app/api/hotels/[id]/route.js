import { NextResponse } from "next/server";
import { HOTEL_DATA } from "@/data/hotels";
export async function GET(req, context) {
  const { params } = context;
  const hotel = HOTEL_DATA.filter((item) => params.id === item.id.toString());
  // console.log(hotel);
  return NextResponse.json({ hotel });
}
