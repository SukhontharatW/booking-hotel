import { NextResponse } from "next/server";
import { HOTEL_DATA } from "@/data/hotels";
export async function GET(req, context) {
  const { params } = context;
  const hotels = HOTEL_DATA.filter(
    (item) => params.location.toLowerCase() === item.location.toLowerCase()
  );
  // console.log(hotels);
  return NextResponse.json({ hotels });
}
