import { PureRouter } from "./PureRouter";
import { getDare } from "./RouteUtils";

export const ROOT = "/";

export class Router extends PureRouter {
  constructor() {
    super();
    this.mountRoutes();
  }

  private mountRoutes() {
    this.router.get("/", (_, res) => {
      res.json(`Kod Backend Running - V${process.env.npm_package_version}`);
    });

    this.router.post("/dare", (req, res) => {
      res.json(getDare(req.body));
    });
  }
}
