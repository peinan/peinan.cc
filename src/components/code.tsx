import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

const Code = ({ children, language = 'javascript' }) => {
  return (
    <>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              children,
              Prism.languages[language.toLowerCase()] ||
                Prism.languages.javascript
            ),
          }}
        />
      </pre>

      <style jsx>{`
        pre {
          tab-size: 2;
        }

        code {
          overflow: auto;
          display: block;
          padding: 0.8rem;
          margin: 0.4rem 0;
          line-height: 1.5;
          background: var(--special-block-bg);
          font-size: var(--text-tiny);
          border-radius: var(--special-block-radius);
        }
      `}</style>
    </>
  )
}

export default Code
