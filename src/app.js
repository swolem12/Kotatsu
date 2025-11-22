/* 
Original: KotatsuApp/Kotatsu
Fork: swolem12/Kotatsu
Created-by: swolem12
Created-date: 2025-11-22
Changes: Add initial Chirui Reader app script.
License: Follow original repository license; track changes/dates in source files.
*/
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current === 'dark' ? 'dark' : 'light');
    localStorage.setItem('chirui:theme', current);
  });
}

(function init(){
  const saved = localStorage.getItem('chirui:theme');
  if (saved === 'dark') root.setAttribute('data-theme','dark');
  // placeholder: populate sample manga list
  const mangaList = document.getElementById('manga-list');
  if (mangaList) {
    ['Sample Manga A','Sample Manga B','Sample Manga C'].forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      mangaList.appendChild(li);
    });
  }
})();