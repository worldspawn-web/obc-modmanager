import { activeMods } from './data/activemods';

const renderActiveMods = () => {
  let activeIndex = 0;

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('accordion', 'mt-2');
  mainContainer.setAttribute('id', 'accordionExample');

  activeMods.forEach((mod) => {
    const { id, name, type, version, link, img, stats } = mod;
    activeIndex += 1;
    const divAccordion = document.createElement('div');
    divAccordion.classList.add('accordion-item');
    const h2Accordion = document.createElement('h2');
    h2Accordion.classList.add('accordion-header');

    const h2Button = document.createElement('button');
    h2Button.classList.add('accordion-button', 'collapsed');
    h2Button.setAttribute('type', 'button');
    h2Button.setAttribute('data-bs-toggle', 'collapse');
    h2Button.setAttribute('data-bs-target', `#collapse${activeIndex}`);
    h2Button.setAttribute('aria-expanded', 'false');
    h2Button.setAttribute('aria-controls', `collapse${activeIndex}`);

    const modIcon = document.createElement('img');
    modIcon.classList.add('mod-icon');
    modIcon.setAttribute('src', `img/${type}`);

    const nameAccordion = document.createTextNode(name);
    h2Accordion.append(h2Button, modIcon, nameAccordion);

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('id', `collapse${activeIndex}`);
    buttonDiv.classList.add('accordion-collapse, collapse');
    buttonDiv.setAttribute('data-bs-parent', '#accordionExample');

    const bodyAccordion = document.createElement('div');
    bodyAccordion.classList.add('accordion-body');
    const modImg = document.createElement('img');
    modImg.classList.add('mod-img');
    modImg.setAttribute('src', img);

    divAccordion.append(h2Accordion);
    //
    // ... NOT DONE YET
    //
  });
};

renderActiveMods();
