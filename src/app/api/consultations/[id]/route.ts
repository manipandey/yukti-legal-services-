import { NextResponse } from "next/server";
import { updateConsultationStatus } from "@/lib/db";
import { z } from "zod";

const statusSchema = z.object({
  status: z.enum(["Pending", "Contacted"]),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const result = statusSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
    }
    
    const updated = await updateConsultationStatus(id, result.data.status);
    
    if (!updated) {
      return NextResponse.json({ error: "Consultation not found" }, { status: 404 });
    }
    
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
}
