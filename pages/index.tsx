import * as React from 'react'
import EditForm from '@/components/EditForm'
import Preview from '@/components/Preview'
import { ChangeEventHandler, FocusEventHandler, MouseEventHandler } from 'react'
import classNames from 'classnames'

export default function Home() {
  const [markdown, setMarkdown] = React.useState('')
  const [dataUrl, setDataUrl] = React.useState('#')

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = evt => {
    evt.preventDefault()
    setMarkdown(evt.target.value)
  }

  const handleBlur: FocusEventHandler = evt => {
    const file = new File([markdown], 'markdown.md', {
      type: 'text/plain',
    })

    const reader = new FileReader()
    reader.addEventListener('load', () => setDataUrl(reader.result as string))
    reader.readAsDataURL(file)
  }

  return (
    <main className="h-screen grid grid-cols-2 gap-16 min-h-screen flex-col items-center p-24 text-xl">
      <EditForm
        className="h-full"
        markdown={markdown}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Preview markdown={markdown} />

      <a
        href={dataUrl}
        download="markdown.md"
        className={classNames(
          'text-center',
          'inline-block font-bold bg-white',
          'rounded-lg px-6 py-6 text-2xl',
          'focus:bg-black focus:text-white',
          'focus:outline-none active:scale-95',
        )}
      >
        Download
      </a>
    </main>
  )
}
