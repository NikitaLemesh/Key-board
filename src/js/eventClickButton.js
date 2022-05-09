import {
  createText, showTextInTextArea, useBackSpaceButton, useDeleteButton, changeCursorPosition,
  useEnterButton, useCapsLockButton, useSpaceButton, useArrowsButton,
  useTabButton,
} from './utils';

function changeButtonColor(event) {
  const { target } = event;
  target.classList.add('button-blue-color');
  setTimeout(() => {
    target.classList.remove('button-blue-color');
  }, 100);
}

export default function clickButton(event) {
  const { target } = event;
  const targetAttributeButton = target.getAttribute('data-button');
  const targetAttributeSpeciaButton = target.getAttribute('data-special-button');
  const textAreaClassList = target.classList.contains('text-area');
  if (!targetAttributeButton && !targetAttributeSpeciaButton && !textAreaClassList) {
    return;
  }

  if (targetAttributeButton) {
    createText(event);
    showTextInTextArea();
    changeButtonColor(event);
    changeCursorPosition();
  }
  if (targetAttributeSpeciaButton) {
    useBackSpaceButton(event);
    useEnterButton(event);
    useDeleteButton(event);
    useArrowsButton(event);
    useCapsLockButton(event);
    useSpaceButton(event);
    useTabButton(event);
    changeCursorPosition();
    changeButtonColor(event);
  }
}
