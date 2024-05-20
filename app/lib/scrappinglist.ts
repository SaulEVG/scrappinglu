import axios from "axios";
import * as cheerio from "cheerio";

export const getProductList = async (itemSearch: string | undefined) => {
  let pageSearch: string;

  if (itemSearch) {
    const itemSearchFormated = itemSearch.split(" ").join("+");
    pageSearch = `https://www.magazinevoce.com.br/magazinesulplus/busca/${itemSearchFormated}/?from=submit`;
  } else {
    pageSearch =
      "https://www.magazinevoce.com.br/magazinesulplus/selecao/ofertasdodia/";
  }
  const response = await axios.get(pageSearch);
  const $ = cheerio.load(response.data);
  const ulWithClass = $("ul.cHnkDp");
  // Mapear cada <li> dentro del <ul> para extraer la información y crear objetos
  const productsData = ulWithClass
    .find("li")
    .map((index, element) => {
      const productLink =
        "https://www.magazinevoce.com.br" + $(element).find("a").attr("href");
      const productImageSrc = $(element).find("img").attr("src");
      const productTitle = $(element)
        .find('div[data-testid="product-card-content"]')
        .text()
        .trim()
        .split("(")[0]
        .trim();

      const productPrice =
        "R$" +
        $(element).find("div.sc-hBtRBD").text().trim().split(`R$`)[2] +
        "R$" +
        $(element).find("div.sc-hBtRBD").text().trim().split(`R$`)[3] +
        "R$" +
        $(element).find("div.sc-hBtRBD").text().trim().split(`R$`)[4];

      return {
        productTitle,
        productPrice,
        productLink,
        productImageSrc,
      };
    })
    .get(); // .get() para convertir el objeto Cheerio en un array de objetos

  return productsData;
};
