const packages: {
  params: { slug: string };
  props: {
    packageName: string;
    description: string;
    iconUrl: string;
    tags: string[];
  };
}[] = [
  {
    params: { slug: "react-cookienotice" },
    props: {
      packageName: "react-cookienotice",
      description:
        "A lightweight & customizable cookie banner for your React App",
      iconUrl: "/assets/packages/react-cookienotice.png",
      tags: ["npm"],
    },
  },
];

export default packages;
