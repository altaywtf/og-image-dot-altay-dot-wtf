import type { VercelRequest } from '@vercel/node'
import qs from 'query-string'

export type Note = {
  type: 'note'
  title: string
  oneliner: string
}

export type Book = {
  type: 'book'
  title: string
  author: string
  coverImageURL: string
}

export type Page = {
  type: 'page'
  title: string
}

export type ParsedQuery = Note | Book | Page

export const parseRequest = (req: VercelRequest): ParsedQuery => {
  const { query } = qs.parseUrl(req.url)
  const { type } = query as unknown as ParsedQuery

  switch (type) {
    case 'note':
      return query as Note

    case 'book':
      return query as Book

    case 'page':
      return query as Page
  }
}
