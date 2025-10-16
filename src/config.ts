const config: {
  title: string;
  description: string;
  authorName: string;
  creatorUsername: string;
  mailto: {
    address: string;
    subject: string;
  };
  avatarUrl: string;
  googleAnalytics: string;
  timezone: string;
  banner: {
    display: boolean;
    text: string;
    link: string;
  };
  navItems: { name: string; link: string }[];
  socials: { platform: string; url: string }[];
} = {
  title: "Xavier Briole",
  description: "I build websites, packages and apps that help people.",
  authorName: "Xavier Briole",
  creatorUsername: "xavierbriole",
  mailto: {
    address: "conservant.94.platres@icloud.com",
    subject: "Hello Xavier 👋",
  },
  avatarUrl: "/assets/avatar.jpg",
  googleAnalytics: "G-SSXHZE63J1",
  timezone: "Europe/Paris", // Intl.DateTimeFormat().resolvedOptions().timeZone
  banner: {
    display: true,
    text: "League of Legends Worlds 2025 started! See how to subscribe to the calendar.",
    link: "/blog/league-of-legends-worlds-2025-calendar",
  },
  navItems: [
    {
      name: "Apps",
      link: "/apps",
    },
    {
      name: "Packages",
      link: "/packages",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
  ],
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

export default config;
