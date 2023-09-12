import { activeMods } from './data/activemods';
import { other } from './data/other';

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
      modIcon.setAttribute('src', `../img/${type}.png`);

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
      versionCell.textContent = 'Version:';

      const versionRating = document.createElement('td');
      const versionRatingSpan = document.createElement('span');
      versionRatingSpan.textContent = version;
      versionRatingSpan.classList.add('stats-rating', 'version-rating');
      versionRating.append(versionRatingSpan);

      const animationsCell = document.createElement('td');
      animationsCell.textContent = 'Animations:';

      const animationsRating = document.createElement('td');
      const animationsRatingSpan = document.createElement('span');
      animationsRatingSpan.textContent = stats.animations.toString();
      animationsRatingSpan.classList.add('stats-rating');
      animationsRating.append(animationsRatingSpan);
      //
      const tableRow1 = document.createElement('tr');
      const filesizeCell = document.createElement('td');
      filesizeCell.textContent = 'Filesize:';

      const filesizeRating = document.createElement('td');
      const filesizeRatingSpan = document.createElement('span');
      filesizeRatingSpan.textContent = stats.filesize.toString();
      filesizeRatingSpan.classList.add('stats-rating');
      filesizeRating.append(filesizeRatingSpan);

      const tuningCell = document.createElement('td');
      tuningCell.textContent = 'Tuning:';

      const tuningRating = document.createElement('td');
      const tuningRatingSpan = document.createElement('span');
      tuningRatingSpan.classList.add('stats-rating');
      tuningRatingSpan.textContent = stats.tuning.toString();
      tuningRating.append(tuningRatingSpan);
      //
      const tableRow2 = document.createElement('tr');
      const qualityCell = document.createElement('td');
      qualityCell.textContent = 'Quality:';

      const qualityRating = document.createElement('td');
      const qualityRatingSpan = document.createElement('span');
      qualityRatingSpan.textContent = stats.quality.toString();
      qualityRatingSpan.classList.add('stats-rating');
      qualityRating.append(qualityRatingSpan);

      const soundsCell = document.createElement('td');
      soundsCell.textContent = 'Sounds:';

      const soundsRating = document.createElement('td');
      const soundsRatingSpan = document.createElement('span');
      soundsRatingSpan.textContent = stats.sounds.toString();
      soundsRatingSpan.classList.add('stats-rating');
      soundsRating.append(soundsRatingSpan);
      //
      const tableRow3 = document.createElement('tr');
      const handlingCell = document.createElement('td');
      handlingCell.textContent = 'Handling:';

      const handlingRating = document.createElement('td');
      const handlingRatingSpan = document.createElement('span');
      handlingRatingSpan.textContent = stats.handling.toString();
      handlingRatingSpan.classList.add('stats-rating');
      handlingRating.append(handlingRatingSpan);

      const fpsCell = document.createElement('td');
      fpsCell.textContent = 'FPS:';

      const fpsRating = document.createElement('td');
      const fpsRatingSpan = document.createElement('span');
      fpsRatingSpan.classList.add('stats-rating');
      fpsRatingSpan.textContent = stats.fps.toString();
      fpsRating.append(fpsRatingSpan);
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

      const downloadButton = document.createElement('a');
      downloadButton.classList.add('btn', 'btn-primary', 'mod-download-btn');
      downloadButton.setAttribute('href', link);
      downloadButton.setAttribute('target', '_blank');
      downloadButton.textContent = 'Download';

      endingDiv.append(downloadButton);

      accordionBody.append(modImg, ratingTable, endingDiv);
      collapseDiv.append(accordionBody);
      accordionItem.append(accordionHeader, collapseDiv);

      mainContainer.append(accordionItem);
      activeModsContainer?.append(mainContainer);
    };

    const updateActiveMods = () => {
      const container = document.querySelector('.activemods-counter');
      container!.textContent = `Active Mods: ${activeIndex}`;
    };

    createDOMElements();
    updateActiveMods();
  });

  const isVersionUpToDate = () => {
    const modsVersion = document.querySelectorAll('.version-rating');
    const { currentVersion } = other[0];
    modsVersion.forEach((version) => {
      version.textContent === currentVersion
        ? version.classList.add('text-success')
        : version.classList.add('text-danger');
    });
  };

  isVersionUpToDate();
};

renderActiveMods();
