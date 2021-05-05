import navItems from './nav-items'
import styles from '../styles/header.module.css'
import Link from 'next/link'

const HeaderDropdown = (setOpen) => {
  return (
    <div className={styles.dropdownBlock}>
      <ul className={`${styles.dropdownLinks} ${styles.headerScroll}`}>
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
  )
}

export default HeaderDropdown
