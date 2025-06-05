import { NextFunction, Request, Response } from "express";
import { StatusCode } from "../types";
import errorResponse from "../errorHandlers/errorResponse";



class AppController {


  // ######### CHECK PRIME NUMBER
  public primeNumberValidator(req: Request, res: Response, next: NextFunction) {

    const { number } = req.body;


    // checking undefined values
    if ( number === undefined || number === null ) {
      return next(errorResponse({ message: "No number provided!", status: StatusCode.BAD_REQUEST }));
    }


    // Convert to number
    const num = Number(number);


    // checking if the input is text or Icons or characters, etc
    if ( isNaN(num) ) {
      return next(errorResponse({ message: "Please enter numbers only!", status: StatusCode.BAD_REQUEST }));
    }


    // checking decimal numbers
    if ( !Number.isInteger(num) ) {
      return next(errorResponse({ message: "Please enter whole numbers only!", status: StatusCode.BAD_REQUEST }));
    }



    // Checking if its prime
    if (num <= 1 ) {

      return res.status(StatusCode.OK).json({
        is_prime_number: false,
        message: `${num} is not a prime number!`,
      });

    } else if (num <= 3) {

      return res.status(StatusCode.OK).json({
        is_prime_number: true,
        message: `${num} is a prime number!`,
      })

    } else if (num % 2 === 0 || num % 3 === 0) {

      return res.status(StatusCode.OK).json({
        is_prime_number: false,
        message: `${num} is not a prime number!`,
      });

    }



    // All prime numbers mostly are multiple of 6 +- 1, so checking 5( which is 6 -1 ) and 5 + 2 ( which is 6 + 1 )
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {

        return res.status(StatusCode.OK).json({
          is_prime_number: false,
          message: `${num} is not a prime number!`
        })

      }
    }


    // If all above checks doesnt return then its a prime number
    return res.status(StatusCode.OK).json({
      is_prime_number: true,
      message: `${num} is a prime number!`
    });


  }


}

const appController = new AppController();

export default appController;
