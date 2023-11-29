import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { getHours } from "~/utils/helpers";
import { address, email, facebook, phone } from "~/utils/constants";
import { Facebook, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full bg-background">
        <div className="container flex h-20 items-center justify-center gap-2 p-2 lg:p-0">
          <Link href="/" className="relative h-full w-5/6 lg:w-1/4">
            <Image
              src="/images/logo.svg"
              alt="Swap Shop Logo"
              fill
              className="object-contain"
            />
          </Link>
          <div className="hidden flex-1 text-right font-medium lg:block">
            <p>Open Today: {getHours()}</p>
            <p>{address}</p>
          </div>
        </div>
        <div className="border-y">
          <div className="container flex h-16 items-center justify-between p-2 uppercase lg:p-0">
            <Button asChild variant="outline">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/products">Products</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">About</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </nav>
      <div className="pt-36" />
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="mt-16 flex h-[300px] w-full shrink-0 flex-col border-t bg-accent p-4">
      <div className="container flex flex-1 justify-between">
        <div className="text-xl">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Swap Shop Logo"
              width={300}
              height={100}
              className="object-contain"
            />
          </Link>
          <p className="mb-2 mt-4 w-2/3">{address}</p>
          <Link href={`tel:${phone}`}>{phone}</Link>
        </div>
        <div className="hidden gap-4 uppercase lg:flex">
          <Button asChild variant="link">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/products">Products</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      <div className="container flex items-end justify-between">
        <p>&copy; 2023 Swap Shop</p>
        <div className="flex gap-4">
          <Button asChild variant="outline" size="icon">
            <Link href={`mailto:${email}`}>
              <Mail strokeWidth={1} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link href={facebook}>
              <Facebook strokeWidth={1} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Swap Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen flex-col items-center font-sans">
        <Navbar />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
