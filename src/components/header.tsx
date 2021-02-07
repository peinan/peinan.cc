import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  // { label: 'Source Code', link: 'https://github.com/ijjk/notion-blog' },
]

const ogImageUrl =
  'https://raw.githubusercontent.com/peinan/notion-blog/develop/public/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Peinan's Chronicle</title>

        {/*<link rel="preconnect" href="https://fonts.gstatic.com"></link>*/}
        {/*<link*/}
        {/*  rel="stylesheet"*/}
        {/*  href="https://fonts.googleapis.com/css?family=Lobster"*/}
        {/*></link>*/}
        {/*<link*/}
        {/*  rel="stylesheet"*/}
        {/*  href="https://fonts.googleapis.com/css?family=Niconne"*/}
        {/*></link>*/}
        {/*<link*/}
        {/*  rel="stylesheet"*/}
        {/*  href="https://fonts.googleapis.com/css?family=Poppins:wght@300,500,700&display=swap"*/}
        {/*></link>*/}
        {/*<link*/}
        {/*  rel="stylesheet"*/}
        {/*  href="https://fonts.googleapis.com/css?family=Inter:wght@300,500,700&display=swap"*/}
        {/*></link>*/}
        {/*<link*/}
        {/*  rel="stylesheet"*/}
        {/*  href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:wght@300,500,700&display=swap"*/}
        {/*></link>*/}
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />

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
