import { Loader2 } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import { toast } from "sonner";
import ProductCard from "~/components/productCard";
import { api } from "~/utils/api";

const Products: NextPage = ({}) => {
  const { data: products, isLoading, error } = api.post.getAll.useQuery();

  if (error) {
    toast.error("Something went wrong. Please refresh the page and try again.");
  }
  return (
    <>
      <Head>
        <title>Swap Shop - Products</title>
      </Head>
      <section className="section">
        <h1 className="section-title">All Products</h1>
        <div className="grid gap-4 lg:grid-cols-3">
          {isLoading ? (
            <div className="flex h-[100px] items-center justify-center lg:col-span-3 lg:h-[200px]">
              <Loader2 className="h-10 w-10 animate-spin" />
            </div>
          ) : (
            products?.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))
          )}
        </div>
      </section>
    </>
  );
};
export default Products;
