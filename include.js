
async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');

  for (const element of elements) {
    const file = element.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (response.ok) {
        element.innerHTML = await response.text();
      } else {
        element.innerHTML = 'Файл не найден: ' + file;
      }
    } catch (err) {
      element.innerHTML = 'Ошибка загрузки: ' + file;
    }
  }
}


document.addEventListener('DOMContentLoaded', includeHTML);