# Osama & Namra — Wedding Invitation

Dawat-e-Nikah of Osama Akbani and Namra Akbani on December 25, 2026.

## Framework Analysis
The original site is built using **Vanilla HTML, CSS, and JavaScript**. It is not a bundled React, Next.js, Vue, or Vite application. It loads its configuration from a `config.js` file and sets up interactions via a single `app.js` file. All data bindings are done through `data-bind` attributes and ID selections in the HTML.

## How to Run Locally

You can serve this project using any local HTTP server. Because of JavaScript's strict MIME type and CORS policies (especially around module loading and canvas access if any cross-origin assets were used), it's highly recommended to serve this via a local server rather than just double-clicking `index.html`.

### Using Python 3
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Using Node.js (http-server)
```bash
npx http-server -p 8000
```
Then visit `http://localhost:8000` in your browser.

### Using PHP
```bash
php -S localhost:8000
```
Then visit `http://localhost:8000` in your browser.

## Integrity Checks Performed
- ✅ All image references (`.webp`, `.svg`) downloaded and paths verified.
- ✅ All CSS and JS files downloaded.
- ✅ Fonts downloaded locally from Google Fonts and imported properly without external requests.
- ✅ Media files (`.mp4`, `.mp3`) successfully retrieved.
- ✅ Verified there are no unnecessary external asset dependencies (except perhaps external map links or external JS if explicitly injected for third-party embeds).

The opening animation, video playback, and dynamic JS data bindings all function as they do in production.
