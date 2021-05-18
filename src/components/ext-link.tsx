import * as gtag from '../lib/gtag'

const ExtLink = (props) => {
  const handleClick = (e) => {
    let gaCategory: string = props['ga-category']
    let gaLabel: string =
      props['ga-label'] || props['aria-label'] || e.target.innerText
    let url: string = props.href

    if (process.env.ENV_NAME !== 'production') {
      console.log({
        category: gaCategory,
        label: gaLabel,
        url: url,
      })
    }

    gtag.event({
      action: 'extlink',
      category: gaCategory,
      label: gaLabel,
    })
  }

  return (
    <a
      {...props}
      rel="noopener"
      target={props.target || '_blank'}
      onClick={handleClick}
    />
  )
}

export default ExtLink
