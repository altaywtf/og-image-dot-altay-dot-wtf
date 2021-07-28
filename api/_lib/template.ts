import marked from "marked";
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
        background: #101010;
        color: white;
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    `;
}

export function getHtml(query: ParsedQuery) {
  const { type } = query;

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
                <div class="heading">${marked(type)}</div>
            </main>
        </body>
    </html>`;
}
