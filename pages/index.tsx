import * as React from 'react'
import {
  ChangeEventHandler,
  EventHandler,
  MouseEvent,
  KeyboardEvent,
  useRef,
} from 'react'
import DownloadButton from '@/components/DownloadButton'
import ContentInput from '@/components/ContentInput'
import FilenameInput from '@/components/FilenameInput'
import Warning from '@/components/Warning'

export default function Home() {
  const linkContainer = useRef<HTMLDivElement>(null)
  const filenames = ['kiss-from-a-prose', 'textual-healing', 'you-texty-thing']
  const [filename, setFilename] = React.useState(
    filenames[Math.floor(Math.random() * filenames.length)],
  )
  const [content, setContent] = React.useState('')
  const [generating, setGenerating] = React.useState(false)

  const handleFilename: ChangeEventHandler<HTMLInputElement> = evt => {
    evt.preventDefault()
    setFilename(evt.target.value)
  }

  const handleContent: ChangeEventHandler<HTMLTextAreaElement> = evt => {
    evt.preventDefault()
    setContent(evt.target.value)
  }

  const handleGenerate: EventHandler<
    MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  > = evt => {
    evt.preventDefault()
    if (linkContainer.current === null) return

    setGenerating(true)

    setTimeout(() => {
      const file = new File([content], 'text.txt', {
        type: 'text/plain',
      })
      const reader = new FileReader()

      reader.addEventListener('load', () => {
        const anchor = document.createElement('a')
        anchor.setAttribute('href', reader.result as string)
        anchor.setAttribute('download', `${filename}.txt`)
        linkContainer.current?.append(anchor)
        anchor.click()
        anchor.remove()
      })

      reader.readAsDataURL(file)
      setGenerating(false)
    }, 750)
  }

  return (
    <div className="h-screen min-h-screen flex flex-col items-center text-xl">
      <main className="flex-grow flex flex-col items-stretch gap-16 max-w-4xl">
        <h1 className="sr-only">In Browser Download Demo</h1>

        <Warning className="mt-10" />

        <form className="flex flex-col">
          <ContentInput markdown={content} onChange={handleContent} />
        </form>

        <div className="flex justify-end items-stretch gap-10">
          <FilenameInput
            className="flex-grow"
            filename={filename}
            onChange={handleFilename}
          />
          <DownloadButton
            disabled={content === ''}
            onClick={handleGenerate}
            generating={generating}
          />
        </div>
        <div ref={linkContainer}></div>
      </main>
    </div>
  )
}
