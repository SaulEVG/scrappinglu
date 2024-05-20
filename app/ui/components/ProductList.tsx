/* eslint-disable @next/next/no-img-element */
import connectDB from "@/app/db/database";
import { getProductList } from "@/app/lib/scrappinglist";
import { shortenUrl } from "@/app/lib/shortenUrl";
import CopyButton from "./CopyButton";
import { headers } from "next/headers";

export default async function ProductList(searchParams: {
  searchParams: string;
}) {
  // const headerList = headers();
  // const host = headerList.get("x-forwarded-host");
  // const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  // const hosting = `${protocol}://${host}/`;

  await connectDB();
  // const productList = await getProductList("");

  // const productListWithShortUrl = await Promise.all(
  //   productList.map(async (product) => {
  //     const { full, short, click } = await shortenUrl(product.productLink);
  //     return { full, short, click, ...product };
  //   })
  // );

  return (
    <>
      {" "}
      hola
      {/* <hr className="border-solid border-slate-800 border-2" />
      <div className="flex flex-row flex-wrap gap-4 mt-4 justify-center">
        {productListWithShortUrl !== null
          ? productListWithShortUrl.map((product) => {
              return (
                <>
                  <div
                    className="flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    key={crypto.randomUUID()}
                  >
                    <img
                      src={
                        product.productImageSrc ? product.productImageSrc : ""
                      }
                      width={400}
                      height={400}
                      alt=""
                      loading="lazy"
                    />

                    <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {product.productTitle}
                    </h3>
                    <h3 className="mb-3 font-medium text-gray-500 dark:text-gray-400">
                      {product.productPrice}
                    </h3>
                    <CopyButton
                      key={crypto.randomUUID()}
                      // hosting={hosting}
                      productData={product}
                    />
                  </div>
                </>
              );
            })
          : "Cargando"}
      </div> */}
    </>
  );
}
