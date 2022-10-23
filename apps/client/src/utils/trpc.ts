import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../beef/index";

export const trpc = createTRPCReact<AppRouter>();
