import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { isUserLoggedIn } from '../dashboard/dashboard.guard';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (isUserLoggedIn()) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
