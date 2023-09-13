import { disabledMods } from './data/data-disabledmods';

const renderDisabledMods = () => {
  let disabledIndex = 0;

  const disabledModsContainer = document.querySelector('#disabledMods');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('accordion', 'mt-2');
  mainContainer.setAttribute('id', 'accordionDisabledCars');

  disabledMods.forEach((mod) => {
    const { id, name, type, link, img, reason, disableDate } = mod;
    disabledIndex += 1;

    const createDOMElements = () => {
      const accordionItem = document.createElement('div');
      accordionItem.classList.add('accordion-item');

      const accordionHeader = document.createElement('h2');
      accordionHeader.classList.add('accordion-header');

      const accordionButton = document.createElement('button');
      accordionButton.classList.add('accordion-button', 'collapsed');
      accordionButton.setAttribute('type', 'button');
      accordionButton.setAttribute('data-bs-toggle', 'collapse');
      accordionButton.setAttribute('data-bs-target', `#collapse${id}`);
      accordionButton.setAttribute('aria-expanded', 'false');
      accordionButton.setAttribute('aria-controls', `collapse${id}`);

      const modIcon = document.createElement('img');
      modIcon.classList.add('mod-icon');
      modIcon.setAttribute('src', `../img/${type}.png`);

      const modName = document.createTextNode(name);

      accordionButton.append(modIcon, modName);
      accordionHeader.append(accordionButton);

      const collapseDiv = document.createElement('div');
      collapseDiv.classList.add('accordion-collapse', 'collapse');
      collapseDiv.setAttribute('id', `collapse${id}`);
      collapseDiv.setAttribute('data-bs-parent', '#accordionDisabledCars');

      const accordionBody = document.createElement('div');
      accordionBody.classList.add('accordion-body');

      const modImg = document.createElement('img');
      modImg.setAttribute('src', img);
      modImg.classList.add('mod-img');

      const reasonTable = document.createElement('table');
      reasonTable.classList.add('table', 'table-borderless', 'mt-2');

      const tableRow = document.createElement('tr');
      const reasonCell = document.createElement('td');
      reasonCell.textContent = 'Disabled Reason:';

      const reasonCellAnswer = document.createElement('td');
      const reasonCellAnswerSpan = document.createElement('span');
      reasonCellAnswerSpan.textContent = reason;
      reasonCellAnswerSpan.classList.add('disabled-reason');
      reasonCellAnswer.append(reasonCellAnswerSpan);

      const disabledDateCell = document.createElement('td');
      disabledDateCell.textContent = 'Disabled from:';

      const disabledDateCellAnswer = document.createElement('td');
      const disabledDateCellAnswerSpan = document.createElement('span');
      disabledDateCellAnswerSpan.textContent = disableDate;
      disabledDateCellAnswer.append(disabledDateCellAnswerSpan);
      //
      tableRow.append(
        reasonCell,
        reasonCellAnswer,
        disabledDateCell,
        disabledDateCellAnswer
      );
      reasonTable.append(tableRow);

      accordionBody.append(modImg, reasonTable);
      collapseDiv.append(accordionBody);
      accordionItem.append(accordionHeader, collapseDiv);

      mainContainer.append(accordionItem);
      disabledModsContainer?.append(mainContainer);
    };

    const updateDisabledMods = () => {
      const container = document.querySelector('.disabledmods-counter');
      container!.textContent = `Disabled Mods: ${disabledIndex}`;
    };

    createDOMElements();
    updateDisabledMods();
  });
};

renderDisabledMods();
