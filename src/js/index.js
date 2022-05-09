import '../index.html';
import '../css/style.css';
import { createKeyBoard } from './keyBoard';
import clickButton from './eventClickButton';
import keyDownClick from './eventKeyBoard';
import changeLanguage from './eventChangeLanguage';

createKeyBoard();
const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', clickButton);
document.addEventListener('keydown', keyDownClick);
changeLanguage(['ControlLeft', 'AltLeft']);
