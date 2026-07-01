import { createClient } from "@supabase/supabase-js";
import { Blog, Lawyer, Service } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Initialize admin client with service role key for backend operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export interface Consultation {
  id: string;
  name: string;
  phone: string;
  email: string;
  issue: string;
  message: string;
  status: "Pending" | "Contacted";
  created_at: string;
}

// Dummy initDb to avoid build/import breakages in existing route compiles
export async function initDb() {
  return Promise.resolve();
}

// --- CONSULTATIONS CRUD ---
export async function getConsultations(): Promise<Consultation[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("consultations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Supabase getConsultations error:", error);
    return [];
  }
}

export async function createConsultation(
  consultation: Omit<Consultation, "id" | "status" | "created_at">
): Promise<Consultation> {
  const newRecord = {
    ...consultation,
    id: Math.random().toString(36).substring(2, 9),
    status: "Pending" as const,
    created_at: new Date().toISOString(),
  };

  const { data, error } = await supabaseAdmin
    .from("consultations")
    .insert([newRecord])
    .select()
    .single();

  if (error) {
    console.error("Supabase createConsultation error:", error);
    throw error;
  }
  return data;
}

export async function updateConsultationStatus(
  id: string,
  status: "Pending" | "Contacted"
): Promise<Consultation | null> {
  const { data, error } = await supabaseAdmin
    .from("consultations")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Supabase updateConsultationStatus error:", error);
    return null;
  }
  return data;
}

// --- BLOGS CRUD ---
export async function getBlogs(): Promise<Blog[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("blogs")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Supabase getBlogs error:", error);
    return [];
  }
}

export async function createBlog(blog: Omit<Blog, "id" | "published_at">): Promise<Blog> {
  const newRecord = {
    ...blog,
    id: Math.random().toString(36).substring(2, 9),
    published_at: new Date().toISOString(),
  };

  const { data, error } = await supabaseAdmin
    .from("blogs")
    .insert([newRecord])
    .select()
    .single();

  if (error) {
    console.error("Supabase createBlog error:", error);
    throw error;
  }
  return data;
}

export async function updateBlog(id: string, updates: Partial<Omit<Blog, "id">>): Promise<Blog | null> {
  const { data, error } = await supabaseAdmin
    .from("blogs")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Supabase updateBlog error:", error);
    return null;
  }
  return data;
}

export async function deleteBlog(id: string): Promise<boolean> {
  const { error } = await supabaseAdmin.from("blogs").delete().eq("id", id);
  if (error) {
    console.error("Supabase deleteBlog error:", error);
    return false;
  }
  return true;
}

// --- LAWYERS CRUD ---
export async function getLawyers(): Promise<Lawyer[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("lawyers")
      .select("*")
      .order("name", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Supabase getLawyers error:", error);
    return [];
  }
}

export async function createLawyer(lawyer: Omit<Lawyer, "id">): Promise<Lawyer> {
  const newRecord = {
    ...lawyer,
    id: Math.random().toString(36).substring(2, 9),
  };

  const { data, error } = await supabaseAdmin
    .from("lawyers")
    .insert([newRecord])
    .select()
    .single();

  if (error) {
    console.error("Supabase createLawyer error:", error);
    throw error;
  }
  return data;
}

export async function updateLawyer(id: string, updates: Partial<Omit<Lawyer, "id">>): Promise<Lawyer | null> {
  const { data, error } = await supabaseAdmin
    .from("lawyers")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Supabase updateLawyer error:", error);
    return null;
  }
  return data;
}

export async function deleteLawyer(id: string): Promise<boolean> {
  const { error } = await supabaseAdmin.from("lawyers").delete().eq("id", id);
  if (error) {
    console.error("Supabase deleteLawyer error:", error);
    return false;
  }
  return true;
}

// --- SERVICES CRUD ---
export async function getServices(): Promise<Service[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("services")
      .select("*")
      .order("title", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Supabase getServices error:", error);
    return [];
  }
}

export async function createService(service: Omit<Service, "id">): Promise<Service> {
  const newRecord = {
    ...service,
    id: Math.random().toString(36).substring(2, 9),
  };

  const { data, error } = await supabaseAdmin
    .from("services")
    .insert([newRecord])
    .select()
    .single();

  if (error) {
    console.error("Supabase createService error:", error);
    throw error;
  }
  return data;
}

export async function updateService(id: string, updates: Partial<Omit<Service, "id">>): Promise<Service | null> {
  const { data, error } = await supabaseAdmin
    .from("services")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Supabase updateService error:", error);
    return null;
  }
  return data;
}

export async function deleteService(id: string): Promise<boolean> {
  const { error } = await supabaseAdmin.from("services").delete().eq("id", id);
  if (error) {
    console.error("Supabase deleteService error:", error);
    return false;
  }
  return true;
}
