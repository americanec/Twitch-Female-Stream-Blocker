const femaleKeywords = [
  // Базовые слова
  'девушка', 'girl', 'female', 'woman', 'вумен', 'тян', 'стримерша', 'женский', 'женские',
  'goddess', 'milf', 'милф', 'красотка', 'милая', 'косплей', 'cosplay', 'бикини', 'bikini',
  
  // Теги и трансляции
  'beauty', 'cosmetics', 'makeup', 'asmr', 'pool', 'hot tub', 'dance', 'just chatting',
  'try on', 'haul', 'примерка', 'макияж', 'красота', 'косметика', 'разговоры', 'общение',
  'живое общение', 'кукинг', 'cooking', 'nails', 'маникюр', 'vibe', 'уют', 'чилл',
  
  // Имена, никнеймы и части имен стримерш (включая techbae и lena)
  'olesya', 'олеся', 'liberman', 'либерман', 'irinapart', 'ирина', 'иришка', 'chick', 'babe', 
  'lady', 'queen', 'femaleonly', 'egirl', 'waifu', 'princess', 'model', 'милота', 'няша',
  'techbae', 'bae', 'lenaperia', 'lena', 'лена', 'ленка', 'meow', 'kitty', 'cute', 'bunny',
  'sweet', 'angel', 'cherry', 'doll', 'honey', 'fox', 'pink'
];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'checkGender' && message.url) {
    const textToSearch = (message.text || '').toLowerCase();
    const isFemale = femaleKeywords.some(word => textToSearch.includes(word));
    sendResponse({ hide: isFemale });
  }
  return true;
});
