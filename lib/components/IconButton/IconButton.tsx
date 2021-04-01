import styled from '@emotion/styled'

export interface IconButtonProps {
  isActive?: boolean
}

const IconButton = styled.button<IconButtonProps>`
  margin: 0;
  padding: 0;
  line-height: 0;
  border: 0;
  font-size: 100%;
  display: block;
  background: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.blue[300] : theme.color.white[100]};
  outline: none;

  & * {
    color: ${({ theme, isActive }) =>
      isActive ? theme.color.blue[300] : theme.color.white[100]};
  }

  &:hover {
    & * {
      color: ${({ theme }) => theme.color.blue[300]};
      transition: ${({ theme }) => theme.transition.color};
    }
  }
  &:disabled {
    pointer-events: none;
    & * {
      color: ${({ theme }) => theme.color.gray[300]};
    }
  }
`

export default IconButton
