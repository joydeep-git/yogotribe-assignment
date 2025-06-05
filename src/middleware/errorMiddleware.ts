
// ###########################
// error middleware capturing all errors and sending it to user in a structured way



import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { StatusCode } from "../types";
import ErrorHandler from "../errorHandlers/errorHandler";


// config
dotenv.config();


const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {


  let statusCode = StatusCode.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";
  let stack: string = "No stack trace available";


  // checking if Error is instance of ErrorHandler and has required data
  if (err instanceof ErrorHandler) {
    statusCode = err.statusCode;
    message = err.message;
    stack = err.stack || "";
  }



  if (process.env.NODE_ENV === "production") {

    res.status(statusCode).json({
      success: false,
      statusCode,
      message
    });

  } else {

    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
      stack
    });

  }


};

export default errorMiddleware;