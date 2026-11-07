# Twitch-Female-Stream-Blocker

Twitch Female Stream Blocker 🚫👩

A simple and effective Chrome extension designed specifically for those who are tired of the dominance of female streamers on the Twitch homepage and want to save themselves from extra reasons to feel blue (for incels).
The plugin automatically cuts out female stream cards from the Twitch interface in real-time (right as you scroll the feed).

🛠 How It Works

The extension acts as an intelligent textual sieve-filter. On the fly, it scans loaded broadcast cards and completely wipes them from the interface if it finds matches based on the following parameters:
• Stream Titles: Blocks specific broadcast formats (TRY ON HAUL, ASMR, Just Chatting, Cooking, Makeup, etc.).
• Specific Tags: Detects streams using tags like Beauty, Cosmetics, Hot Tub, Pool, Just Chatting.
• Channel Nicknames: Recognizes female names (Olesya, Irina, Lena) and popular markers in female naming conventions (_bae, kitty, cute, meow).

🚀 Installation Guide (In 2 Minutes)

Since the extension is completely standalone and does not transfer your data to third-party servers, it is installed directly via Developer Mode:
1. Download the manifest.json, background.js, and content.js files from this repository and place them into a single folder on your computer (for example, naming it Twitch_Female_Stream_Blocker).
2. Open Google Chrome (or any Chromium-based browser) and navigate to: chrome://extensions/.
3. In the top right corner, toggle on "Developer mode".
4. In the top left corner, click the "Load unpacked" button.
5. Select the folder containing your files.
6. Open Twitch and enjoy a streamlined feed free of girls! (It doesn't work perfectly, some female streamers might still show up. To fix this, you can expand the filter with your own tags and words—the source code is open-source, welcome! See how to add them below).
7. On the first launch, refresh the page using Ctrl + F5.
Done!

☕ Support the Author (Rewards)

If this plugin has saved your nerves, partially cleaned up your feed, and made browsing Twitch more comfortable, you can support me via:
usdt (aptos):
0xde94a5aad91e5dc09257c7c8d596dfc00eab094d5f03d920bd033f9816e78592

🧩 How to Add Your Own Stop-Phrase?

If a female streamer slips through the filter, open the background.js file using a standard Notepad and simply add her nickname or a tag in lowercase to the femaleKeywords list, separated by a comma. After that, refresh the extension in your browser.

# Twitch Female Stream Blocker 🚫👩

Простое и эффективное Chrome-расширение, созданное специально для тех, кто устал от засилья стримерш на главной странице Twitch и хочет избавить себя от лишних поводов для грусти.(актуально для инцелов)
Плагин автоматически вырезает карточки женских стримов из интерфейса Twitch в режиме реального времени (прямо во время прокрутки ленты).

## 🛠 Как это работает?
Расширение работает как интеллектуальный текстовый сито-фильтр. Он на лету сканирует подгружаемые карточки трансляций и полностью стирает их из интерфейса, если находит совпадения по следующим параметрам:
* **Названия стримов:** Блокирует специфические форматы трансляций (`TRY ON HAUL`, `ASMR`, `Just Chatting`, `Кукинг`, `Макияж` и т.д.).
* **Специфические теги:** Вычисляет стримы по тегам вроде `Beauty`, `Cosmetics`, `Hot Tub`, `Pool`, `Живое общение`.
* **Никнеймы каналов:** Распознает женские имена (`Olesya`, `Irina`, `Lena`) и популярные маркеры в женском нейминге (`_bae`, `kitty`, `cute`, `meow`).

## 🚀 Инструкция по установке (за 2 минуты)
Поскольку расширение полностью автономно и не передает ваши данные на сторонние сервера, оно устанавливается напрямую через режим разработчика:

1. Скачайте файлы `manifest.json`, `background.js` и `content.js` из этого репозитория и положите их в одну папку на компьютере (например, назвав её `Twitch_Female_Stream_Blocker`).
2. Откройте Google Chrome (или любой браузер на базе Chromium) и перейдите по ссылке: `chrome://extensions/`.
3. В правом верхнем углу включите тумблер **«Режим разработчика»** (Developer mode).
4. В левом верхнем углу нажмите кнопку **«Загрузить распакованное расширение»** (Load unpacked).
5. Выберите вашу папку с файлами.
6. Откройте Twitch и наслаждайтесь частичной лентой без девушек!(Работает не идеально, какие-то стримерши будут вам показываться, для этого вы можете дополнять его тегами, словами, исходный код открытый, welcome! Как добавить, смотрите ниже) 
7. При первом запуске обновите страницу через `Ctrl + F5`).
Готово!


## ☕ Поддержать автора (Вознаграждения)
Если этот плагин сберег ваши нервы, очистил частично вашу ленту и сделал просмотр Twitch более комфортным, вы можете поддержать меня через:
usdt (aptos):

0xde94a5aad91e5dc09257c7c8d596dfc00eab094d5f03d920bd033f9816e78592


## 🧩 Как добавить свою стоп-фразу?
Если какая-то стримерша проскочила фильтр, откройте файл `background.js` через обычный Блокнот и просто допишите её никнейм или тег маленькими буквами в список `femaleKeywords` через запятую. После этого обновите расширение в браузере.

