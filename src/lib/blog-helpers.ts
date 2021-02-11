export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`
}

export const getDateTimeStr = unixtime => {
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

export const normalizeSlug = slug => {
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
    'https://raw.githubusercontent.com/peinan/notion-blog/develop/public/og-image.png'
  return post.cover
    ? `/api/asset?assetUrl=${encodeURIComponent(
        post.cover.url as any
      )}&blockId=${post.cover.blockId}`
    : fallbackUrl
}
