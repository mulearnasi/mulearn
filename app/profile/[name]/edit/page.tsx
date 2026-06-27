"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";

export default function EditProfileRedirect({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);
  const router = useRouter();

  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`/api/profile/${name}/edit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Your redirect URL has been updated successfully!");
        setTimeout(() => {
          router.push(`/profile/${name}`);
        }, 2000);
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to update URL.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Update Redirect</h1>
          <p className="text-slate-500 mt-2">Change the destination link for <span className="font-semibold text-violet-600">@{decodeURIComponent(name)}</span></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">New Destination URL</label>
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all text-slate-900"
            />
          </div>


          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium border border-red-100">
              {message}
            </div>
          )}

          {status === "success" && (
            <div className="p-4 rounded-xl bg-emerald-50 text-emerald-600 text-sm font-medium border border-emerald-100">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
