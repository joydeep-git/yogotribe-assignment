

// third party
import express, { Application } from "express";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/errorMiddleware";
import appRouter from "./routers/appRouters";
import routeErrorHandler from "./middleware/routeErrorHandler";



class Server {

  private app: Application;

  private port: number;


  constructor() {

    dotenv.config();

    this.app = express();

    this.port = parseInt(process.env.PORT as string, 10) || 5000;

    this.runServer();

  }



  // ###########  running all methods

  private runServer() {

    try {

      this.middlewareConfig();

      this.createRoutes();

      this.errorMiddlewareConfig();

      this.startServer();

    } catch (err) {

      console.error("failed to start server :", err);
      process.exit(1);

    }

  }



  // ############# call middlewares for request body parser
  private middlewareConfig() {

    this.app.use(express.json());

  }



  // ###########  project base routes
  private createRoutes() {

    this.app.use("/api", appRouter );

  }



  // ########## error middleware
  private errorMiddlewareConfig() {

    // #### WRONG route error
    this.app.use(routeErrorHandler);


    // ##### GLOBAL ERROR HANDLER
    this.app.use(errorMiddleware);

  }



  // ######## start server on port
  private startServer() {

    this.app.listen(this.port, () => {
      console.log("Sever is LIVE on: ", this.port);
    });
  }

}

new Server();
