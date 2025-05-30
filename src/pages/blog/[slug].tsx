import Link from 'next/link'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import Header from '../../components/header'
import components from '../../components/dynamic'
import ReactJSXParser from '@zeit/react-jsx-parser'
import blogStyles from '../../styles/blog.module.css'
import { textBlock } from '../../lib/notion/renderers'
import getPageData from '../../lib/notion/getPageData'
import React, { CSSProperties, useEffect } from 'react'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import {
  getBlogLink,
  getCoverUrl,
  getDateTimeStr,
} from '../../lib/blog-helpers'
import ExtLink from '../../components/ext-link'
import { FiEdit3, FiInfo, FiLink, FiRotateCw } from 'react-icons/fi'
import { ImQuotesLeft } from 'react-icons/im'

// Get the data for each blog post
export async function getStaticProps({ params: { slug } }) {
  // load the postsTable so that we can get the page's ID
  const postsTable = await getBlogIndex()
  const post = postsTable[slug]
  const preview = process.env.ENV_NAME !== 'production'

  // if we can't find the post or if it is unpublished and
  // viewed without preview mode then we just redirect to /blog
  if (!post || (post.Published !== 'Yes' && !preview)) {
    console.log(`Failed to find post for slug: ${slug}`)
    return {
      props: {
        redirect: '/blog',
        preview: false,
      },
      revalidate: 5,
    }
  }
  const postData = await getPageData(post.id)
  post.content = postData.blocks
  post.cover = postData.cover

  for (let i = 0; i < postData.blocks.length; i++) {
    const { value } = postData.blocks[i]
    const { type, properties } = value
    if (type == 'tweet') {
      const src = properties.source[0][0]
      // parse id from https://twitter.com/_ijjk/status/TWEET_ID format
      const tweetId = src.split('/')[5].split('?')[0]
      if (!tweetId) continue

      try {
        const res = await fetch(
          `https://api.twitter.com/1/statuses/oembed.json?id=${tweetId}`
        )
        const json = await res.json()
        properties.html = json.html
          .split('<script')[0]
          .replace('twitter-tweet', 'twitter-tweet tw-align-center')
        post.hasTweet = true
      } catch (_) {
        console.log(`Failed to get tweet embed for ${src}`)
      }
    }
  }

  const { users } = await getNotionUsers(post.Authors || [])
  post.Authors = Object.keys(users).map((id) => users[id].full_name)

  return {
    props: {
      post,
      preview: preview || false,
    },
    revalidate: 10,
  }
}

// Return our list of blog posts to prerender
export async function getStaticPaths() {
  const postsTable = await getBlogIndex()
  // we fallback for any unpublished posts to save build time
  // for actually published ones
  return {
    paths: Object.keys(postsTable)
      .filter((post) => postsTable[post].Published === 'Yes')
      .map((slug) => getBlogLink(slug)),
    fallback: true,
  }
}

const listTypes = new Set(['bulleted_list', 'numbered_list'])

const useBlogIcon = (notionIcon) => {
  let iconDict = {
    ℹ️: <FiInfo />,
  }
  return notionIcon in iconDict ? iconDict[notionIcon] : notionIcon
}

