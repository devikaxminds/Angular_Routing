import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('🔥🔥🔥 AuthInterceptor: Request intercepted to', req.url);
  console.log('🔥🔥🔥 AuthInterceptor: Method:', req.method);

  // Pass the request to the next handler
  return next(req);
};
