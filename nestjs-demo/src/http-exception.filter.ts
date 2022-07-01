import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const errorMessage = exception.getResponse() as
            | string
            | { error: string; statusCode: number; message: string | string[] };

        if(typeof errorMessage === 'string') {
            response
                .status(status)
                .json({
                    statusCode: status,
                    timeStamp: new Date(),
                    path: request.url,
                    errorMessage: errorMessage
                })
        } else {
            response
                .status(status)
                .json({
                    statusCode: status,
                    timeStamp: new Date(),
                    path: request.url,
                    errorMessage: errorMessage.message
                })
        }
    }
}