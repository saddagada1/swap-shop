import { type Ad } from "kijiji-scraper";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Ad;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={product.url}
      className="flex h-[200px] gap-4 overflow-hidden rounded-md border bg-background p-4 hover:bg-accent hover:text-accent-foreground"
    >
      <div className="relative aspect-square h-full shrink-0 overflow-hidden rounded">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="line-clamp-2 font-medium">{product.title}</p>
        <p className="line-clamp-2 text-sm">{product.description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
