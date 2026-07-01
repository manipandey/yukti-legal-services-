import { NextResponse } from "next/server";
import { updateLawyer, deleteLawyer } from "@/lib/db";
import { z } from "zod";

const updateSchema = z.object({
  name: z.string().optional(),
  position: z.string().optional(),
  experience: z.string().optional(),
  qualifications: z.string().optional(),
  specialization: z.string().optional(),
  image_url: z.string().optional(),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const result = updateSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json({ error: "Invalid updates body" }, { status: 400 });
    }
    
    const updated = await updateLawyer(id, result.data);
    if (!updated) {
      return NextResponse.json({ error: "Lawyer not found" }, { status: 404 });
    }
    
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update lawyer" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = await deleteLawyer(id);
    if (!deleted) {
      return NextResponse.json({ error: "Lawyer not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete lawyer" }, { status: 500 });
  }
}