const RenderPost = ({ post, redirect, preview }) => {
  const router = useRouter()

  let listTagName: string | null = null
  let listLastId: string | null = null
  let listMap: {
    [id: string]: {
      key: string
      isNested?: boolean
      nested: string[]
      children: React.ReactFragment
    }
  } = {}

  useEffect(() => {
    const twitterSrc = 'https://platform.twitter.com/widgets.js'
    // make sure to initialize any new widgets loading on
    // client navigation
    if (post && post.hasTweet) {
      if ((window as any)?.twttr?.widgets) {
        ;(window as any).twttr.widgets.load()
      } else if (!document.querySelector(`script[src="${twitterSrc}"]`)) {
        const script = document.createElement('script')
        script.async = true
        script.src = twitterSrc
        document.querySelector('body').appendChild(script)
      }
    }
  }, [])
  useEffect(() => {
    if (redirect && !post) {
      router.replace(redirect)
    }
  }, [redirect, post])

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // if you don't have a post at this point, and are not
  // loading one from fallback then  redirect back to the index
  if (!post) {
    return (
      <div className={blogStyles.post}>
        <p>
          Woops! didn't find that post, redirecting you back to the blog index
        </p>
      </div>
    )
  }

  return (
    <>
      <Header
        titlePre={post.Page}
        subTitle={post.Page}
        desc={post.preview}
        coverUrl={`https://${
          process.env.ENV_NAME === 'production' ? 'www' : 'stg'
        }.peinan.cc${getCoverUrl(post)}`}
      />
      <div className={blogStyles.post}>
        <h1 className={`${blogStyles.metaTitle}`}>{post.Page || ''}</h1>

        <div className={blogStyles.metaDate_outer}>
          <div className={`${blogStyles.metaDate}`}>
            <div className={blogStyles.metaDataIcon}>
              <FiEdit3 size={14} strokeWidth={1} />
            </div>
            <div className={blogStyles.metaDateValue}>
              {getDateTimeStr(post.created_time)}
            </div>
          </div>
          <div className={`${blogStyles.metaDate}`}>
            <div className={blogStyles.metaDataIcon}>
              <FiRotateCw size={14} strokeWidth={1} />
            </div>
            <div className={blogStyles.metaDateValue}>
              {getDateTimeStr(post.last_edited_time)}
            </div>
          </div>
        </div>

        <div>
          {post.Tags.map((tag) => {
            return <span className={`${blogStyles.metaTag}`}>{tag}</span>
          })}
        </div>

        <hr />

        {(!post.content || post.content.length === 0) && (
          <p>This post has no content</p>
        )}

        {(post.content || []).map((block, blockIdx) => {
          const { value } = block
          const { type, properties, id, parent_id } = value
          const isLast = blockIdx === post.content.length - 1
          const isList = listTypes.has(type)
          let toRender = []

          if (isList) {
            listTagName = components[type === 'bulleted_list' ? 'ul' : 'ol']
            listLastId = `list${id}`

            listMap[id] = {
              key: id,
              nested: [],
              children: textBlock(properties.title, true, id),
            }

            if (listMap[parent_id]) {
              listMap[id].isNested = true
              listMap[parent_id].nested.push(id)
            }
          }

          if (listTagName && (isLast || !isList)) {
            toRender.push(
              <div className="listWrap">
                {React.createElement(
                  listTagName,
                  { key: listLastId! },
                  Object.keys(listMap).map((itemId) => {
                    if (listMap[itemId].isNested) return null

                    const createEl = (item) =>
                      React.createElement(
                        components.li || 'ul',
                        { key: item.key },
                        item.children,
                        item.nested.length > 0
                          ? React.createElement(
                              components.ul || 'ul',
                              { key: item + 'sub-list' },
                              item.nested.map((nestedId) =>
                                createEl(listMap[nestedId])
                              )
                            )
                          : null
                      )
                    return createEl(listMap[itemId])
                  })
                )}
              </div>
            )
            listMap = {}
            listLastId = null
            listTagName = null
          }

          const renderHeading = (Type: string | React.ComponentType) => {
            const headingId = properties.title
              .toString()
              .toLowerCase()
              .replace(/\s/g, '-')
              .replace(/[?!:]/g, '')

            toRender.push(
              <Type key={id}>
                {Type === 'h2' ? <div className={blogStyles.h2Bar} /> : <></>}
                {textBlock(properties.title, true, id)}
                <a
                  className={blogStyles.headingIcon}
                  href={`#${headingId}`}
                  id={headingId}
                  style={{ color: 'inherit' }}
                >
                  <div>
                    <FiLink size={14} strokeWidth={2} />
                  </div>
                </a>
              </Type>
            )
          }

          const renderBookmark = ({ link, title, description, format }) => {
            const { bookmark_icon: icon, bookmark_cover: cover } = format
            toRender.push(
              <div className={blogStyles.bookmark}>
                <div>
                  <div style={{ display: 'flex' }}>
                    <ExtLink
                      className={blogStyles.bookmarkContentsWrapper}
                      href={link[0][0]}
                      ga-category={'Post'}
                      ga-label={title[0][0]}
                    >
                      <div
                        role="button"
                        className={blogStyles.bookmarkContents}
                      >
                        <div className={blogStyles.bookmarkInfo}>
                          <div className={blogStyles.bookmarkTitle}>
                            {title}
                          </div>
                          <div className={blogStyles.bookmarkDescription}>
                            {description}
                          </div>
                          <div className={blogStyles.bookmarkLinkWrapper}>
                            <img
                              src={icon}
                              className={blogStyles.bookmarkLinkIcon}
                            />
                            <div className={blogStyles.bookmarkLink}>
                              {link}
                            </div>
                          </div>
                        </div>
                        <div className={blogStyles.bookmarkCoverWrapper1}>
                          <div className={blogStyles.bookmarkCoverWrapper2}>
                            <div className={blogStyles.bookmarkCoverWrapper3}>
                              <img
                                src={cover}
                                className={blogStyles.bookmarkCover}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </ExtLink>
                  </div>
                </div>
              </div>
            )
          }

          switch (type) {
            case 'page':
            case 'divider':
              break
            case 'text':
              if (properties) {
                toRender.push(textBlock(properties.title, false, id))
              }
              break
            case 'image':
            case 'video':
            case 'embed': {
              const { format = {} } = value
              const {
                block_width,
                block_height,
                display_source,
                block_aspect_ratio,
              } = format
              const baseBlockWidth = 768
              const roundFactor = Math.pow(10, 2)
              // calculate percentages
              const width = block_width
                ? `${
                    Math.round(
                      (block_width / baseBlockWidth) * 100 * roundFactor
                    ) / roundFactor
                  }%`
                : block_height || '100%'

              const isImage = type === 'image'
              const Comp = isImage ? 'img' : 'video'
              const useWrapper = block_aspect_ratio && !block_height
              const childStyle: CSSProperties = useWrapper
                ? {
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    position: 'absolute',
                    top: 0,
                  }
                : {
                    width,
                    border: 'none',
                    height: block_height,
                    display: 'block',
                    maxWidth: '100%',
                  }

              let child = null

              if (!isImage && !value.file_ids) {
                // external resource use iframe
                child = (
                  <iframe
                    style={childStyle}
                    src={display_source}
                    key={!useWrapper ? id : undefined}
                    className={!useWrapper ? 'asset-wrapper' : undefined}
                  />
                )
              } else {
                // notion resource
                child = (
                  <Comp
                    key={!useWrapper ? id : undefined}
                    src={`/api/asset?assetUrl=${encodeURIComponent(
                      display_source as any
                    )}&blockId=${id}`}
                    controls={!isImage}
                    alt={`An ${isImage ? 'image' : 'video'} from Notion`}
                    loop={!isImage}
                    muted={!isImage}
                    autoPlay={!isImage}
                    style={childStyle}
                  />
                )
              }

              toRender.push(
                useWrapper ? (
                  <div
                    style={{
                      paddingTop: `${Math.round(block_aspect_ratio * 100)}%`,
                      position: 'relative',
                    }}
                    className="asset-wrapper"
                    key={id}
                  >
                    {child}
                  </div>
                ) : (
                  child
                )
              )
              break
            }
            case 'header':
              renderHeading('h2')
              break
            case 'sub_header':
              renderHeading('h3')
              break
            case 'sub_sub_header':
              renderHeading('h4')
              break
            case 'bookmark':
              const { link, title, description } = properties
              const { format = {} } = value
              renderBookmark({ link, title, description, format })
              break
            case 'code': {
              if (properties.title) {
                const content = properties.title[0][0]
                const language = properties.language[0][0]

                if (language === 'LiveScript') {
                  // this requires the DOM for now
                  toRender.push(
                    <ReactJSXParser
                      key={id}
                      jsx={content}
                      components={components}
                      componentsOnly={false}
                      renderInpost={false}
                      allowUnknownElements={true}
                      blacklistedTags={['script', 'style']}
                    />
                  )
                } else {
                  toRender.push(
                    <components.Code key={id} language={language || ''}>
                      {content}
                    </components.Code>
                  )
                }
              }
              break
            }
            case 'quote': {
              toRender.push(
                <blockquote key={id}>
                  <div className={blogStyles.specialBlockIcon}>
                    <ImQuotesLeft size={18} />
                  </div>
                  <div className="text">
                    {textBlock(properties.title, true, id)}
                  </div>
                </blockquote>
              )
              break
            }
            case 'callout': {
              toRender.push(
                <div className="callout" key={id}>
                  {value.format?.page_icon && (
                    <div className={blogStyles.specialBlockIcon}>
                      {useBlogIcon(value.format?.page_icon)}
                    </div>
                  )}
                  <div className="text">
                    {textBlock(properties.title, true, id)}
                  </div>
                </div>
              )
              break
            }
            case 'tweet': {
              if (properties.html) {
                toRender.push(
                  <div
                    className={'tweet'}
                    dangerouslySetInnerHTML={{ __html: properties.html }}
                    key={id}
                  />
                )
              }
              break
            }
            case 'equation': {
              if (properties && properties.title) {
                const content = properties.title[0][0]
                toRender.push(
                  <components.Equation key={id} displayMode={true}>
                    {content}
                  </components.Equation>
                )
              }
              break
            }
            default:
              if (
                process.env.ENV_NAME !== 'production' &&
                !listTypes.has(type)
              ) {
                console.log('unknown type', type)
              }
              break
          }
          return toRender
        })}
      </div>
    </>
  )
}

export default RenderPost
