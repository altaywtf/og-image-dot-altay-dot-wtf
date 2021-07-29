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
    word-break: break-word;
    color: ${colors.text};

    background-color: ${colors.background};
    background-image: url("${bodyBackgroundImageURL}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

  main {
    padding-top: 72px;
    padding-bottom: 72px;
    padding-left: 96px;
    padding-right: 96px;
    height: calc(100vh - 144px);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
  }

  h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 200px;
  }

  h2 {
    font-size: 144px;
    line-height: 1.1;
  }

  h3 {
    font-size: 112px;
    color: ${colors.textTertiary};
  }

  h4 {
    font-size: 96px;
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
    border: 8px solid ${colors.border};
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
    height: 720px;
    width: auto;
    border-radius: 8px;
    border: 8px solid ${colors.border};
  }
`
