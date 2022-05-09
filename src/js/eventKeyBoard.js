import KEYBOARD_BUTTONS from './constants';
import { checkSessionStorage } from './dataStorage';

export default function keyDownClick(event) {
  KEYBOARD_BUTTONS.forEach((item) => {
    const buttonCode = event.code;
    if (buttonCode === item.id) {
      const itemId = document.getElementById(item.id);
      if (buttonCode === 'CapsLock') {
        checkSessionStorage();
      }
      itemId.classList.add('key-board-button-hover');
      setTimeout(() => {
        itemId.classList.remove('key-board-button-hover');
      }, 500);
    }
  });
}
