"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
console.log("hola en front");
export default function SearchBar() {
  //const pathname = usePathname();
  //const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handlerEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlerSearch();
    }
  };
  const handlerSearch = () => {
    const term = document.querySelector("input")?.value;
    // const params = new URLSearchParams(searchParams);
    // if (term) {
    //   params.set("query", term);
    // } else {
    //   params.delete("query");
    // }
    // replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <form className="max-w-md mx-auto my-3" onSubmit={handlerSubmit}>
        <div className="relative">
          <input
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            type="search"
            onKeyDown={handlerEnter}
          />
          <input
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            value="search"
            onClick={handlerSearch}
          />
        </div>
      </form>
    </>
  );
}
