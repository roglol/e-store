import {Catch,ExceptionFilter,HttpException,ArgumentsHost,Logger} from '@nestjs/common';
//new branch
@Catch()
export class HttpErrorFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost){
         const ctx = host.switchToHttp();
         const request = ctx.getRequest();
         const response = ctx.getResponse();
         const status = exception.getStatus();

         const errorResponse = {
              code: status,
              timestamp: new Date().toLocaleDateString(),
              path: request.url,
              method: request.method,
              message: exception.message.error || exception.message || null
         }

         Logger.error(`${request.method} ${request.url}`,exception.stack,'ExceptionFilter');

         response.status(status).json(errorResponse);
    }
}


//this is my master branch