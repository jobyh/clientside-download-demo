import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDownToSquare as downloadIcon,
  faSpinner as spinnerIcon,
} from '@fortawesome/sharp-solid-svg-icons'
import * as React from 'react'
import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

interface DownloadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  generating: boolean
}

export default function DownloadButton({
  generating,
  ...props
}: DownloadButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        'flex items-center justify-center font-bold bg-white',
        'rounded-lg px-16 py-6 text-xl lg:text-2xl',
        'focus:ring-focus-bg focus:ring-[5px]',
        'focus:outline-none active:scale-95',
        'disabled:opacity-60 disabled:active:scale-100',
        'active:scale-95',
        'space-x-4',
        'shadow-xl',
      )}
    >
      <div className="-translate-y-[1px] -ml-5 relative w-6 h-6">
        {generating && (
          <FontAwesomeIcon
            icon={spinnerIcon}
            className="animate-spin absolute top-0 left-0"
          />
        )}
        {!generating && (
          <FontAwesomeIcon
            icon={downloadIcon}
            className="absolute top-0 left-0"
          />
        )}
      </div>
      <span>Download</span>
    </button>
  )
}
