import { checkSessionStorage } from './dataStorage';

let text = '';
let cursorPositionEnd = text.length;
let cursorPositionStart = text.length;

export function showTextInTextArea() {
  const textAreaId = document.getElementById('text-area');
  textAreaId.textContent = text;
}

export function createText(event) {
  const { target } = event;
  const targetTextContent = target.textContent;
  const textAreaId = document.getElementById('text-area');
  cursorPositionEnd = textAreaId.selectionEnd;
  if (cursorPositionEnd !== text.length) {
    const textBeforeCursor = text.slice(0, cursorPositionEnd);
    const textBeAfterCursor = text.slice(cursorPositionEnd);
    text = textBeforeCursor + targetTextContent + textBeAfterCursor;
    cursorPositionEnd = text.length + 1;
    cursorPositionStart = text.length + 1;
  } else {
    cursorPositionEnd = text.length + 1;
    cursorPositionStart = text.length + 1;
    text += targetTextContent;
  }
}

export function useBackSpaceButton(event) {
  const { target } = event;
  const textAreaId = document.getElementById('text-area');
  const targetBackSpaceId = document.getElementById('Backspace');
  if (targetBackSpaceId !== target) {
    return;
  }
  if (targetBackSpaceId === target) {
    if (cursorPositionEnd === text.length - 1) {
      const arrayTextAreaContent = text.split('');
      arrayTextAreaContent.pop();
      text = arrayTextAreaContent.join('');
    } else {
      cursorPositionEnd = textAreaId.selectionEnd - 1;
      const textBeforeCursor = text.slice(0, cursorPositionEnd);
      const textBeAfterCursor = text.slice(cursorPositionEnd + 1);
      cursorPositionEnd -= 1;
      cursorPositionStart -= 1;
      text = textBeforeCursor + textBeAfterCursor;
    }
    showTextInTextArea();
  }
}

export function useDeleteButton(event) {
  const { target } = event;
  const textAreaId = document.getElementById('text-area');
  const targetDeleteId = document.getElementById('Delete');
  if (targetDeleteId !== target) {
    return;
  }
  if (targetDeleteId === target) {
    cursorPositionEnd = textAreaId.selectionEnd;
    const textBeforeCursor = text.slice(0, cursorPositionEnd);
    const textBeAfterCursor = text.slice(cursorPositionEnd + 1);
    text = textBeforeCursor + textBeAfterCursor;
    showTextInTextArea();
  }
}

export function changeCursorPosition() {
  const textArea = document.getElementById('text-area');
  textArea.focus();
  textArea.setSelectionRange(cursorPositionStart, cursorPositionEnd);
}

export function useEnterButton(event) {
  const { target } = event;
  const targetEnter = document.getElementById('Enter');
  const textBeforeCursor = text.slice(0, cursorPositionEnd);
  cursorPositionEnd = textBeforeCursor.length + 1;
  cursorPositionStart = textBeforeCursor.length + 1;
  if (target === targetEnter) {
    text = `${textBeforeCursor}\n`;
    showTextInTextArea();
  }
}

export function useArrowsButton(event) {
  const { target } = event;
  const targetRightArrow = document.getElementById('ArrowRight');
  const targetLeftArrow = document.getElementById('ArrowLeft');
  const targetUpArrow = document.getElementById('ArrowUp');
  const targetDownArrow = document.getElementById('ArrowDown');
  if (target === targetRightArrow) {
    text += targetRightArrow.textContent;
  } else if (target === targetLeftArrow) {
    text += targetLeftArrow.textContent;
  } else if (target === targetUpArrow) {
    text += targetUpArrow.textContent;
  } else if (target === targetDownArrow) {
    text += targetDownArrow.textContent;
  }
  showTextInTextArea();
}
export function useCapsLockButton(event) {
  const { target } = event;
  const targetCapsLock = document.getElementById('CapsLock');
  if (target === targetCapsLock) {
    checkSessionStorage();
  }
}

export function useSpaceButton(event) {
  const { target } = event;
  const targetSpace = document.getElementById('Space');
  if (target === targetSpace) {
    text += ' ';
    showTextInTextArea();
  }
}

export function useTabButton(event) {
  const { target } = event;
  const targetTab = document.getElementById('Tab');
  if (target === targetTab) {
    cursorPositionStart += 4;
    cursorPositionEnd += 4;
    text += '    ';
    showTextInTextArea();
  }
}
