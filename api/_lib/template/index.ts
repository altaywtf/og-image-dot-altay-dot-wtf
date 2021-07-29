import type { ParsedQuery, Note, Book, Page } from '../parser'
import { css } from './css'

const renderNote = (note: Note) => `
  <div class="note">
    <h1>${note.title}</h1>
    <div style="margin-top: 60px;"></div>
    <h4>${note.oneliner}</h4>
  </div>
`

const renderBook = (book: Book) => `
  <div class="book">
    <div>
      <h2>${book.title}</h2>
      <div style="margin-top: 60px;"></div>
      <h3>by ${book.author}</h3>
    </div>

    <img src="${book.coverImageURL}" />
  </div>
`

const renderPage = (page: Page) => `
  <div class="page">
    <h1>${page.title}</h1>
  </div>
`

const renderContent = (query: ParsedQuery) => {
  switch (query.type) {
    case 'note':
      return renderNote(query)

    case 'book':
      return renderBook(query)

    case 'page':
      return renderPage(query)
  }
}

export const renderHTML = (query: ParsedQuery) => `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>og-image-dot-altay-dot-wtf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          ${css}
        </style>
      </head>

      <body>
        <main>
          <header>
            <img src="https://altay.wtf/images/avatar.png" />
            <span>altay.wtf</span>
          </header>

          <section class="content">
            ${renderContent(query)}
          </section>
        </main>
      </body>
    </html>
  `
