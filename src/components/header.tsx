import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import { FiChevronRight, FiMenu, FiX } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import navItems from './nav-items'

const minimumBP = 500

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

const Header = ({
  titlePre = '',
  subTitle = '',
  desc = '',
  coverUrl = undefined,
}) => {
  const router = useRouter()
  const ogImageUrl = coverUrl
  const windowSize = useWindowSize()
  const [open, setOpen] = useState(false)

  if (process.env.ENV_NAME !== 'production') {
    console.log(windowSize)
    console.log('open', open)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (process.env.ENV_NAME !== 'production') {
      console.log('scroll', window.scrollY)
    }

    if (window.scrollY > 40) {
      document.querySelector(
        'header'
      ).className = `${styles.header} ${styles.headerScroll}`
    } else {
      document.querySelector('header').className = `${styles.header}`
    }
  }

  let crumbs = router.asPath.split('/')
  const title = `${titlePre ? `${titlePre} | ` : ''}Peinan's Chronicle`
  console.log('env: ' + process.env.ENV_NAME)

  return (
    <>
      <header className={styles.header}>
        <Head>
          <title>{title}</title>

          <meta name="title" content={title} />
          <meta
            name="description"
            content={
              desc
                ? desc
                : "Tales about Peinan's daily life, development, science, and miscellaneous stuffs."
            }
          />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={ogImageUrl} />
          <meta name="twitter:site" content="@so1owingpixy" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={ogImageUrl} />
        </Head>

        <div className={styles.headerContainer}>
          {/* Left block */}
          <div className={styles.headerBlock}>
            {/* Logo */}
            <div className={styles.logo}>
              <Link href={'/'}>
                <a>Peinan's Chronicle</a>
              </Link>
            </div>

            {
              /* Breadcrumb */
              windowSize.width > 600 ? (
                <div className={styles.breadcrumb}>
                  <div className={styles.title}>
                    <Link
                      href={
                        navItems.filter((n) => n.page === '/' + crumbs[1])[0]
                          .page
                      }
                    >
                      {
                        navItems.filter((n) => n.page === '/' + crumbs[1])[0]
                          .label
                      }
                    </Link>
                  </div>
                  {subTitle !== '' && windowSize.width > 764 ? (
                    <>
                      <div className={styles.caret}>
                        <FiChevronRight size={16} strokeWidth={3} />
                      </div>
                      <div className={styles.subTitle}>{subTitle}</div>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                <></>
              )
            }
          </div>

          {/* Right Block */}
          <div className={styles.headerBlock}>
            {/* Menu Icon */}
            <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
              {open ? <FiX /> : <FiMenu />}
            </div>

            {/* Menu Links */}
            {windowSize.width > minimumBP && (
              <ul className={styles.navLinks}>
                {navItems.map(({ label, page, link }) => (
                  <li key={label} className={styles.menuList}>
                    <Link href={page}>
                      <a className={styles.navLink}>{label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </header>

      {/* Dropdown Menu */}
      <div
        className={
          windowSize.width < minimumBP && open
            ? `${styles.headerDropdown} ${styles.headerScroll} ${styles.visible}`
            : styles.headerDropdown
        }
      >
        <ul className={styles.dropdownLinks}>
          {navItems.map(({ label, page, link }) => (
            <li key={label} className={styles.dropdownLink}>
              <Link href={page}>
                <a className={styles.navLink} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Header
