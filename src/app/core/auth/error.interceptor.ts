import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let userFriendlyMessage = 'An unexpected error occurred.';

        if (error.status === 401) {
          // Automatically logout if 401 Unauthorized
          this.notificationService.throwError('Your session has expired. Logging you out...');
          this.authService.logout();
          location.reload();
        } else if (error.status === 403) {
          // Forbidden
          userFriendlyMessage = 'You do not have permission to perform this action.';
          this.notificationService.throwError(userFriendlyMessage);
        } else if (error.status === 404) {
          // Not Found
          userFriendlyMessage = 'The requested resource was not found.';
          this.notificationService.throwError(userFriendlyMessage);
        } else if (error.status === 500) {
          // Internal Server Error
          userFriendlyMessage = 'A server error occurred. Please try again later.';
          this.notificationService.throwError(userFriendlyMessage);
        } else {
          // Other errors
          userFriendlyMessage = error.error?.message || error.statusText || userFriendlyMessage;
          this.notificationService.throwError(userFriendlyMessage);
        }

        console.error('HTTP Error:', error);

        // Re-throw the error so it can be handled by subscribers if necessary
        return throwError(userFriendlyMessage);
      })
    );
  }
}
