import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'About', page: '/' },
  { label: 'Blog', page: '/blog' },
]

const Header = ({ titlePre = '', coverUrl = undefined }) => {
  const { pathname } = useRouter()
  const ogImageUrl = coverUrl

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

      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
