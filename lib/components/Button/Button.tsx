import type { MouseEvent, TouchEvent } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { Theme } from '@emotion/react'

export interface ButtonProps {
  size?: 'small' | 'normal' | 'large'
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'alt' | 'danger'
  isActive?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLButtonElement>) => void
  onTouchStart?: (e: TouchEvent<HTMLButtonElement>) => void
}

const Button = styled.button<ButtonProps>`
  ${sizes};
  ${variants};
  display: flex;
  justify-content: center;
  white-space: nowrap;
  align-items: center;
  border-radius: 8px;
  outline: none;
  pointer-events: all;
  border-style: solid;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family};
  transition: ${({ theme }) => theme.transition.all};
  &:hover {
    background-size: 100% 100%;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: block;
    width: 100%;
  }
`

/**
 * Styled Props
 */

interface StyledProps extends ButtonProps {
  theme: Theme
}

function sizes({ size }: StyledProps) {
  switch (size) {
    case 'small':
      return css`
        font-size: 14px;
        padding: 8px 24px;
      `
    case 'large':
      return css`
        font-size: 18px;
        padding: 24px 48px;
      `
    default:
      return css`
        font-size: 16px;
        padding: 16px 40px;
      `
  }
}

function variants({ variant, isActive, theme }: StyledProps) {
  switch (variant) {
    case 'secondary':
      return css`
        color: ${theme.color.white[100]};
        background: ${theme.color.gray[600]};
        border-color: ${theme.color.gray[600]};
        box-shadow: ${theme.shadow.up.one};
        &:hover {
          color: ${theme.color.white[100]};
          background: ${theme.color.gray[300]};
          border-color: ${theme.color.gray[300]};
          box-shadow: ${theme.shadow.up.two};
        }
        &:active {
          box-shadow: ${theme.shadow.up.one};
        }
      `
    case 'tertiary':
      return css`
        color: ${theme.color.white[100]};
        background: transparent;
        /* background: ${theme.color.indigo[600]}; */
        border-color: ${theme.color.indigo[400]};
        &:hover {
          color: ${theme.color.white[100]};
          border-color: ${theme.color.indigo[300]};
        }
      `
    case 'alt':
      return css`
        color: ${theme.color.white[100]};
        background: ${theme.color.blue[700]};
        border-color: ${isActive
          ? theme.color.blue[400]
          : theme.color.blue[700]};
        &:hover {
          border-color: ${theme.color.blue[300]};
        }
      `
    case 'danger':
      return css`
        color: ${theme.color.red[300]};
        background: transparent;
        border-color: ${isActive
          ? theme.color.blue[400]
          : theme.color.blue[700]};
        &:hover {
          border-color: ${theme.color.blue[300]};
        }
      `
    default:
      return css`
        color: ${theme.color.white[100]};
        background: ${theme.color.indigo[400]};
        border-color: ${theme.color.indigo[400]};
        box-shadow: ${theme.shadow.up.one};
        &:hover {
          color: ${theme.color.white[100]};
          background: ${theme.color.indigo[300]};
          box-shadow: ${theme.shadow.up.two};
          border-color: ${theme.color.indigo[300]};
        }
      `
  }
}

export default Button
