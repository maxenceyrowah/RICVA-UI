import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const AccessTokenKey = '__ricva__access__token';

export function isUserLoggedIn(): boolean {
  const accessToken = localStorage.getItem(AccessTokenKey);
  return accessToken !== null;
}

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (!isUserLoggedIn()) {
    router.navigate(['/login'])
    return false;
  }

  return true;
};
