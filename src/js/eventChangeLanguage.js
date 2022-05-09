import { checkLanguageInLocalStorage } from './dataStorage';

export default function changeLanguage(array) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for (let i = 0; i < array.length; i += 1) {
      if (!pressed.has(array[i])) {
        return;
      }
    }
    pressed.clear();
    checkLanguageInLocalStorage();
  });
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}
