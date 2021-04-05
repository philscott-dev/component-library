import styled from '@emotion/styled'
import { FC, useRef, useState } from 'react'
import { useOnClickOutside } from 'hooks'
import { IconButton, Text } from 'components'
import { download } from 'helpers'
import { FiChevronDown, FiDownload } from 'react-icons/fi'
import { DropdownMenu, DropdownOption } from '../Dropdown'
import { arrayToCsv } from 'utils/csv'
import { PathMap } from 'utils/pathMap'

export interface ExportProps {
  className?: string
  data?: any[]
  pathMap?: PathMap
}

const Export: FC<ExportProps> = ({ className, data, pathMap }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  useOnClickOutside({
    ref: dropdownRef,
    ignoreRefs: [buttonRef],
    handler: () => setDropdownVisible(false),
    shouldListen: isDropdownVisible,
  })

  const handleButtonClick = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  const handleJSON = () => {
    setDropdownVisible(false)
    download(JSON.stringify(data), 'file.json', 'text')
  }

  const handleCSV = () => {
    setDropdownVisible(false)
    if (pathMap && data) {
      const paths = Object.keys(pathMap)
        .map((path) => {
          // remove first 2 characters *.
          const string = path.substr(2)
          return string.split('[*]').join('')
        })
        .filter((path) => {
          return !path.endsWith('[*]')
        })
      download(arrayToCsv(data, paths), 'file.csv', 'text')
    }
  }
  return (
    <span className={className}>
      <div>
        <IconButton ref={buttonRef} onMouseDown={handleButtonClick}>
          <FiDownload />
          <Text variant="light">Export</Text>
          <FiChevronDown />
        </IconButton>
        <DropdownMenu ref={dropdownRef} isVisible={isDropdownVisible}>
          <DropdownOption value={'json'} onMouseDown={handleJSON}>
            <Text>JSON</Text>
          </DropdownOption>
          <DropdownOption value={'csv'} onMouseDown={handleCSV}>
            <Text>CSV</Text>
          </DropdownOption>
        </DropdownMenu>
      </div>
    </span>
  )
}

export default styled(Export)`
  display: inline-flex;
  align-items: center;
  > p {
    margin-right: 16px;
    font-size: 14px;
    font-weight: 500;
  }
  > div {
    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      padding: 2px 12px;
      border: ${({ theme }) => `1px solid ${theme.color.white[100]}`};
      > p {
        font-size: 14px;
        margin-right: 2px;
      }
      > svg {
        :nth-of-type(1) {
          margin-right: 8px;
        }
      }
    }
  }
`
