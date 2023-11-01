import Cookies from 'js-cookie';

// Set a cookie
export const setCookie = (key: string, value: string): void => {
  Cookies.set(key, value);
};

// Get a cookie value
export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

// Remove a cookie
export const removeCookie = (key: string): void => {
  Cookies.remove(key);
};