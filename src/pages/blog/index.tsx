import Link from 'next/link'
import React from 'react'
import Header from '../../components/header'

import { FiEdit3, FiRotateCw } from 'react-icons/fi'
import { BsNewspaper } from 'react-icons/bs'

import blogStyles from '../../styles/blog.module.css'

import {
  getBlogLink,
  getCoverUrl,
  getDateTimeStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

import { Masonry } from 'masonic'
import sharedStyles from '../../styles/shared.module.css'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
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

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
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

function getDummyCardItems(numCards = 10): object {
  let postCardItems: object[] = []
  for (let i = 0; i < numCards; i++) {
    const imgUrl = getRandomImageUrl()
    postCardItems.push({
      imgUrl: imgUrl,
      imgSizeStr: imgUrl.split('/')[4],
      title: `The Coldest Sunset No. ${i}`,
      linkHref: '/blog/#',
      linkAs: '/#',
      previewText:
        `Lorem ipsum dolor sit amet, consectetur ` +
        `adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis ` +
        `eaque, exercitationem praesentium nihil nihil nihil nihil nihil ` +
        `nihil nihil nihil.`,
      created_time: '2021-01-01 00:00',
      last_edited_time: '2021-01-01 10:33',
      tags: ['photography', 'travel', 'winter', 'camera', 'fun'],
    })
  }
  return postCardItems
}

function getPostCardItems(posts) {
  const numCardsPerLoad = 10
  let postCardItems: any[] = posts.map((post) => ({
    imgUrl: getCoverUrl(post),
    imgSizeStr: '',
    title: post.Page,
    linkHref: '/blog/[slug',
    linkAs: getBlogLink(post.Slug),
    previewText: post.preview,
    created_time: getDateTimeStr(post.created_time),
    last_edited_time: getDateTimeStr(post.last_edited_time),
    tags: post.Tags,
  }))

  if (
    numCardsPerLoad > postCardItems.length &&
    process.env.NODE_ENV !== 'production'
  ) {
    postCardItems = postCardItems.concat(
      getDummyCardItems(numCardsPerLoad - postCardItems.length)
    )
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
  <div className={`${blogStyles.postCard}`}>
    <Link href={linkHref} as={linkAs}>
      <a>
        <img className={`${blogStyles.postCardImg}`} src={imgUrl} alt={title} />
      </a>
    </Link>
    <div className={`${blogStyles.postCard_inner}`}>
      <h3>
        <Link href={linkHref} as={linkAs}>
          <a className={`${blogStyles.metaTitle}`}>{title}</a>
        </Link>
      </h3>
      <div className={blogStyles.metaDate_outer}>
        <div className={`${blogStyles.metaDate}`}>
          <div className={blogStyles.metaDataIcon}>
            <FiEdit3 size={13.5} strokeWidth={1} />
          </div>
          <div className={blogStyles.metaDateValue}>{created_time}</div>
        </div>
        <div className={`${blogStyles.metaDate}`}>
          <div className={blogStyles.metaDataIcon}>
            <FiRotateCw size={13.5} strokeWidth={1} />
          </div>
          <div className={blogStyles.metaDateValue}>{last_edited_time}</div>
        </div>
      </div>
      <p className={`${blogStyles.plainText}`}>
        {imgSizeStr} {previewText}
      </p>
    </div>
    <div className="px-6 pb-3">
      {tags.map((tag) => {
        return <span className={`${blogStyles.metaTag}`}>{tag}</span>
      })}
    </div>
  </div>
)

const Index = ({ posts = [], preview }) => {
  const [postCardItems] = React.useState(() => getPostCardItems(posts))

  return (
    <>
      <Header titlePre="Blog" coverUrl={getCoverUrl()} />
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

      <div className={sharedStyles.layout}>
        <h1>Peinan's Chronicle</h1>
        <h2>
          Tales about my daily life, development, science, and miscellaneous
          stuffs.
        </h2>
      </div>

      <div className={blogStyles.container}>
        <div className={blogStyles.inner}>
          {postCardItems.length > 1 ? (
            <Masonry
              items={postCardItems}
              columnGutter={24}
              columnWidth={320}
              overscanBy={5}
              render={getPostCards}
            />
          ) : (
            <div className={blogStyles.noPosts}>
              <div className={blogStyles.emptyIcon}>
                <BsNewspaper size={64} strokeWidth={0.1} />
              </div>
              <p>No Posts Yet</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Index
