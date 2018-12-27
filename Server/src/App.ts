import bodyParser from "body-parser";
import express from "express";
import { ROOT, Router } from "./Routes/Routes";

export class PureApp {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json({ strict: true }));
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, access-token"
      );
      res.header("Access-Control-Allow-Methods", "DELETE, GET, POST, PUT");
      next();
    });
    this.mountRoutes();
  }

  private mountRoutes() {
    this.app.use(ROOT, new Router().router);
  }
}

export const App = () => new PureApp().app;
