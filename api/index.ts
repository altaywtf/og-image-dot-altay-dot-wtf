import { VercelRequest, VercelResponse } from '@vercel/node'
import { parseRequest } from './_lib/parser'
import { getScreenshot } from './_lib/chromium'
import { renderHTML } from './_lib/template'

const isDev = !process.env.AWS_REGION
const isHtmlDebug = false

const handler = async (req: VercelRequest, res: VercelResponse) => {
  try {
    const html = renderHTML(parseRequest(req))

    if (isHtmlDebug) {
      res.setHeader('Content-Type', 'text/html')
      res.end(html)
      return
    }

    const file = await getScreenshot(html, isDev)

    res.statusCode = 200
    res.setHeader('Content-Type', `image/png`)
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`,
    )
    res.end(file)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1>')
    console.error(e)
  }
}

export default handler
