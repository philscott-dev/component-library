import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'

export interface SubtitleProps {
  size?: 'small' | 'normal' | 'large'
  weight?: 'normal' | 'white'
}

const Subtitle = styled.p<SubtitleProps>`
  ${sizes};
  ${weights};
  text-transform: uppercase;
  text-align: inherit;
  font-family: ${({ theme }) => theme.font.family};
`

interface StyledProps extends SubtitleProps {
  theme: Theme
}

function sizes({ size, theme }: StyledProps) {
  switch (size) {
    case 'small':
      return css`
        font-size: 12px;
        letter-spacing: 0.67px;
        @media screen and (max-width: ${theme.breakpoint.small}) {
          font-size: 12px;
          letter-spacing: 0.67px;
        }
      `
    case 'large':
      return css`
        font-size: 16px;
        letter-spacing: 0.89px;
        @media screen and (max-width: ${theme.breakpoint.small}) {
          font-size: 14px;
          letter-spacing: 0.78px;
        }
      `
    default:
      return css`
        font-size: 14px;
        letter-spacing: 0.78px;
        @media screen and (max-width: ${theme.breakpoint.small}) {
          font-size: 12px;
          letter-spacing: 0.67px;
        }
      `
  }
}

function weights({ weight, theme }: StyledProps) {
  switch (weight) {
    case 'white':
      return css`
        color: ${theme.color.white[100]};
      `
    default:
      return css`
        color: ${theme.color.black[700]};
      `
  }
}

export default Subtitle
