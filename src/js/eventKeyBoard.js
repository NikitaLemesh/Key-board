import KEYBOARD_BUTTONS from './constants';

export default function keyDownClick(event) {
  KEYBOARD_BUTTONS.forEach((item) => {
    const buttonCode = event.code;
    if (buttonCode === item.id) {
      const itemId = document.getElementById(item.id);
      itemId.classList.add('button-blue-color');
      setTimeout(() => {
        itemId.classList.remove('button-blue-color');
      }, 500);
    }
  });
}
