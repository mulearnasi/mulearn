
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/muv",
        destination: "https://docs.google.com/forms/d/e/1FAIpQLSeuBUksIQHWRf5_vCkzRzS6t4BM0MpglLmBZcQZwgBbTtU3zw/viewform?usp=send_form",
        permanent: false, // keep false for forms
      },
      {
        source: "/teachers-day",
        destination: "https://mulearn-teachers-day.vercel.app/", // REPLACE_THIS_WITH_YOUR_LINK
        permanent: false,
      },
    ];
  },
};

export default nextConfig;