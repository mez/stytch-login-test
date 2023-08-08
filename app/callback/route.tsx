import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const message = await req.json();

  console.log("Stytch Redirect Callback: ", message);
  
  return NextResponse.json({status: 'OK'});
};

