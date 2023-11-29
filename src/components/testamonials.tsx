import { Quote, Star } from "lucide-react";
import { testimonials } from "~/utils/constants";
import Image from "next/image";

const Testamonials: React.FC = () => {
  return (
    <>
      <h1 className="section-title">Our Valued Customers</h1>
      <ul className="flex flex-col gap-4 lg:flex-row">
        {testimonials.map((item, index) => (
          <li
            key={index}
            className="flex h-fit flex-1 flex-col rounded-md border lg:h-[250px]"
          >
            <Quote
              className="m-4 h-8 w-8 text-muted-foreground"
              strokeWidth={1}
            />
            <div className="flex h-full flex-col">
              <p className="mx-4 mb-4 flex-1 text-sm font-medium">
                {item.quote}
              </p>
              <div className="flex items-center gap-4 border-t bg-accent p-4">
                <Image
                  src={item.avatar}
                  alt={`Testamonial User Image #${index}`}
                  className="rounded-full border"
                  width={48}
                  height={48}
                />
                <div className="space-y-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        strokeWidth={0}
                        className="h-4 w-4 fill-yellow-500"
                      />
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Testamonials;
