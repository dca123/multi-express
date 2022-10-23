import { useExpressServer } from "routing-controllers";
import { PorkController } from "./porkController";

export const porkApi = (app: any) =>
  useExpressServer(app, {
    controllers: [PorkController],
  });
