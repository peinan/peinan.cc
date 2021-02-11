import Link from 'next/link'
import React from 'react'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'

import {
  getBlogLink,
  getDateTimeStr,
  postIsPublished,
  getCoverUrl,
} from '../../lib/blog-helpers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

import { Masonry } from 'masonic'

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

function getPostCardItems(posts) {
  const numCards = 10
  var postCardItems: any[] = []

  for (var i = 0; i < numCards; i++) {
    let post = i < posts.length ? posts[i] : undefined

    let imgUrl = post ? getCoverUrl(post) : getRandomImageUrl()
    let imgSizeStr = post ? '' : imgUrl.split('/')[4]
    let title = post ? post.Page : `The Coldest Sunset No. ${i}`
    let linkHref = post ? '/blog/[slug]' : '/blog/foo'
    let linkAs = post ? getBlogLink(post.Slug) : '/#'
    let previewText = post
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

    postCardItems.push({
      imgUrl: imgUrl,
      imgSizeStr: imgSizeStr,
      title: title,
      linkHref: linkHref,
      linkAs: linkAs,
      previewText: previewText,
      created_time: created_time,
      last_edited_time: last_edited_time,
      tags: tags,
    })
  }

  return postCardItems
}

const getPostCards = ({
  data: {
    imgUrl: imgUrl,
    imgSizeStr: imgSizeStr,
    title: title,
    linkHref: linkHref,
    linkAs: linkAs,
    previewText: previewText,
    created_time: created_time,
    last_edited_time: last_edited_time,
    tags: tags,
  },
}) => (
  <div
    className={`${blogStyles.postCard} max-w rounded-xl overflow-hidden bg-white`}
  >
    <Link href={linkHref} as={linkAs}>
      <a>
        <img
          className={`${blogStyles.postCardImg} w-full`}
          src={imgUrl}
          alt={title}
        />
      </a>
    </Link>
    <div className="px-6 py-4">
      <h3 className="text-2xl">
        <Link href={linkHref} as={linkAs}>
          <a className={`${blogStyles.metaTitle}`}>{title}</a>
        </Link>
      </h3>
      <div className="mb-3">
        <span className={`${blogStyles.metaDate} text-sm`}>
          <i className="lar la-clock"></i> {created_time}
        </span>
        <span className={`${blogStyles.metaDate} text-sm px-2`}>
          <i className="las la-sync"></i> {last_edited_time}
        </span>
      </div>
      <p className={`${blogStyles.plainText} text-basesm`}>
        {imgSizeStr} {previewText}
      </p>
    </div>
    <div className="px-6 py-3">
      {tags.map(tag => {
        return (
          <span
            className={`${blogStyles.metaTag} inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm`}
          >
            #{tag}
          </span>
        )
      })}
    </div>
  </div>
)

export default ({ posts = [], preview }) => {
  const [postCardItems] = React.useState(() => getPostCardItems(posts))

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
        <Masonry
          items={postCardItems}
          columnGutter={16}
          columnWidth={380}
          overscanBy={5}
          render={getPostCards}
        />
      </div>
    </>
  )
}
