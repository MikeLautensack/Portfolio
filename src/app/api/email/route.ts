import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import HireMeEmail from "../../../components/misc/HireMeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // Get request body data
  const bodyData = await request.json();

  try {
    await resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: "mikelautensack100@gmail.com",
      subject: `New hire me page message`,
      react: HireMeEmail({
        name: bodyData.name,
        email: bodyData.email,
        catagory: bodyData.catagory,
        message: bodyData.message,
      }),
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ message: "Email sent!" }, { status: 200 });
}
