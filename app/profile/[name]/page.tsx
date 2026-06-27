import { notFound, redirect } from "next/navigation";
import { createAdminClient, APPWRITE_DB_ID, APPWRITE_COLLECTION_ID } from "../../lib/appwrite";
import { Query } from "node-appwrite";

const LINKEDIN_MAP: Record<string, string> = {
  // Add or edit entries using: key -> https://www.linkedin.com/in/<profile>
  mathew: "https://www.linkedin.com/in/mathewjosephta/",
  anamikaumesh: "https://app.mulearn.org/profile/anamikaumesh@mulearn",
  muhammedafreen: "https://www.linkedin.com/in/muhammed-afreen-260410330/",
  devikaga: "https://app.mulearn.org/profile/devikaga-5@mulearn",
  aishafathihah: "https://www.linkedin.com/in/aisha-fathiha-ab9669366/",
  aleenageorge: "https://www.linkedin.com/in/aleena-george-0b1041291/",
  afiyafathima: "https://www.linkedin.com/in/afiya-fathima/",
  malavikarajan: "https://www.linkedin.com/in/malavika-rajan/",
  harijithasokan: "https://app.mulearn.org/profile/harijithasokan@mulearn",
  rbravish: "https://www.linkedin.com/in/ravish-rb/",
  abhishekprabhakaran: "https://www.linkedin.com/in/abhishek-prabhakaran-733029291/",
  josephsijothottakara: "https://app.mulearn.org/profile/josephsijo@mulearn",
  kishankathik: "https://www.linkedin.com/in/kishan-karthik-282a93290/",
  jeringeorge: "https://www.linkedin.com/in/jerin-george-468049291/",
  anjalikrishna: "https://app.mulearn.org/profile/anjalikrishnam@mulearn",
  asherantony: "https://www.linkedin.com/in/asher-antony-350051291/",
  aaryathapr: "https://app.mulearn.org/profile/aaryathapr@mulearn",
  mathewjosephta: "https://www.linkedin.com/in/mathewjosephta/",
  anna: "https://www.linkedin.com/in/anna-joy-v-j-3b5049291/",
  anila: "https://app.mulearn.org/profile/anilas-3@mulearn",
  sharika: "https://app.mulearn.org/profile/sharikatr@mulearn",
  naznin: "https://app.mulearn.org/profile/nazninmali@mulearn",
};

type ProfileRouteProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function ProfileLinkedInRedirect({ params }: ProfileRouteProps) {
  const { name } = await params;
  const key = decodeURIComponent(name).trim().toLowerCase();

  let destination = "";

  try {
    if (process.env.APPWRITE_API_KEY) {
      const { databases } = createAdminClient();
      
      const response = await databases.listDocuments(
        APPWRITE_DB_ID,
        APPWRITE_COLLECTION_ID,
        [
          Query.equal("username", key),
          Query.limit(1)
        ]
      );

      if (response.documents.length > 0) {
        destination = response.documents[0].redirect_url;
      }
    }
  } catch (error) {
    console.error("Failed to fetch redirect URL from Appwrite:", error);
  }

  if (!destination) {
    destination = LINKEDIN_MAP[key];
  }

  if (!destination) {
    notFound();
  }

  redirect(destination);
}
