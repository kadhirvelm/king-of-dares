import { PureRouter } from "./PureRouter";

export const ROOT = "/";

export class Router extends PureRouter {
  constructor() {
    super();
    this.mountRoutes();
  }

  private mountRoutes() {
    this.router.get("/", (req, res) => {
      res.json(`Kod Backend Running - V${process.env.npm_package_version}`);
    });

    this.router.post("/dare", (req, res) => {
      res.json("Sample dare");
    });
  }
}
