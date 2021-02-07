import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
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

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="/myicon.jpeg" alt="peinan" height={60} />
      </div>

      <h1 style={{ marginTop: 0 }}>Peinan Zhang</h1>
      <div className={contactStyles.name}>
        NLP Research Scientist @{' '}
        <ExtLink
          href="https://cyberagent.ai/ailab/"
          style={{
            color: 'inherit',
            'text-decoration': 'underline',
            'text-underline-offset': '0.1rem',
            'text-decoration-style': 'dashed',
            'text-decoration-thickness': '1px',
          }}
        >
          AI Lab of CyberAgent, Inc.
        </ExtLink>
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
