import ExtLink from './ext-link'
import { contacts } from '../lib/blog-helpers'
import sharedStyles from '../styles/shared.module.css'

const Footer = () => (
  <>
    <footer>
      <div className={sharedStyles.postLine}></div>
      <h3>Please feel free to contact me!</h3>
      <div className={'links'}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={24} />
            </ExtLink>
          )
        })}
      </div>
      <p className={'copyright'}>
        Copyright &copy; 2020 - {new Date().getFullYear()} Peinan Zhang
      </p>
    </footer>
  </>
)

export default Footer
