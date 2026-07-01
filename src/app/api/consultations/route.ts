import { NextResponse } from "next/server";
import { getConsultations, createConsultation } from "@/lib/db";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  issue: z.string().min(1, "Issue is required"),
  message: z.string().min(1, "Message is required"),
});

export async function GET() {
  try {
    const data = await getConsultations();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch consultations" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = consultationSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.format() },
        { status: 400 }
      );
    }
    
    const record = await createConsultation(result.data);
    return NextResponse.json(record, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create consultation" },
      { status: 500 }
    );
  }
}
