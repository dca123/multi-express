import "reflect-metadata";
import { useExpressServer, useContainer, getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from "routing-controllers-openapi";
import { Container } from "typedi";
import { PorkController } from "./porkController";
import { writeFileSync } from "fs";
useContainer(Container);

const storage = getMetadataArgsStorage()
const spec = routingControllersToSpec(storage)
writeFileSync('openapi_pork.json', JSON.stringify(spec, null, 2))

export const porkApi = (app: any) =>
  useExpressServer(app, {
    controllers: [PorkController],
  });
