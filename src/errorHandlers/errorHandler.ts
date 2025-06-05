
// #######################
// extending error class and adding statusCode to it



import { StatusCode } from "../types";


class ErrorHandler extends Error {

  public statusCode: number;

  constructor({
    status,
    message,
  }: {
    status: number;
    message: string;
  }) {

    super(message);

    this.statusCode = status;

  }
}

export default ErrorHandler;
