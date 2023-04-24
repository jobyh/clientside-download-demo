import classNames from 'classnames'
import { ChangeEventHandler, FocusEventHandler } from 'react'

interface EditFormProps {
  className: string
  markdown: string
  onChange: ChangeEventHandler
  onBlur: FocusEventHandler
}

export default function EditForm(props: EditFormProps) {
  const inputClasses = classNames(
    'px-4 py-3 rounded-lg',
    'focus:outline-none focus:ring-4',
    'focus:ring-focus-bg scale-100 focus:scale-110',
    'transition-transform motion-reduce:transition-none',
  )

  return (
    <form className={classNames('flex flex-col', props.className)}>
      <label htmlFor="content" className="sr-only">
        Content
      </label>
      <textarea
        id="content"
        placeholder="Content"
        className={inputClasses}
        rows={12}
        value={props.markdown}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></textarea>
    </form>
  )
}
