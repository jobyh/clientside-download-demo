import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation as warningIcon } from '@fortawesome/sharp-solid-svg-icons'
import * as React from 'react'
import { HTMLAttributes } from 'react'
import classNames from 'classnames'

interface WarningProps extends HTMLAttributes<HTMLDivElement> {
  //
}

export default function Warning(props: WarningProps) {
  return (
    <div
      className={classNames(
        'bg-amber-100 border-l-8 border-l-amber-300',
        'flex items-center text-lg',
        props.className,
      )}
    >
      <FontAwesomeIcon
        icon={warningIcon}
        className="text-amber-300 ml-4 w-8 h-8"
      />{' '}
      <p className="flex-grow pl-4 pr-10 py-6">
        Quick & dirty demo illustrating 100% client-side file download
      </p>
    </div>
  )
}
