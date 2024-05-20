"use client";

import { useState } from "react";

interface fetchListProduct {
  productTitle: string;
  productPrice: string;
  productLink: string;
  productImageSrc: string | undefined;
  full: any;
  short: any;
  click: any;
}

export default function CopyButton({
  productData,
  hosting,
}: {
  productData: fetchListProduct;
  hosting: string;
}) {
  const [click, setClick] = useState(false);

  const handlerCopy = () => {
    const productDataString = `*🛒${productData.productTitle}*\n\n*${productData.productPrice}* no *Magalu*🛍️ \n\n${hosting}${productData.short} \n\n🔐 Site Confiável: *Magalu* \n\n📱 *Link para entrar no grupo* \n https://chat.whatsapp.com/JzQMBb0lDa2JDdCkHlnNPK \n\n⬆ *Já viu as últimas ofertas?* ⬆`;
    navigator.clipboard.writeText(productDataString);
    setClick(!click);
  };

  return (
    <>
      <div key={crypto.randomUUID()}>
        <button
          type="button"
          onClick={handlerCopy}
          className={`col-span-2 text-white ${
            click ? "bg-gray-600" : "bg-blue-700"
          }  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"`}
        >
          {click ? "Copied!" : "Copy."}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </button>
      </div>
      <div>
        <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          {productData.click}
        </span>
      </div>
    </>
  );
}
