import { NextResponse } from "next/server";
import { createAdminClient, APPWRITE_DB_ID, APPWRITE_COLLECTION_ID } from "@/app/lib/appwrite";
import { Query } from "node-appwrite";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { databases } = createAdminClient();
    
    // Ping the database by fetching a single document just to simulate activity
    const response = await databases.listDocuments(
      APPWRITE_DB_ID,
      APPWRITE_COLLECTION_ID,
      [Query.limit(1)]
    );

    return NextResponse.json({ 
      success: true, 
      message: "Database pinged successfully", 
      documentCount: response.total 
    });
  } catch (error) {
    console.error("Keep-alive error:", error);
    return NextResponse.json({ success: false, error: "Failed to ping database" }, { status: 500 });
  }
}
