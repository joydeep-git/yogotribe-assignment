import express, { Router } from "express";
import appController from "../controllers/appControllers";


class AppRouter {

  public router: Router = express.Router();

  constructor() {

    this.router.post("/check", appController.primeNumberValidator);

  }

}


const { router: appRouter} = new AppRouter();

export default appRouter;
