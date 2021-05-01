import Twitter from '../components/svgs/twitter'
import GitHub from '../components/svgs/github'
import LinkedIn from '../components/svgs/linkedin'
import Envelope from '../components/svgs/envelope'

export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`
}

export const getDateTimeStr = (unixtime) => {
  let dt = new Date(unixtime)
  let YYYY = dt.getFullYear()
  let MM = String(dt.getMonth() + 1).padStart(2, '0')
  let DD = String(dt.getDate()).padStart(2, '0')
  let HH = String(dt.getHours()).padEnd(2, '0')
  let mm = String(dt.getMinutes()).padStart(2, '0')
  return `${YYYY}-${MM}-${DD} ${HH}:${mm}`
}

export const postIsPublished = (post: any) => {
  return post.Published === 'Yes'
}

export const normalizeSlug = (slug) => {
  if (typeof slug !== 'string') return slug

  let startingSlash = slug.startsWith('/')
  let endingSlash = slug.endsWith('/')

  if (startingSlash) {
    slug = slug.substr(1)
  }
  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1)
  }
  return startingSlash || endingSlash ? normalizeSlug(slug) : slug
}

export const getTagLink = (tag: string) => {
  return `/blog/tag/${tag}`
}

export const getCoverUrl = (post: any) => {
  const fallbackUrl =
    'https://raw.githubusercontent.com/peinan/peinan.cc/develop/public/og-image.png'
  return post.cover
    ? `/api/asset?assetUrl=${encodeURIComponent(
        post.cover.url as any
      )}&blockId=${post.cover.blockId}`
    : fallbackUrl
}

export const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/so1owingpixy',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/peinan',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/peinan-zhang-b5991994/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:zhang_peinan@cyberagent.co.jp',
  },
]
