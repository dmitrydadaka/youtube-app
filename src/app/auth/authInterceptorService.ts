import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAuthToken();

    if (token) {
      // If we have a token, we set it to the header
      request = request.clone({
        setHeaders: { Authorization: `Authorization token ${token}` }
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect user to the logout page
          }
        }
        return throwError(() => new Error);
      })
    )
  }
}
