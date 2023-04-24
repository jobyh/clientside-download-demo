import * as React from 'react'
import classNames from 'classnames'
import { HTMLAttributes } from 'react'

interface FilenameInput extends HTMLAttributes<HTMLDivElement> {
  filename: string
}

export default function FilenameInput(props: FilenameInput) {
  return (
    <div className={classNames(props.className, 'flex items-center gap-5')}>
      <label>Filename</label>
      <div
        className={classNames(
          'focus-within:ring-black focus-within:ring-[5px]',
          'flex-grow flex items-center justify-between',
          'h-full bg-white px-8 rounded-lg overflow-hidden',
        )}
      >
        <input
          type="text"
          placeholder={props.filename}
          className={classNames(
            'h-full rounded-lg',
            'focus:outline-none',
            'flex-grow',
          )}
          onChange={props.onChange}
        />
        <span>.txt</span>
      </div>
    </div>
  )
}
