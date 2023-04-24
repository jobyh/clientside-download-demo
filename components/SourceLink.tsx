import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub as githubIcon } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'

export default function SourceLink() {
  return (
    <a
      href="https://github.com/jobyh/clientside-download-demo"
      className={classNames(
        'py-1.5 -mx-3 px-3',
        'group flex items-center gap-4 font-bold',
        'focus:outline-none focus:ring-[4px] focus:ring-black',
      )}
    >
      <span>Source code</span>
      <FontAwesomeIcon
        icon={githubIcon}
        className="group-focus:text-black h-10 w-10 bg-white p-1 rounded-full"
      />
    </a>
  )
}
