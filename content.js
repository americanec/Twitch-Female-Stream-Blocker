const checkedUrls = new Map();

function filterFemaleStreams() {
  // Находим все ссылки на превью стримов на странице
  const previewLinks = document.querySelectorAll('a[data-a-target="preview-card-image-link"]');

  previewLinks.forEach(link => {
    const img = link.querySelector('img');
    if (!img || !img.src) return;

    const src = img.src;

    // Находим рамку всей карточки стрима
    const streamCard = link.closest('.tw-animated-glitch-overlay') || 
                       link.closest('[data-a-target="shelf-card-layout"]') || 
                       link.closest('.gXmbeo') ||
                       link.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

    if (!streamCard) return;

    // Если карточка уже проверена и должна быть скрыта
    if (checkedUrls.has(src)) {
      if (checkedUrls.get(src) === true) {
        streamCard.style.setProperty('display', 'none', 'important');
      }
      return;
    }

    checkedUrls.set(src, 'checking');

    // Собираем весь текст карточки
    const cardText = streamCard.textContent || '';

    chrome.runtime.sendMessage({ action: 'checkGender', url: src, text: cardText }, (response) => {
      if (chrome.runtime.lastError) {
        checkedUrls.delete(src);
        return;
      }
      if (response && response.hide) {
        checkedUrls.set(src, true);
        console.log('[Twitch Filter] Мгновенно удалена подгруженная стримерша.');
        streamCard.style.setProperty('display', 'none', 'important');
      } else {
        checkedUrls.set(src, false);
      }
    });
  });
}

// Заменяем setInterval на живое отслеживание изменений на странице (мгновенный фильтр при скролле)
const pageObserver = new MutationObserver(() => {
  filterFemaleStreams();
});

// Включаем слежение за всей страницей Twitch
pageObserver.observe(document.body, { childList: true, subtree: true });

// Первый запуск при открытии
filterFemaleStreams();
