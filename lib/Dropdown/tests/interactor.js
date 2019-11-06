import {
  interactor,
  isHidden,
  isVisible,
  attribute,
  isPresent,
  clickable,
  text,
  triggerable,
  scoped,
} from '@bigtest/interactor';

import ButtonInteractor from '../../Button/tests/interactor';

@interactor class DropdownMenu {
  click = clickable('[data-role=menu]');
  pressEscape = triggerable('[data-role=menu]', 'keydown', { keycode: 27 });
  pressDown = triggerable('[data-role=menu]', 'keydown', { keycode: 40 });
}


export default interactor(class DropdownInteractor {
  defaultScope = '[data-test-dropdown]';
  dropdownHasClassDropdown = attribute('[class^=dropdown---]', 'data-test-dropdown');
  hasDropdownClassShow = isPresent('[class^=show---]');
  buttonText = text('button[data-role=toggle] span')
  hasToggleButton = isPresent('button[data-role=toggle]');
  hasMenu = isPresent('[data-role=menu]');
  menu = new DropdownMenu();
  toggleButton = scoped('button[data-role=toggle]', ButtonInteractor);
  ariaExpanded = attribute('button[data-role=toggle]', 'aria-expanded');
  ariaHasPopup = attribute('button[data-role=toggle]', 'aria-haspopup');
  isMenuHidden = isHidden('[data-role=menu]');
  isMenuVisible = isVisible('[data-role=menu]');
  clickOutside = clickable('#root');
  pressEscape = triggerable('button[data-role=toggle]', 'keydown', { keycode: 27 });
  pressTab = triggerable('button[data-role=toggle]', 'keydown', { keycode: 9 });
  pressDown = triggerable('button[data-role=toggle]', 'keydown', { keycode: 40 });
});