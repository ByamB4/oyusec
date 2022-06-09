import { ISocialLink } from "interfaces";

export const meltSocialLinks = (
  socialLinks: ISocialLink
): { icon: string; value: string }[] => {
  const res: { icon: string; value: string }[] = [];
  try {
    for (const [key, value] of Object.entries(socialLinks)) {
      if (!value) continue;

      switch (key) {
        case "facebookLink":
          res.push({
            icon: "facebook",
            value,
          });
          break;
        case "instagramLink":
          res.push({
            icon: "instagram",
            value,
          });
          break;
        case "youtubeLink":
          res.push({
            icon: "youtube",
            value,
          });
          break;
        case "twitterLink":
          res.push({
            icon: "twitter",
            value,
          });
          break;
        case "linkedinLink":
          res.push({
            icon: "linkedin",
            value,
          });
          break;
        case "githubLink":
          res.push({
            icon: "github",
            value,
          });
          break;
      }
    }
  } catch (err) {
    return res;
  }
  return res;
};
