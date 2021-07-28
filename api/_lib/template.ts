import { ParsedQuery } from "./types";

const FONTS_ROOT = `https://altay.wtf/fonts`;
const TYPEFACE = `please-dont-download-these-fonts-buy-a-license-instead`;
const FOLDER = `${TYPEFACE}/${TYPEFACE}`;

const loadFont = (family: string, fileName: string, weight: number) => `
  @font-face {
    font-family: '${family}';
    font-display: swap;
    src: url('${FONTS_ROOT}/${fileName}.woff2') format('woff2'),
        url('${FONTS_ROOT}/${fileName}.woff') format('woff');
    font-weight: ${weight};
    font-style: normal;
  }

  @font-face {
    font-family: '${family}';
    font-display: swap;
    src: url('${FONTS_ROOT}/${fileName}-Italic.woff2') format('woff2'),
        url('${FONTS_ROOT}/${fileName}-Italic.woff') format('woff');
    font-weight: ${weight};
    font-style: italic;
  }
`;

function getCss() {
  return `
    ${loadFont(TYPEFACE, `${FOLDER}-Regular`, 400)}
    ${loadFont(TYPEFACE, `${FOLDER}-Bold`, 600)}

    body {
      font-family: ${TYPEFACE};
      font-size: 32px;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: none;
      letter-spacing: 0.015em;
      word-spacing: 0.001em;
      background: rgba(17, 17, 17, 1);
      color: #FBFBFB;
      height: 100vh;
    }

    main {
      padding: 64px;
      height: calc(100vh - 128px);
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
    }

    .heading {
      display: flex;
      align-items: center;
    }

    .heading img {
      width: 240px;
      height: 240px;
      border-radius: 50%;
    }

    .heading span {
      font-weight: bold;
      font-size: 112px;
      margin-left: 48px;
    }

    .content {
      margin-bottom: 48px;
    }

    h1, h2 {
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 160px;
    }

    h2 {
      font-size: 64px;
      line-height: 1.4;
      color: #98989D;
    }
    `;
}

export function getHtml(query: ParsedQuery) {
  const { type } = query;
  console.log(type);

  const renderNote = (title: string, oneliner: string) => `
    <div class="content note">
      <h1>${title}</h1>
      <h2>${oneliner}</h2>
    </div>
  `;

  return `<!DOCTYPE html>
    <html>
        <meta charset="utf-8">
        <title>Generated Image</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            ${getCss()}
        </style>
        <body>
            <main>
              <div class="heading">
                <img src="https://altay.wtf/images/avatar.png" />
                <span>altay.wtf</span>
              </div>

              ${renderNote(
                "How do I read a book",
                "It's more pleasant than playing 300 games of League of Legends during the lockdown."
              )}
            </main>
        </body>
    </html>`;
}
