import { NextResponse } from "next/server";
import { login } from "@/data/cognito-auth";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  try {
    const token = await login(username, password);

    const response = NextResponse.json({ status: 200 });

    response.headers.append("Set-Cookie", `auth=${token}; HttpOnly; Path=/; Max-Age=3600`);

    return response;
  } catch (error) {
    const e = error as AWS.AWSError;
    return NextResponse.json("Niepoprawne dane logowania", { status: e.statusCode });
  }
}
