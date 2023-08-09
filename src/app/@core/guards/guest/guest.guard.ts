import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { isUserLoggedIn } from '../auth/auth.guard';

export const guestGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (isUserLoggedIn()) {
    router.navigate(['/app/dashboard']);
    return false;
  }
  return true;
};
