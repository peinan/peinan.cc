import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

import ExtLink from '../components/ext-link'
import { contacts, getCoverUrl } from '../lib/blog-helpers'

import contactStyles from '../styles/contact.module.css'
import { FiChevronRight } from 'react-icons/fi'

import * as profile from '../components/profile-data'
import React, { useRef } from 'react'
import useScrollSpy from 'react-use-scrollspy'

const LANG = 'en'

function use_profile_data(data: profile.Profile, lang = 'en') {
  return profile.isMultiLang(data) ? data[lang] : data
}

function build_interests(data) {
  return data.map((d) => (
    <div
      className={sharedStyles.postCard}
      style={{ minWidth: '320px', width: '320px' }}
    >
      <h3>{use_profile_data(d.title, LANG)}</h3>
      <p className={sharedStyles.desc}>{use_profile_data(d.body, LANG)}</p>
    </div>
  ))
}

function build_history_card(data, ga_category) {
  return data.map((d) => (
    <div
      className={sharedStyles.postCard}
      style={{ minWidth: '320px', width: '320px' }}
    >
      <h3>
        <ExtLink href={d.url} ga-category={ga_category}>
          {use_profile_data(d.title, LANG)}
        </ExtLink>
      </h3>
      <div className={sharedStyles.lead}>
        {use_profile_data(d.subtitle, LANG)}
      </div>
      <div className={sharedStyles.lead}>
        {d.period_from} — {use_profile_data(d.period_to, LANG)}
      </div>
      <p className={sharedStyles.desc}>{use_profile_data(d.body, LANG)}</p>
    </div>
  ))
}

function build_publications(data) {
  return data.map((d) => (
    <div className={sharedStyles.postListCard}>
      {d.link === null ? (
        <h3>{use_profile_data(d.title, LANG)}</h3>
      ) : (
        <h3>
          <ExtLink href={d.link} ga-category={'Publications'}>
            {use_profile_data(d.title, LANG)}
          </ExtLink>
        </h3>
      )}
      <div className={sharedStyles.author}>
        {use_profile_data(d.authors, LANG)}
      </div>
      <div className={sharedStyles.conference}>
        <i>{use_profile_data(d.conf, LANG)}</i>
      </div>
      <div className={sharedStyles.tag__outer}>
        {use_profile_data(d.tags, LANG).map((tag) => (
          <span className={sharedStyles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  ))
}

function build_related_materials(data) {
  return data.map((d) => (
    <div className={sharedStyles.postListCard}>
      {d.link === null ? (
        <h3>{use_profile_data(d.title, LANG)}</h3>
      ) : (
        <h3>
          <ExtLink href={d.link} ga-category={'R. Materials'}>
            {use_profile_data(d.title, LANG)}
          </ExtLink>
        </h3>
      )}
      <div className={sharedStyles.author}>
        {use_profile_data(d.desc, LANG)}
      </div>
      <div className={sharedStyles.conference}>
        <i>
          {use_profile_data(d.media, LANG)}
          {', '}
          {d.date}
        </i>
      </div>
    </div>
  ))
}

const Index = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  })

  const sectionRef2Title = (sectionRef) => {
    return {
      0: '',
      1: 'Summary',
      2: 'Experience',
      3: 'Education',
      4: 'Selected Publications',
      5: 'Selected Articles & Talks',
      6: 'Hobbies',
    }[sectionRef]
  }

  if (process.env.ENV_NAME !== 'production') {
    console.log('active section', activeSection)
  }

  return (
    <>
      <Header
        titlePre="About"
        subTitle={sectionRef2Title(activeSection)}
        coverUrl={`https://${
          process.env.ENV_NAME === 'production' ? 'www' : 'stg'
        }.peinan.cc${getCoverUrl()}`}
      />

      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar} ref={sectionRefs[0]}>
          <img
            className={contactStyles.icon}
            src="/myicon.jpeg"
            alt="peinan"
            height={60}
          />
        </div>

        <h1 style={{ marginTop: 0 }}>Peinan Zhang</h1>
        <div className={contactStyles.name}>
          Senior Research Scientist @{' '}
          <ExtLink href="https://cyberagent.ai/ailab/" ga-category={'Profile'}>
            AI Lab of CyberAgent, Inc.
          </ExtLink>
        </div>

        {/* Warning: Each child in a list should have a unique "key" prop. */}
        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink
                key={link}
                href={link}
                aria-label={alt}
                ga-category={'Profile'}
              >
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>

      <div className={sharedStyles.introOuterBlock}>
        <div className={sharedStyles.introLayout}>
          <div className={sharedStyles.introLayoutSection} ref={sectionRefs[1]}>
            <h2>
              <a id={'summary'}>Summary</a>
            </h2>
            <p className={sharedStyles.summary}>
              {use_profile_data(profile.summary, LANG)}
            </p>
          </div>

          <div className={sharedStyles.introLayoutSection} ref={sectionRefs[2]}>
            <h2>
              <a id={'experience'}>Experience</a>
            </h2>
            <div className={sharedStyles.postCard__outer}>
              {build_history_card(profile.experience, 'Experience')}
            </div>
          </div>

          <div className={sharedStyles.introLayoutSection} ref={sectionRefs[3]}>
            <h2>
              <a id={'education'}>Education</a>
            </h2>
            <div className={sharedStyles.postCard__outer}>
              {build_history_card(profile.education, 'Education')}
            </div>
          </div>

          <div className={sharedStyles.listLayoutSection} ref={sectionRefs[4]}>
            <h2>
              <a id={'publications'}>Selected Publications</a>
            </h2>
            <div className={sharedStyles.postListCard__outer}>
              {build_publications(profile.publications)}
            </div>
            <div className={sharedStyles.seeAll}>
              <ExtLink
                href="https://orcabrig.notion.site/publications"
                ga-category={'All Publications'}
              >
                <div className={sharedStyles.seeAll}>
                  SEE ALL PUBLICATIONS{' '}
                  <FiChevronRight size={18} strokeWidth={3} />
                </div>
              </ExtLink>
            </div>
          </div>

          <div className={sharedStyles.listLayoutSection} ref={sectionRefs[5]}>
            <h2>
              <a id={'related-materials'}>Selected Articles & Talks</a>
            </h2>
            <div className={sharedStyles.postListCard__outer}>
              {build_related_materials(profile.related_materials)}
            </div>
            <div className={sharedStyles.seeAll}>
              <ExtLink
                href="https://orcabrig.notion.site/articles-and-talks"
                ga-category={'All Articles & Talks'}
              >
                <div className={sharedStyles.seeAll}>
                  SEE ALL ARTICLES & TALKS{' '}
                  <FiChevronRight size={18} strokeWidth={3} />
                </div>
              </ExtLink>
            </div>
          </div>

          <div className={sharedStyles.introLayoutSection} ref={sectionRefs[6]}>
            <h2>
              <a id={'interests'}>Hobbies</a>
            </h2>
            <div className={sharedStyles.postCard__outer}>
              {build_interests(profile.interests)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
