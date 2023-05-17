import * as cheerio from "cheerio";

const websites = [
  "https://www.syntrapxl.be/opleidingen/voltijdse-dagopleiding-xr-developer",
  "https://www.syntrapxl.be/opleidingen/frontend-developer",
  "https://www.syntrapxl.be/opleidingen/voltijdse-dagopleiding-indie-game-developer",
];

const printInfo = async (website) => {
  const content = await fetch(website).then((response) => response.text());
  const $ = cheerio.load(content);

  const title = $("header").find(".field--name-title").text().trim();
  const spotsLeft = $(".intro__startdates")
    .find(".course-available-places")
    .text()
    .trim();
  console.log(`${title}: ${spotsLeft}`);
};

for (const website of websites) {
  await printInfo(website);
}
