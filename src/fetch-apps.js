import { getCollection } from "astro:content";
import apps from "./apps";

export const fetchAppsPrivacy = async () => {
  const appsPrivacyCollection = await getCollection("appsPrivacy");

  return appsPrivacyCollection.map((appPrivacy) => {
    const appFound = apps.find((a) => a.params.slug === appPrivacy.id);

    if (!appFound) {
      console.error(`App with ID ${appPrivacy.id} not found in apps.js`);
      return null;
    }

    return {
      params: { slug: appPrivacy.id },
      props: {
        appPrivacy,
        appStoreId: appFound.props.appStoreId,
        iconUrl: appFound.props.iconUrl,
        description: appFound.props.description,
      },
    };
  });
};

export const fetchAppsFAQ = async () => {
  const appsFAQCollection = await getCollection("appsFAQ");

  return appsFAQCollection.map((appFAQ) => {
    const appFound = apps.find((a) => a.params.slug === appFAQ.id);

    if (!appFound) {
      console.error(`App with ID ${appFAQ.id} not found in apps.js`);
      return null;
    }

    return {
      params: { slug: appFAQ.id },
      props: {
        appFAQ,
        appStoreId: appFound.props.appStoreId,
        iconUrl: appFound.props.iconUrl,
        description: appFound.props.description,
      },
    };
  });
};
