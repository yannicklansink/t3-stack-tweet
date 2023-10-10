import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "~/env.mjs";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

// This file essentially hooks up tRPC to your Next.js project via an API route,
// allowing you to call your tRPC routes client-side seamlessly and typesafely.

// Think of it like a bridge connecting two islands. One island is your Next.js frontend,
// and the other is your tRPC backend logic. This bridge (the API handler) allows easy and safe passage between the two.

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
});
