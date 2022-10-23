import "reflect-metadata";
import { useExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import { PorkController } from "./porkController";

useContainer(Container);
export const porkApi = (app: any) =>
  useExpressServer(app, {
    controllers: [PorkController],
  });
