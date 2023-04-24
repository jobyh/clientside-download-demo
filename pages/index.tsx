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
import SourceLink from '@/components/SourceLink'

export default function Home() {
  const linkContainer = useRef<HTMLDivElement>(null)
  const [filename, setFilename] = React.useState('textual-healing')
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
    }, 500)
  }

  return (
    <div className="bg-dots w-screen min-h-screen">
      <div className="flex flex-col items-stretch text-lg lg:text-xl max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <main className="order-1 flex-grow flex flex-col gap-8 lg:gap-12">
          <h1 className="sr-only">In Browser Download Demo</h1>
          <Warning />

          <form className="flex flex-col">
            <ContentInput markdown={content} onChange={handleContent} />
          </form>

          <div className="flex flex-col lg:flex-row justify-end items-stretch gap-6 lg:gap-10">
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

        <footer className="my-6 flex justify-end lg:justify-between items-center">
          <p className="text-xs hidden lg:block">
            Built with Next.js | React | TypeScript | TailwindCSS
          </p>
          <SourceLink />
        </footer>
      </div>
    </div>
  )
}
