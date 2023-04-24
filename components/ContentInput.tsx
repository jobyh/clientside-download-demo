import { ChangeEventHandler } from 'react'
import classNames from 'classnames'

interface ContentInputProps {
  className?: string
  markdown: string
  onChange: ChangeEventHandler
}

export default function ContentInput(props: ContentInputProps) {
  return (
    <>
      <label htmlFor="content" className="sr-only">
        File Content
      </label>
      <textarea
        id="content"
        placeholder="Text content"
        className={classNames(
          'text-2xl px-8 py-6 rounded-lg',
          'focus:outline-none focus:ring-[5px]',
          'focus:ring-focus-bg',
        )}
        rows={12}
        value={props.markdown}
        onChange={props.onChange}
      ></textarea>
    </>
  )
}
