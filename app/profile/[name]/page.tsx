import { notFound, redirect } from "next/navigation";

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
