import classNames from 'classnames'
import { marked } from 'marked'

interface PreviewProps {
  markdown: string
  className?: string
}

export default function Preview(props: PreviewProps) {
  return (
    <section
      className={classNames(
        'markdown bg-white px-6 py-8 space-y-1 text-sm',
        props.className,
      )}
      dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}
    ></section>
  )
}
