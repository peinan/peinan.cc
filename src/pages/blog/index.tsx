import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateTimeStr,
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

function getRandomImageUrl(imgSizeIndex = undefined): string {
  let imgSizes = ['1600x900', '1200x600', '600x800', '1200x900']
  let imgSize = imgSizeIndex
    ? imgSizes[imgSizeIndex]
    : imgSizes[Math.floor(Math.random() * imgSizes.length)]
  let imgUrl = `https://source.unsplash.com/random/${imgSize}`

  return imgUrl
}

function getPostCards(posts) {
  const numCards = 10
  var postCards: any[] = []

  for (var i = 0; i < numCards; i++) {
    let imgUrl = getRandomImageUrl()
    let imgSizeStr = imgUrl.split('/')[4]
    let post = i < posts.length ? posts[i] : undefined

    let TitleBlock = post ? (
      <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
        <a className={`${blogStyles.titleAnchor} font-semibold`}>{post.Page}</a>
      </Link>
    ) : (
      <Link href="/blog/foo" as="#">
        <a
          className={`${blogStyles.titleAnchor} font-semibold`}
        >{`The Coldest Sunset No. ${i}`}</a>
      </Link>
    )
    let previewStr = post
      ? `${post.preview}`
      : `Lorem ipsum dolor sit amet, consectetur ` +
        `adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis ` +
        `eaque, exercitationem praesentium nihil nihil nihil nihil nihil ` +
        `nihil nihil nihil.`
    let created_time = post
      ? getDateTimeStr(post.created_time)
      : '2021-01-01 00:00'
    let last_edited_time = post
      ? getDateTimeStr(post.last_edited_time)
      : '2021-01-01 10:33'
    let tags = post
      ? post.Tags
      : ['photography', 'travel', 'winter', 'camera', 'fun']

    postCards.push(
      <div className="max-w rounded-xl overflow-hidden shadow-lg bg-white mb-4">
        <img className="w-full" src={imgUrl} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <h3 className="text-2xl">{TitleBlock}</h3>
          <div className="mb-3">
            <span className="created-time text-gray-400 text-sm font-light">
              <i className="lar la-clock"></i> {created_time}
            </span>
            <span className="updated-time text-gray-400 text-sm font-light px-2">
              <i className="las la-sync"></i> {last_edited_time}
            </span>
          </div>
          <p className="text-gray-700 text-basesm font-light">
            {imgSizeStr} {previewStr}
          </p>
        </div>
        <div className="px-6 py-4">
          {tags.map(tag => {
            return (
              <span className="tag-line inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm font-medium text-gray-700">
                #{tag}
              </span>
            )
          })}
        </div>
      </div>
    )
  }

  return postCards
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

      <div className="container mx-auto">
        <div className={blogStyles.masonryGrids}>{getPostCards(posts)}</div>
      </div>
    </>
  )
}
