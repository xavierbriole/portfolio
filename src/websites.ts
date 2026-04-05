const websites: {
  params: { slug: string };
  props: {
    websiteName: string;
    websiteUrl: string;
    description: string;
    logoUrl: string;
    previewImageUrl: string;
  };
}[] = [
  {
    params: { slug: "storyfolio" },
    props: {
      websiteName: "Storyfolio",
      websiteUrl: "https://storyfolio.me",
      description:
        "Upload and share photo collections. Send private links and let people find themselves with facial recognition",
      logoUrl: "/assets/websites/storyfolio/logo.png",
      previewImageUrl: "/assets/websites/storyfolio/preview.png",
    },
  },
  {
    params: { slug: "chateau-des-trois-sautets" },
    props: {
      websiteName: "Château des Trois Sautets",
      websiteUrl: "https://www.chateaudestroissautets.com",
      description:
        "A family-run vineyard near Aix-en-Provence, producing high-quality wines in AOC Palette estate",
      logoUrl: "/assets/websites/c3s/logo.png",
      previewImageUrl: "/assets/websites/c3s/preview.png",
    },
  },
];

export default websites;
