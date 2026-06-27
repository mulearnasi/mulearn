import { NextResponse } from "next/server";
import { createAdminClient, APPWRITE_DB_ID, APPWRITE_COLLECTION_ID } from "../../../../lib/appwrite";
import { Query, ID } from "node-appwrite";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;
    const username = decodeURIComponent(name).trim().toLowerCase();
    
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required." }, { status: 400 });
    }

    if (!process.env.APPWRITE_API_KEY) {
      return NextResponse.json({ error: "Database not configured." }, { status: 500 });
    }

    const { databases } = createAdminClient();

    // Find the document by username
    const response = await databases.listDocuments(
      APPWRITE_DB_ID,
      APPWRITE_COLLECTION_ID,
      [
        Query.equal("username", username),
        Query.limit(1)
      ]
    );

    if (response.documents.length === 0) {
      // Create new document
      await databases.createDocument(
        APPWRITE_DB_ID,
        APPWRITE_COLLECTION_ID,
        ID.unique(),
        {
          username: username,
          redirect_url: url
        }
      );
    } else {
      const doc = response.documents[0];

      // Update the document
      await databases.updateDocument(
        APPWRITE_DB_ID,
        APPWRITE_COLLECTION_ID,
        doc.$id,
        {
          redirect_url: url
        }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API error updating redirect:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
