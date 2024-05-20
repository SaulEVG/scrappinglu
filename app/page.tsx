import { Suspense } from "react";
import ProductList from "./ui/components/ProductList";
import SearchBar from "./ui/components/SearchBar";
import ProductListSkeleton from "./ui/components/skeleton/ProductListSkeleton";
import connectDB from "./db/database";
export const maxDuration = 60;

export default async function Home(searchParams: {
  params: {};
  searchParams: { query: string };
}) {
  await connectDB();

  return (
    <>
      <SearchBar />
    </>
  );
}
