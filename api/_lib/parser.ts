import type { VercelRequest } from '@vercel/node'
import qs from 'query-string'

export type Post = {
  type: 'post'
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

export type ParsedQuery = Post | Book | Page

export const parseRequest = (req: VercelRequest): ParsedQuery => {
  const { query } = qs.parseUrl(req.url)
  const { type } = query as unknown as ParsedQuery

  switch (type) {
    case 'post':
      return query as Post

    case 'book':
      return query as Book

    case 'page':
      return query as Page
  }
}
