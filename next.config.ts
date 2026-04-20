
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/newv",
        destination: "https://forms.gle/your-google-form-link",
        permanent: false, // keep false for forms
      },
    ];
  },
};

export default nextConfig;