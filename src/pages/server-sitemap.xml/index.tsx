import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import { getDateTimeStr, postIsPublished } from '../../lib/blog-helpers'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  // add published posts to sitemap
  const postsTable = await getBlogIndex()
  const activePosts = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      if (!postIsPublished(post)) {
        return null
      }
      return {
        slug: post.Slug,
        lastmod: getDateTimeStr(post.lastModified).split(' ')[0],
      }
    })
    .filter(Boolean)

  const fields = activePosts.map(({ slug, lastmod }) => ({
    loc: `https://www.peinan.cc/blog/${slug}`,
    lastmod: lastmod,
    changefreq: 'daily',
  }))

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}
