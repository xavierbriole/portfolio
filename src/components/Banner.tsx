import { StickyBanner } from "@/components/ui/sticky-banner";

interface BannerProps {
  display: boolean;
  text: string;
  link: string;
}

export default function Banner({ display, text, link }: BannerProps) {
  if (!display) return null;

  return (
    <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
      <a href={link} className="mx-0 max-w-[90%] text-white drop-shadow-md">
        {text}
        {" →"}
      </a>
    </StickyBanner>
  );
}
