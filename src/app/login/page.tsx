"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Scale, Lock, Mail, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setErrorMsg(err.message || "Invalid login credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#060a13] px-4 py-12 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-radial-gradient(circle, rgba(203, 164, 95, 0.03) 0%, rgba(0,0,0,0) 70%) pointer-events-none filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-radial-gradient(circle, rgba(203, 164, 95, 0.02) 0%, rgba(0,0,0,0) 70%) pointer-events-none filter blur-3xl" />

      <div className="w-full max-w-md relative z-10 space-y-8 bg-slate-900/40 border border-slate-800 p-8 rounded-2xl backdrop-blur-md shadow-2xl">
        
        {/* Top Header */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mb-2">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Website
          </Link>
          
          <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary">
            <Scale className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif text-white">Yukti Legal Services</h2>
            <p className="text-sm text-slate-400 mt-1">Shared Administrative Access Portal</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900 text-red-400 text-sm text-center font-medium shadow-xs">
              {errorMsg}
            </div>
          )}

          {/* Email field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-800 bg-[#050912] text-sm text-white focus:outline-none focus:border-primary placeholder-slate-600"
                placeholder="admin@yuktilegalservices.com"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Security Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-800 bg-[#050912] text-sm text-white focus:outline-none focus:border-primary placeholder-slate-600"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-primary text-[#0b121f] font-bold rounded-full hover:bg-primary/95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4.5 w-4.5 animate-spin" /> Authenticating...
              </>
            ) : (
              "Access Admin Panel"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
