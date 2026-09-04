"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Scanner } from '@yudiel/react-qr-scanner';

export default function QRScannerPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleScan = (text: string) => {
    if (text) {
      try {
        // Attempt to parse as a full URL (e.g., https://yoursite.com/profile/anila)
        const urlObj = new URL(text);
        const pathSegments = urlObj.pathname.split('/').filter(Boolean);

        // Find 'profile' in the path and get the next segment
        const profileIndex = pathSegments.indexOf('profile');

        if (profileIndex !== -1 && profileIndex + 1 < pathSegments.length) {
          const username = pathSegments[profileIndex + 1];
          router.push(`/profile/${username}/edit`);
        } else {
          setError("Invalid QR Code: Not a valid profile URL.");
        }
      } catch (e) {
        // Fallback for strings that aren't valid URLs (e.g. "anila" or "/profile/anila")
        if (text.includes('/profile/')) {
          const parts = text.split('/profile/');
          const remaining = parts[1].split('/')[0];
          if (remaining) {
            router.push(`/profile/${remaining}/edit`);
            return;
          }
        }
        setError("Invalid QR Code. Please scan a valid profile badge.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 border border-slate-100 flex flex-col items-center">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Scan Profile QR</h1>
          <p className="text-slate-500 mt-2 text-sm">Point your camera at a QR code to update their redirect link.</p>
        </div>

        <div className="w-full max-w-sm aspect-square bg-slate-100 rounded-xl overflow-hidden relative border-2 border-slate-200">
          <Scanner
            onScan={(result) => {
              if (result && result.length > 0) {
                handleScan(result[0].rawValue);
              }
            }}
            onError={(err) => {
              console.error(err);
            }}
            formats={['qr_code']}
          />
        </div>

        {error && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium border border-red-100 w-full text-center">
            {error}
          </div>
        )}

        <div className="mt-6 text-sm text-slate-400 text-center">
          Make sure the QR code is well-lit and in focus. Camera permissions are required.
        </div>
      </div>
    </div>
  );
}
