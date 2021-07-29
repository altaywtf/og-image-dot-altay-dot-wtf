import { FONT_FAMILY, loadFont } from './fonts'

const colors = {
  background: 'rgba(17, 17, 17, 1)',
  text: '#FBFBFB',
  textSecondary: '#DEDFE5',
  textTertiary: '#98989D',
  border: '#565656',
}

const bodyBackgroundImageURL = 'https://altay.wtf/images/meta-bg.png'

export const css = `
  ${loadFont(`Bold`, 600)}

  body {
    font-family: ${FONT_FAMILY};
    font-size: 32px;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
    letter-spacing: 0.015em;
    word-spacing: 0.001em;
    background: ${colors.background};
    background-image: url("${bodyBackgroundImageURL}");
    color: ${colors.text};
    height: 100vh;
  }

  main {
    padding-top: 64px;
    padding-bottom: 64px;
    padding-left: 96px;
    padding-right: 96px;
    height: calc(100vh - 128px);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 160px;
    margin-bottom: 48px;
    line-height: 1;
  }

  h2 {
    font-size: 144px;
    margin-bottom: 36px;
    line-height: 1;
  }

  h3 {
    font-size: 96px;
    color: ${colors.textTertiary};
  }

  h4 {
    font-size: 80px;
    color: ${colors.textTertiary};
  }

  h5 {
    font-size: 72px;
    color: ${colors.textTertiary};
  }

  header {
    display: flex;
    align-items: center;
  }

  header img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 6px solid ${colors.border};
  }

  header span {
    font-weight: bold;
    font-size: 96px;
    margin-left: 48px;
  }

  .content {
    width: 100%;
    margin-bottom: 64px;
  }

  .book {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .book img {
    height: 640px;
    width: auto;
    border-radius: 8px;
    border: 4px solid ${colors.border};
  }
`
