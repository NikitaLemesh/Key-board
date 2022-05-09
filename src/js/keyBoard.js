import KEYBOARD_BUTTONS from './constants';

const arraySpecialButtons = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter',
  'ShiftLeft', 'ShiftRight', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft',
  'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];
export function createKeyBoard() {
  const body = document.querySelector('.body');
  const keyBoardWrapper = document.createElement('section');
  keyBoardWrapper.classList.add('wrapper');
  body.append(keyBoardWrapper);

  const textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.setAttribute('id', 'text-area');
  textArea.setAttribute('rows', 20);
  textArea.setAttribute('cols', 50);
  keyBoardWrapper.append(textArea);

  const listOfButtons = document.createElement('ul');
  listOfButtons.classList.add('list-of-buttons');
  textArea.after(listOfButtons);

  KEYBOARD_BUTTONS.forEach((item) => {
    const keyBoardItem = document.createElement('li');
    keyBoardItem.classList.add('key-board-item');
    listOfButtons.append(keyBoardItem);

    const keyBoardButton = document.createElement('button');
    keyBoardButton.classList.add('key-board-button');
    keyBoardButton.setAttribute('type', 'button');
    keyBoardButton.setAttribute('id', item.id);
    if (arraySpecialButtons.includes(item.id)) {
      keyBoardButton.setAttribute('data-special-button', 'special-button');
    } else {
      keyBoardButton.setAttribute('data-button', 'button');
    }
    if (localStorage.getItem('change language')) {
      if (!item.ru) {
        keyBoardButton.textContent = item.eng;
      } else {
        keyBoardButton.textContent = item.ru;
      }
    } else {
      keyBoardButton.textContent = item.eng;
    }
    keyBoardItem.append(keyBoardButton);

    const buttonSpace = document.getElementById('Space');
    if (buttonSpace) {
      buttonSpace.classList.add('button-space');
    }
  });
  const leftShift = document.getElementById('ShiftLeft');
  leftShift.classList.add('left-shift');
  const rightShift = document.getElementById('ShiftRight');
  rightShift.classList.add('right-shift');
  const capsLock = document.getElementById('CapsLock');
  capsLock.classList.add('caps-lock');
  const enter = document.getElementById('Enter');
  enter.classList.add('enter');
  const backspace = document.getElementById('Backspace');
  backspace.classList.add('back-space');
  const tab = document.getElementById('Tab');
  tab.classList.add('tab');

  const descriptionSystem = document.createElement('p');
  descriptionSystem.classList.add('description-system');
  descriptionSystem.textContent = 'Клавиатура выполнена в операционной системе Windows';
  listOfButtons.after(descriptionSystem);
  const descriptionLanguage = document.createElement('p');
  descriptionLanguage.classList.add('description-language');
  descriptionLanguage.textContent = 'Для переключения языка комбинация: cntrl + alt';
  descriptionSystem.after(descriptionLanguage);
}

export function changeButtonTextContent() {
  KEYBOARD_BUTTONS.forEach((item) => {
    const keyBoardButton = document.getElementById(item.id);
    if (localStorage.getItem('change language')) {
      if (!item.ru) {
        keyBoardButton.textContent = item.eng;
      } else {
        keyBoardButton.textContent = item.ru;
      }
    } else {
      keyBoardButton.textContent = item.eng;
    }
  });
}

export function changeButtonCase() {
  KEYBOARD_BUTTONS.forEach((item) => {
    const keyBoardButton = document.getElementById(item.id);
    if (arraySpecialButtons.includes(item.id)) {
      keyBoardButton.textContent = item.eng;
    } else if (sessionStorage.getItem('capsLockActive')) {
      keyBoardButton.textContent = keyBoardButton.textContent.toUpperCase();
    } else {
      keyBoardButton.textContent = keyBoardButton.textContent.toLowerCase();
    }
  });
}
