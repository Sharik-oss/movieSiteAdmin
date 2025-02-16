import { CanActivateFn } from '@angular/router';

export const mainGuard: CanActivateFn = (route, state) => {
  const username = prompt("Enter your username:");
  const password = prompt("Enter your password:");

  // Replace this with your actual authentication logic
  if (username === "admin" && password === "1234") {
    return true; // Grant access
  } else {
    alert("Access Denied! Wrong credentials.");
    return false; // Deny access
  }
};
