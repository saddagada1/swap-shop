import * as kijiji from "kijiji-scraper";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { phone } from "~/utils/constants";

export const postRouter = createTRPCRouter({
  getLatest: publicProcedure.query(async () => {
    const res = await kijiji.search(
      { locationId: 1700272, categoryId: 0, q: phone },
      { maxResults: 6 },
    );
    return res;
  }),
  getAll: publicProcedure.query(async () => {
    const res = await kijiji.search(
      {
        locationId: 1700272,
        categoryId: 0,
        q: phone,
      },
      { minResults: 40 },
    );
    return res;
  }),
});
