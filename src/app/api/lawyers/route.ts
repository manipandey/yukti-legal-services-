import { NextResponse } from "next/server";
import { getLawyers, createLawyer } from "@/lib/db";
import { z } from "zod";

const lawyerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().min(1, "Position is required"),
  experience: z.string().min(1, "Experience is required"),
  qualifications: z.string().min(1, "Qualifications is required"),
  specialization: z.string().min(1, "Specialization is required"),
  image_url: z.string().optional().default("/placeholder-lawyer.jpg"),
});

export async function GET() {
  try {
    const data = await getLawyers();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch lawyers" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = lawyerSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.format() },
        { status: 400 }
      );
    }
    
    const record = await createLawyer(result.data);
    return NextResponse.json(record, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create lawyer" },
      { status: 500 }
    );
  }
}
