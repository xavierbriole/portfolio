const apps: {
  params: { slug: string };
  props: {
    appName: string;
    description: string;
    iconUrl: string;
    appStoreId?: string;
    testflightUrl?: string;
    platforms: string[];
  };
}[] = [
  {
    params: { slug: "celebraite" },
    props: {
      appName: "Celebraite",
      description:
        "Celebraite harnesses the power of artificial intelligence to craft personalized birthday messages",
      iconUrl: "/assets/apps/celebraite.png",
      appStoreId: "6471450744",
      platforms: ["iOS", "iPadOS"],
    },
  },
  {
    params: { slug: "riftly" },
    props: {
      appName: "Riftly",
      description:
        "Follow your favorite teams and leagues from League of Legends with real-time scores, news and stats",
      iconUrl: "/assets/apps/riftly.png",
      appStoreId: "6757268977",
      platforms: ["iOS", "iPadOS", "Android", "Web"],
    },
  },
];

export default apps;
