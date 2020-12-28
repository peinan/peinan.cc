import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>Peinan's Chronicle</h1>
      <h2>
        Tales about my daily life, development, science, and miscellaneous
        stuffs.
      </h2>
    </div>
  </>
)
