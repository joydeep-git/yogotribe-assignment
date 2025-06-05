/*
This class is to handle errors at once place.

For  large projects it will contain multiple error handlers, like -
1. different Database errors
2. Many function specific errors

The end error response will be --

{
  success: false,
  message: "error message",
  stack: "error stack"
}

*/



import { StatusCode } from "../types";
import ErrorHandler from "./errorHandler";



class ErrorResponse {

  public static errorResponse({ err, status, message }: { err?: unknown; status?: number; message?: string; }) {

    const statusCode: number = status || StatusCode.INTERNAL_SERVER_ERROR;

    let fallbackMessage: string = message || "Internal Server Error!";

    if (err && err instanceof ErrorHandler) {
      fallbackMessage = err.message;
      status = err.statusCode;
    }

    throw new ErrorHandler({ status: statusCode, message: fallbackMessage });

  }

}

const errorResponse = ErrorResponse.errorResponse;

export default errorResponse;
