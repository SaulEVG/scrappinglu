import ShortUrl from "../db/models/ShortUrlModel";

interface shortUrl {
  full: string;
  short: string;
  click: number;
}

export const shortenUrl = async (link: string) => {
  const existingUrl = await ShortUrl.findOne({ full: link });

  if (existingUrl) {
    return existingUrl;
  }
  try {
    const newShortUrl = new ShortUrl({
      full: link,
    });

    await newShortUrl.save();

    const shortUrl = {
      full: newShortUrl.get("full"),
      short: newShortUrl.get("short"),
      click: newShortUrl.get("click"),
    };

    return shortUrl;
  } catch (error) {
    console.log("error al acortar el URL: ", error);
    throw error;
  }
};
