import { renderToString, ParseError } from 'katex'

function render(expression: string, displayMode: boolean): string {
  let result: string
  try {
    result = renderToString(expression, { displayMode: displayMode })
  } catch (e) {
    if (e instanceof ParseError) {
      result = e.message
    }
    if (process.env.ENV_NAME !== 'production') {
      console.error(e)
    }
  }
  return result
}

const Equation = ({ children, displayMode = true }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: render(children, displayMode),
      }}
    />
  )
}

export default Equation
