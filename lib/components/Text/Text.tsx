import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'

export interface TextProps {
  size?: 'large' | 'normal' | 'small'
  variant?: 'primary' | 'emphasized' | 'deemphasized' | 'light'
  align?: 'center' | 'left' | 'right'
  ellipsis?: boolean
}

const Text = styled.p<TextProps>`
  ${sizes}
  ${variants}
  text-align: ${({ align }) => align || 'initial'};
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.font.family};
  ${({ ellipsis }) =>
    ellipsis
      ? css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : null}
`

/**
 * Styled Props
 */

interface StyledProps extends TextProps {
  theme: Theme
}

function variants({ variant, theme }: StyledProps) {
  switch (variant) {
    case 'emphasized':
      return css`
        font-weight: 500;
        color: ${theme.color.blue[300]};
      `
    case 'deemphasized':
      return css`
        font-weight: 300;
        color: ${theme.color.gray[300]};
      `
    case 'light':
      return css`
        font-weight: 300;
        color: ${theme.color.white[100]};
      `
    default:
      return css`
        font-weight: 500;
        color: ${theme.color.white[100]};
      `
  }
}

function sizes({ size, theme }: StyledProps) {
  switch (size) {
    case 'small':
      return css`
        font-size: 14px;
        line-height: 18px;
        @media screen and (max-width: ${theme.breakpoint.small}) {
          font-size: 14px;
          line-height: 18px;
        }
      `
    case 'large':
      return css`
        font-size: 18px;
        line-height: 26px;
        @media screen and (max-width: ${theme.breakpoint.small}) {
          font-size: 16px;
          line-height: 21px;
        }
      `
    default:
      return css`
        font-size: 16px;
        line-height: 24px;
        @media screen and (max-width: ${theme.breakpoint.small}) {
          font-size: 14px;
          line-height: 20px;
        }
      `
  }
}

export default Text
