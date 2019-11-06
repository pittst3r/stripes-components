import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TetherComponent from 'react-tether';

import {
  describe,
  beforeEach,
  it,
} from '@bigtest/mocha';

import { expect } from 'chai';

import Dropdown from '../Dropdown';
import DropdownMenu from '../../DropdownMenu';
import Button from '../../Button/Button';
import DropdownExample from '../../MenuSection/stories/DropdownExample'

import DropdownInteractor from './interactor';
import { mount } from '../../../tests/helpers';

describe.only('Dropdown', () => {
  const dropdownInteractor = new DropdownInteractor();

  describe('When the data-role is toggle', () => {
    beforeEach(async () => {
      await mount(
          <DropdownExample />
        );
    });

    it('the dropdown should have class "dropdown"' , () => {
      expect(dropdownInteractor.dropdownHasClassDropdown).to.equal('true');
    });

    it('the dropdown should have class "show', () => {
      expect(dropdownInteractor.hasDropdownClassShow).to.be.false;
    });

    it('the dropdown should have toggle button', () => {
      expect(dropdownInteractor.hasToggleButton).to.be.true;
    });

    it('the dropdown should have menu block', () => {
      expect(dropdownInteractor.hasMenu).to.be.true;
    });

    it('the dropdown should have aria-expanded attribute', () => {
      expect(dropdownInteractor.ariaExpanded).to.equal('false');
    });

    it('the dropdown should have aria-haspopup attribute', () => {
      expect(dropdownInteractor.ariaHasPopup).to.equal('true');
    });

    it('the dropdown should have menu hidden', () => {
      expect(dropdownInteractor.isMenuHidden).to.be.true;
    });

    it('the button text should be', () => {
      expect(dropdownInteractor.buttonText).to.equal('Toggle Menu');
    });

    describe('clicking the toggle dropdown', () => {
      beforeEach(async () => {
        await dropdownInteractor.toggleButton.click();
      });

      it('the dropdown should have class "show', () => {
        expect(dropdownInteractor.hasDropdownClassShow).to.be.true;
      });

      it('the dropdown should have menu visible', () => {
        expect(dropdownInteractor.isMenuVisible).to.be.true;
      });

      it('the dropdown should have aria-expanded attribute', () => {
        expect(dropdownInteractor.ariaExpanded).to.equal('true');
      });

      describe('clicking in the opened menu', () => {
        beforeEach(async () => {
          await dropdownInteractor.menu.click();
        });
  
        it('the dropdown should have class "show', () => {
          expect(dropdownInteractor.hasDropdownClassShow).to.be.true;
        });
  
        it('the dropdown should have menu stay visible', () => {
          expect(dropdownInteractor.isMenuVisible).to.be.true;
        });
  
        it('the dropdown should have aria-expanded attribute', () => {
          expect(dropdownInteractor.ariaExpanded).to.equal('true');
        });
      });

      describe('clicking outside the dropdown', () => {
        beforeEach(async () => {
          await dropdownInteractor.clickOutside();
        });
  
        it('the dropdown should have class "show', () => {
          expect(dropdownInteractor.hasDropdownClassShow).to.be.false;
        });
  
        it('the dropdown should have menu hidden', () => {
          expect(dropdownInteractor.isMenuHidden).to.be.true;
        });
  
        it('the dropdown should have aria-expanded attribute', () => {
          expect(dropdownInteractor.ariaExpanded).to.equal('false');
        });
      });

      describe('clicking the toggle dropdown', () => {
        beforeEach(async () => {
          await dropdownInteractor.toggleButton.click();
        });
  
        it('the dropdown should have class "show', () => {
          expect(dropdownInteractor.hasDropdownClassShow).to.be.false;
        });
  
        it('the dropdown should have menu hidden', () => {
          expect(dropdownInteractor.isMenuHidden).to.be.true;
        });
  
        it('the dropdown should have aria-expanded attribute', () => {
          expect(dropdownInteractor.ariaExpanded).to.equal('false');
        });
      });
    });
    
    //testing keydown
    describe.only('clicking down when menu is closed', () => {
      beforeEach(async () => {
        await dropdownInteractor.pressTab();
        await dropdownInteractor.toggleButton.focus();
        await dropdownInteractor.menu.pressDown();
      });

      it('the dropdown should have class "show', () => {
        expect(dropdownInteractor.hasDropdownClassShow).to.be.true;
      });

      it('the dropdown should have menu become hidden', () => {
        expect(dropdownInteractor.isMenuVisible).to.be.true;
      });

      it('the dropdown should have aria-expanded attribute', () => {
        expect(dropdownInteractor.ariaExpanded).to.equal('true');
      });

      describe('clicking escape when menu is open', () => {
        beforeEach(async () => {
          //await dropdownInteractor.toggleButton.focus();
          await dropdownInteractor.pressEscape();
        });
  
        it('the dropdown should have class "show', () => {
          expect(dropdownInteractor.hasDropdownClassShow).to.be.true;
        });
  
        it('the dropdown should have menu become hidden', () => {
          expect(dropdownInteractor.isMenuVisible).to.be.true;
        });
  
        it('the dropdown should have aria-expanded attribute', () => {
          expect(dropdownInteractor.ariaExpanded).to.equal('true');
        });
      });

      describe('clicking tab when menu is open', () => {
        beforeEach(async () => {
          //await dropdownInteractor.toggleButton.focus();
          await dropdownInteractor.pressTab();
        });
  
        it('the dropdown should have class "show', () => {
          expect(dropdownInteractor.hasDropdownClassShow).to.be.true;
        });
  
        it('the dropdown should have menu become hidden', () => {
          expect(dropdownInteractor.isMenuVisible).to.be.true;
        });
  
        it('the dropdown should have aria-expanded attribute', () => {
          expect(dropdownInteractor.ariaExpanded).to.equal('true');
        });
      });
    });
  });
});