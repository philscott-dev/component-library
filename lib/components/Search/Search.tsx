import styled from '@emotion/styled'
import { FC, ChangeEventHandler } from 'react'
import { FiSearch } from 'react-icons/fi'

export interface SearchProps {
  className?: string
  placeholder?: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Search: FC<SearchProps> = ({
  className,
  placeholder = 'Search',
  value,
  onChange,
}) => {
  return (
    <div className={className}>
      <FiSearch />
      <input
        autoCapitalize="off"
        autoCorrect="off"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default styled(Search)`
  position: relative;
  height: 40px;
  box-sizing: border-box;
  > svg {
    position: absolute;
    margin: auto 14px;
    top: 0;
    bottom: 0;
    color: ${({ theme }) => theme.color.gray[200]};
  }
  > input {
    box-sizing: border-box;
    height: inherit;
    outline: none;
    border-radius: 32px;
    padding-left: 40px;
    font-weight: 500;
    font-size: 14px;
    font-weight: 400;
    width: 400px;
    border: none;
    background: ${({ theme }) => theme.color.indigo[300]};
    color: ${({ theme }) => theme.color.white[100]};
    font-family: ${({ theme }) => theme.font.family};
    ::placeholder {
      color: ${({ theme }) => theme.color.gray[200]};
      opacity: 1; /* Firefox */
    }
  }
`
