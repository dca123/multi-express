import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

const t = initTRPC.create();

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

const appRouter = t.router({
  getBeef: t.procedure.query((req) => {
    return {
      data: "Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma redeye variety, cinnamon Beans trifecta plunger black spoon aftertaste caffeine so steamed, espresso Aromatic panna est sit and shot in. Origin Body java iced medium affogato mountain And americano, irish kopi-luwak at mazagran froth sweet Aromatic pot, white Bar Cappuccino id trade fair Aroma. Aftertaste carajillo seasonal plunger black irish Americano shot brewed qui fair, trade pot single And Brewed grinder et caffeine panna pumpkin Blue, at mazagran Black arabica au cortado bar trifecta lungo. And roast pumpkin cinnamon mazagran sugar carajillo shop,  As press acerbic wings in mountain coffee, Acerbic brewed qui white Americano saucer. Grounds roast viennese filter trifecta acerbic press, irish wings shop Blue rich extra, spice iced crema bar affogato. Black ristretto extraction rich Con breve turkish shot viennese, sit crema frappuccino americano aged single shop sweet flavour, organic Arabica lait instant arabica pumpkin con.",
    };
  }),
});

export const trpc = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
});

export type AppRouter = typeof appRouter;
