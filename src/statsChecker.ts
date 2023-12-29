export const statsChecker = (): void => {
  const stats = document.querySelectorAll('.stats-rating');
  stats.forEach((stat) => {
    const rating = Number(stat.textContent);
    if (rating > 3) stat.classList.add('text-success');
    if (rating === 3) stat.classList.add('text-warning');
    if (rating < 3) stat.classList.add('text-danger');
  });
};
