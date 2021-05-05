import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import { FiChevronRight } from 'react-icons/fi'
import { useEffect } from 'react'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'About', page: '/' },
  { label: 'Blog', page: '/blog' },
]

const Header = ({ titlePre = '', subTitle = '', coverUrl = undefined }) => {
  const router = useRouter()
  const ogImageUrl = coverUrl

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    console.log('scroll', window.scrollY)
    if (window.scrollY > 40) {
      document.querySelector(
        'header'
      ).className = `${styles.header} ${styles.headerScroll}`
    } else {
      document.querySelector('header').className = `${styles.header}`
    }
  }

  let crumbs = router.asPath.split('/')

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Peinan's Chronicle</title>

        <meta name="title" content="Peinan's Chronicle" />
        <meta
          name="description"
          content="Tales about Peinan's daily life, development, science, and miscellaneous stuffs."
        />
        <meta name="og:title" content="Peinan's Chronicle" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@so1owingpixy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      <div className={styles.headerContainer}>
        <div className={styles.headerBlock}>
          <div className={styles.logo}>
            <Link href={'/'}>
              <a>Peinan's Chronicle</a>
            </Link>
          </div>

          <div className={styles.breadcrumb}>
            <div className={styles.path}>
              {navItems.filter((n) => n.page === '/' + crumbs[1])[0].label}
            </div>
            {subTitle !== '' ? (
              <>
                <div className={styles.caret}>
                  <FiChevronRight size={16} strokeWidth={3} />
                </div>
                <div className={styles.path}>{subTitle}</div>
              </>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className={styles.headerBlock}>
          <ul>
            {navItems.map(({ label, page, link }) => (
              <li key={label}>
                <Link href={page}>
                  <a className={styles.menu}>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
