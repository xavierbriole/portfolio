const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://xavierbriole.com"
    : "http://localhost:4321";

const config = {
  siteUrl: baseUrl,
  title: "Xavier Briole",
  description: "I build websites, packages and apps that help people.",
  author: "Xavier Briole",
  creator: "xavierbriole",
  avatarUrl: "/assets/avatar.jpg",
  googleAnalytics: "G-SSXHZE63J1",
  socials: [
    {
      platform: "github",
      url: "https://github.com/xavierbriole",
    },
    {
      platform: "threads",
      url: "https://www.threads.net/@xavierbriole",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/xavierbriole",
    },
    {
      platform: "npm",
      url: "https://www.npmjs.com/~xavierbriole",
    },
  ],
};

export { config as c };
