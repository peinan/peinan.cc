import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    unstable_revalidate: 10,
  }
}

let tmpImgSizes = ['1600x900', '1200x600', '600x800', '1200x900']
var tmpCards = []
for (var i = 0; i < 10; i++) {
  let imgSize = tmpImgSizes[Math.floor(Math.random() * tmpImgSizes.length)]
  let imgUrl = `https://source.unsplash.com/random/${imgSize}`
  tmpCards.push(
    <div className="max-w rounded-xl overflow-hidden shadow-lg bg-white mb-4">
      <img className="w-full" src={imgUrl} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <h3 className="text-2xl">
          <a className="titleAnchor">The Coldest Sunset</a>
        </h3>
        <div className="mb-3">
          <span className="created-time text-gray-400 text-sm">
            <i className="lar la-clock"></i> 2020-12-28 16:58
          </span>
          <span className="updated-time text-gray-400 text-sm px-2">
            <i className="las la-sync"></i> 2020-12-28 18:00
          </span>
        </div>
        <p className="text-gray-700 text-base">
          {imgSize} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil nihil nihil nihil nihil nihil nihil nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="tag-line inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm text-gray-700">
          #photography
        </span>
        <span className="tag-line inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm text-gray-700">
          #travel
        </span>
        <span className="tag-line inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm text-gray-700">
          #winter
        </span>
        <span className="tag-line inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm text-gray-700">
          #winter
        </span>
        <span className="tag-line inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm text-gray-700">
          #winter
        </span>
        <span className="tag-line inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm text-gray-700">
          #winter
        </span>
        <span className="tag-line inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm text-gray-700">
          #winter
        </span>
      </div>
    </div>
  )
}

export default ({ posts = [], preview }) => {
  return (
    <>
      <Header titlePre="Blog" />
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>There are no posts yet</p>
        )}
        {posts.map(post => {
          return (
            <div className={blogStyles.postPreview} key={post.Slug}>
              <h3>
                <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                  <div className={blogStyles.titleContainer}>
                    {!post.Published && (
                      <span className={blogStyles.draftBadge}>Draft</span>
                    )}
                    <a className={blogStyles.titleAnchor}>{post.Page}</a>
                  </div>
                </Link>
              </h3>
              {post.Date && (
                <div className="posted">Posted: {getDateStr(post.Date)}</div>
              )}
              <p>
                {(!post.preview || post.preview.length === 0) &&
                  'No preview available'}
                {(post.preview || []).map((block, idx) =>
                  textBlock(block, true, `${post.Slug}${idx}`)
                )}
              </p>
            </div>
          )
        })}
      </div>

      <div className="container mx-auto">
        <div className={blogStyles.masonryWithColumns}>{tmpCards}</div>
      </div>
    </>
  )
}
