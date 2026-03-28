import { notFound, redirect } from "next/navigation";

const LINKEDIN_MAP: Record<string, string> = {
  // Add or edit entries using: key -> https://www.linkedin.com/in/<profile>
  mathew: "https://www.linkedin.com/in/mathewjosephta/",
  ravish: "https://www.linkedin.com/in/ravish-rb/",
  charlie: "https://www.linkedin.com/in/charlie/",
};

type ProfileRouteProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function ProfileLinkedInRedirect({ params }: ProfileRouteProps) {
  const { name } = await params;
  const key = decodeURIComponent(name).trim().toLowerCase();
  const destination = LINKEDIN_MAP[key];

  if (!destination) {
    notFound();
  }

  redirect(destination);
}
