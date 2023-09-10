import { activeMods } from './data/activemods';

const renderActiveMods = () => {
  let activeIndex = 0;

  const activeModsContainer = document.querySelector('#activemods');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('accordion', 'mt-2');
  mainContainer.setAttribute('id', 'accordionActiveCars');

  activeMods.forEach((mod) => {
    const { id, name, type, version, link, img, stats } = mod;
    activeIndex += 1;
    //
    //  TODO:
    //    REFACTOR THIS SHIET ASAP
    //    YOU MAY WANT TO USE DIFFERENT FUNCS
    //    TO DESTRUCTURE THE DOM-BUILDING PROCESS
    //
    //    GLHF
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
      modIcon.setAttribute('src', type);

      const modName = document.createTextNode(name);

      accordionButton.append(modIcon, modName);
      accordionHeader.append(accordionButton);

      const collapseDiv = document.createElement('div');
      collapseDiv.classList.add('accordion-collapse', 'collapse');
      collapseDiv.setAttribute('id', `collapse${id}`);
      collapseDiv.setAttribute('data-bs-parent', '#accordionActiveCars');

      const accordionBody = document.createElement('div');
      accordionBody.classList.add('accordion-body');

      const modImg = document.createElement('img');
      modImg.setAttribute('src', img);
      modImg.classList.add('mod-img');

      const ratingTable = document.createElement('table');
      ratingTable.classList.add('table', 'table-borderless', 'mt-2');

      //
      const tableRow0 = document.createElement('tr');
      const versionCell = document.createElement('td');
      versionCell.textContent = 'Version';

      const versionRating = document.createElement('td');
      const versionRatingSpan = document.createElement('span');
      versionRatingSpan.textContent = version;
      versionRatingSpan.classList.add('stats-rating');
      versionRating.append(versionRatingSpan);

      const animationsCell = document.createElement('tr');
      animationsCell.textContent = 'Animations';

      const animationsRating = document.createElement('td');
      const animationsRatingSpan = document.createElement('span');
      animationsRatingSpan.textContent = stats.animations.toString();
      animationsRatingSpan.classList.add('stats-rating');
      animationsRating.append(versionRatingSpan);
      //
      const tableRow1 = document.createElement('tr');
      const filesizeCell = document.createElement('td');
      filesizeCell.textContent = 'Filesize';

      const filesizeRating = document.createElement('td');
      const filesizeRatingSpan = document.createElement('span');
      filesizeRatingSpan.textContent = stats.filesize.toString();
      filesizeRatingSpan.classList.add('stats-rating');
      filesizeRating.append(filesizeRatingSpan);

      const tuningCell = document.createElement('td');
      tuningCell.textContent = 'Tuning';

      const tuningRating = document.createElement('td');
      const tuningRatingSpan = document.createElement('span');
      tuningRatingSpan.classList.add('stats-rating');
      tuningRatingSpan.textContent = stats.tuning.toString();
      tuningRating.append(tuningRatingSpan);
      //
      const tableRow2 = document.createElement('tr');
      const qualityCell = document.createElement('td');
      qualityCell.textContent = 'Quality';

      const qualityRating = document.createElement('td');
      const qualityRatingSpan = document.createElement('span');
      qualityRatingSpan.textContent = stats.quality.toString();
      qualityRatingSpan.classList.add('stats-rating');
      qualityRating.append(filesizeRatingSpan);

      const soundsCell = document.createElement('td');
      soundsCell.textContent = 'Sounds';

      const soundsRating = document.createElement('td');
      const soundsRatingSpan = document.createElement('span');
      soundsRatingSpan.classList.add('stats-rating');
      soundsRatingSpan.textContent = stats.sounds.toString();
      soundsRating.append(tuningRatingSpan);
      //
      const tableRow3 = document.createElement('tr');
      const handlingCell = document.createElement('td');
      handlingCell.textContent = 'Handling';

      const handlingRating = document.createElement('td');
      const handlingRatingSpan = document.createElement('span');
      handlingRatingSpan.textContent = stats.handling.toString();
      handlingRatingSpan.classList.add('stats-rating');
      handlingRating.append(filesizeRatingSpan);

      const fpsCell = document.createElement('td');
      fpsCell.textContent = 'Sounds';

      const fpsRating = document.createElement('td');
      const fpsRatingSpan = document.createElement('span');
      fpsRatingSpan.classList.add('stats-rating');
      fpsRatingSpan.textContent = stats.fps.toString();
      fpsRating.append(tuningRatingSpan);
      //
      tableRow0.append(
        versionCell,
        versionRating,
        animationsCell,
        animationsRating
      );
      tableRow1.append(filesizeCell, filesizeRating, tuningCell, tuningRating);
      tableRow2.append(qualityCell, qualityRating, soundsCell, soundsRating);
      tableRow3.append(handlingCell, handlingRating, fpsCell, fpsRating);
      ratingTable.append(tableRow0, tableRow1, tableRow2, tableRow3);

      const endingDiv = document.createElement('div');
      endingDiv.classList.add('d-flex', 'justify-content-center');

      const downloadButton = document.createElement('button');
      downloadButton.classList.add('btn', 'btn-primary', 'mod-download-btn');
      downloadButton.setAttribute('type', 'button');
      downloadButton.textContent = 'Download';
      //
      //  DYNAMIC LINK CURRENTLY UNSUPPORTED
      //  TODO:
      //        CREATE A FUNC THAT WILL HOOK EVERY DOWNLOAD BUTTON
      //        PARSE THE VALUE FROM STATE
      //        CREATE A LISTENER THAT WILL OPEN A NEW WINDOW ON CLICK
      //

      endingDiv.append(downloadButton);

      accordionBody.append(modImg, ratingTable, endingDiv);
      collapseDiv.append(accordionBody);
      accordionItem.append(accordionHeader, collapseDiv);
    };

    createDOMElements();
  });
};

renderActiveMods();
