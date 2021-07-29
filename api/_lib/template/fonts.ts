const FONTS_ROOT = `https://altay.wtf/fonts`

export const FONT_FAMILY = `please-dont-download-these-fonts-buy-a-license-instead`

export const loadFont = (weightString: string, weightNumber: number) => `
  @font-face {
    font-family: '${FONT_FAMILY}';
    font-display: swap;
    src: url('${FONTS_ROOT}/${FONT_FAMILY}/${FONT_FAMILY}-${weightString}.woff2') format('woff2'),
        url('${FONTS_ROOT}/${FONT_FAMILY}/${FONT_FAMILY}-${weightString}.woff') format('woff');
    font-weight: ${weightNumber};
    font-style: normal;
  }

  @font-face {
    font-family: '${FONT_FAMILY}';
    font-display: swap;
    src: url('${FONTS_ROOT}/${FONT_FAMILY}/${FONT_FAMILY}-${weightString}-Italic.woff2') format('woff2'),
        url('${FONTS_ROOT}/${FONT_FAMILY}/${FONT_FAMILY}-${weightString}-Italic.woff') format('woff');
    font-weight: ${weightNumber};
    font-style: italic;
  }
`
