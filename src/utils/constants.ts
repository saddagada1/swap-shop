import { type DayOfTheWeek } from "./types";

export const hours: Record<DayOfTheWeek, string> = {
  0: "11am - 7pm",
  1: "11am - 7pm",
  2: "11am - 7pm",
  3: "11am - 7pm",
  4: "11am - 7pm",
  5: "10am - 6pm",
  6: "12am - 5pm",
};

export const address = "2300 Lawrence Ave East, Scarborough, M1P 2R2";

export const phone = "416-701-1701";

export const email = "swapshop416@gmail.com";

export const facebook = "https://www.facebook.com/swapshoptoronto/";

export const images = Array.from({ length: 10 }).map(
  (_, i) => `/images/store-${i}.jpeg`,
);

export const testimonials = [
  {
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVGe5az17CKADqNTFcjcsO6WVEeflslbf2Y8tnrQCa6xQ0=w45-h45-p-rp-mo-br100",
    name: "Sebastian Warchol",
    quote:
      "Legitimate place. Great prices. Staff were friendly and helpful at all times. Take a look in store as they have many more items than what is posted online.",
    href: "https://g.co/kgs/rvzgXF",
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUVlOYUQAiNHv1rSNhbkrramNjqj9JYOBzGH7RUVtYh4VA=w45-h45-p-rp-mo-br100",
    name: "Bruce Thomas",
    quote:
      "If I could give 10 stars I would!!  Super helpful, so friendly, professional, the store is immaculate,  everything looks brand new, great advice,personable and welcoming.  I will definitely go back even though it is quite far from my home!",
    href: "https://g.co/kgs/y8oUud",
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXFTlpX9OkjevOFfxQuXH93I6LywuXEd-9u4sK8Uq6Mrnc=w45-h45-p-rp-mo-ba3-br100",
    name: "Joanna Martin Del Campo",
    quote:
      "Great service (cleaning and attention to detail) of a penant and lots of mens jewelry items to explore. I was able to get a discount on the price I saw on the kijii add. Well worth a visit from across the other side of TO.",
    href: "https://g.co/kgs/CBjr34",
  },
];
