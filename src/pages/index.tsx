import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { useInterval } from "usehooks-ts";
import { images } from "~/utils/constants";
import { Loader2 } from "lucide-react";
import { api } from "~/utils/api";
import ProductCard from "~/components/productCard";
import { toast } from "sonner";
import Testamonials from "~/components/testamonials";
import VisitUs from "~/components/visitUs";

const NewArrivals: React.FC = () => {
  const { data: products, isLoading, error } = api.post.getLatest.useQuery();

  if (error) {
    toast.error("Something went wrong. Please refresh the page and try again.");
  }

  return (
    <>
      <h1 className="section-title">New Arrivals</h1>
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
    </>
  );
};

const Home = () => {
  const [index, setIndex] = useState(0);

  useInterval(() => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 5000);

  return (
    <>
      <Head>
        <title>Swap Shop</title>
      </Head>
      <section className="relative h-[400px] lg:h-[800px]">
        <div className="absolute h-full w-full overflow-hidden">
          <div
            style={{
              transform: `translateX(-${(100 / images.length) * index}%)`,
            }}
            className="flex h-full w-max transition-transform duration-500 will-change-transform"
          >
            {images.map((image, i) => (
              <div key={i} className="relative h-screen w-screen">
                <Image
                  unoptimized
                  priority
                  src={image}
                  alt={`Swap Shop Store Image #${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-2 bg-foreground/50 uppercase text-background">
          <h1 className="text-6xl font-bold lg:text-9xl">Swap Shop</h1>
          <p className="text-xl font-medium lg:mb-4 lg:text-3xl">
            Open 7 Days - Buy | Sell | Trade
          </p>
          <Button
            className="bg-transparent p-6 text-base lg:p-8 lg:text-xl"
            asChild
            variant="outline"
          >
            <Link href="/products">Explore</Link>
          </Button>
        </div>
      </section>
      <section className="section">
        <Testamonials />
      </section>
      <section className="section">
        <NewArrivals />
      </section>
      <section className="section">
        <VisitUs />
      </section>
    </>
  );
};

export default Home;
