export const statsChecker = (): void => {
  const stats = document.querySelectorAll('.stats-rating');
  stats.forEach((stat) => {
    const rating = Number(stat.textContent);
    if (rating > 3) stat.classList.add('stats-success');
    if (rating === 3) stat.classList.add('stats-warning');
    if (rating < 3) stat.classList.add('stats-failure');
  });
};
