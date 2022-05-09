import { changeButtonTextContent, changeButtonCase } from './keyBoard';

export function checkLanguageInLocalStorage() {
  if (localStorage.getItem('change language')) {
    localStorage.clear();
    changeButtonTextContent();
  } else {
    localStorage.setItem('change language', true);
    changeButtonTextContent();
  }
}

export function checkSessionStorage() {
  if (sessionStorage.getItem('capsLockActive')) {
    sessionStorage.clear();
    changeButtonCase();
  } else {
    sessionStorage.setItem('capsLockActive', true);
    changeButtonCase();
  }
}
